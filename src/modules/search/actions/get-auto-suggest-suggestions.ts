import { generateImageUrl } from '@msdyn365-commerce-modules/retail-actions';
import { Autosuggestions } from '@msdyn365-commerce/commerce-entities';
import {
    CacheType, createObservableDataAction, IAction, IActionContext, IActionInput,
    ICreateActionContext
} from '@msdyn365-commerce/core';
import { SearchSuggestion, SearchSuggestionCriteria } from '@msdyn365-commerce/retail-proxy';
import {
    getSearchSuggestionsAsync
} from '@msdyn365-commerce/retail-proxy/dist/DataActions/StoreOperationsDataActions.g';

// @ts-ignore
export const enum SuggestionType {
    Category = 'ScopedCategory',
    Keyword = 'Keyword',
    Product = 'Product',
    None = 'None'
}

/**
 * Input class for auto suggest search input
 */
export class AutoSuggestInput implements IActionInput {
    public searchQuery?: string;
    public topResultsCount?: number;
    public suggestionType?: string;
    public hitPrefix?: string;
    public hitSuffix?: string;

    constructor(searchText?: string, top?: number, suggestionType?: string, hitPrefix?: string, hitSuffix?: string) {
        this.searchQuery = searchText;
        this.topResultsCount = top;
        this.suggestionType = suggestionType;
        this.hitPrefix = hitPrefix;
        this.hitSuffix = hitSuffix;
    }

    public getCacheKey = () => `AutoSuggestSearchSuggestions`;
    public getCacheObjectType = () => 'AutoSuggestSearchSuggestions';
    public dataCacheType = (): CacheType => 'none';
}

const createInput = (inputData: ICreateActionContext) => {
    return new AutoSuggestInput();
};

/**
 * Calls the Retail API and returns a auto-suggest suggestions
 */
export async function getSearchSuggestionsAction(input: AutoSuggestInput, ctx: IActionContext): Promise<Autosuggestions | null> {
    // If no input is provided fail out
    if (!input || !input.searchQuery) {
        throw new Error('[getSearchSuggestionsAction]No valid Input was provided, failing');
    }

    const autosuggest: Autosuggestions = {};

    const autoSuggestPromises = [
        _getAutoSuggest(input, autosuggest, ctx),
    ];
    return Promise.all(autoSuggestPromises).then(() => {
        return autosuggest;
    });
}

async function _getAutoSuggest(
    input: AutoSuggestInput,
    autosuggest: Autosuggestions,
    ctx: IActionContext
): Promise<void> {
    const searchCriteria: SearchSuggestionCriteria = {
        ProductSearchCriteria: {
            SearchCondition: input.searchQuery && input.searchQuery.length > 0 ? input.searchQuery : '',
            Context: {
                ChannelId: +ctx.requestContext.apiSettings.channelId,
                CatalogId: +ctx.requestContext.apiSettings.catalogId
            }
        },
        HitPrefix: input.hitPrefix,
        HitSuffix: input.hitSuffix,
        SuggestionType: input.suggestionType
    };

    const searchSuggestions = await getSearchSuggestionsAsync(
        { callerContext: ctx, queryResultSettings: { Paging: { Top: input.topResultsCount } } },
        searchCriteria
    );

    if (searchSuggestions && searchSuggestions.length > 0) {
        // Generate image url
        searchSuggestions.map(
            (item: SearchSuggestion) =>
                (item.ImageUrl = item.ImageUrl ? generateImageUrl(item.ImageUrl, ctx.requestContext.apiSettings) : '')
        );

        autosuggest.AllSearchResults = searchSuggestions;
    } else {
        ctx.telemetry.error(`[getSearchSuggestionsAction] unable to get availabilites for search with suggestion type ${searchCriteria.SuggestionType}`);
    }
}

export default createObservableDataAction({
    id: '@msdyn365-commerce-modules/search/get-auto-suggest-suggestions',
    action: <IAction<Autosuggestions>>getSearchSuggestionsAction,
    input: createInput
});
