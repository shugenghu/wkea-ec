/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { getCategoryUrl } from '@msdyn365-commerce-modules/retail-actions';
import { addThrottledEvent, IModuleProps,  INodeProps } from '@msdyn365-commerce-modules/utilities';
import { CategoryHierarchy } from '@msdyn365-commerce/commerce-entities';
import { IActionContext, IGridSettings, IImageSettings, isEmptyOrNullObject} from '@msdyn365-commerce/core';
import { TextValueTranslation } from '@msdyn365-commerce/retail-proxy';
import classnames from 'classnames';
import { computed, observable } from 'mobx';
import * as React from 'react';
import { IMenuItemData, INavigationMenuData } from './navigation-menu.data';
import { ICmsNavItemsData, INavigationMenuProps, ISubMenusData, navigationMenuSource } from './navigation-menu.props.autogenerated';

export interface  INavigationMenuViewProps extends INavigationMenuProps<INavigationMenuData> {
    className: string;
    menuItemData: IMenuItemData[];
    Navigation: IModuleProps;
    MenuList: INodeProps;
    ListItem: INodeProps;
    Link: INodeProps;
    Button: INodeProps;
    Span: INodeProps;
    ImageContainer:INodeProps;
    MobileDescriptionContainer:INodeProps;
    MobileBackButton:INodeProps;
    MobileDescriptionLabel:INodeProps;
    imageSettings: IImageSettings;
    gridSettings: IGridSettings;
    isMobileView: boolean;
    DivContainer?:INodeProps;
    ImageDivContainer?:INodeProps;
    showCategoryImage?:boolean;
}

export type GridSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface INavigationMenuState {
    isMobile: boolean;
}

/**
 *
 * NavigationMenu component
 * @extends {React.PureComponent<INavigationMenuProps<INavigationMenuData>>}
 */
class NavigationMenu extends React.PureComponent<INavigationMenuProps<INavigationMenuData>, INavigationMenuState> {
    private static CMSItemIdInit: number = 1000;
    private static RSItemIdInit: number = 5000;
    private resizeThrottledEventHandler?: (event: Event) => void;
    private menuItemList: IMenuItemData[];
    private isRetail: boolean = true;
    private isCMS: boolean = true;
    @observable
    private viewport: GridSize;
    public static getFriendlyName(locale: string, nameTranslations?: TextValueTranslation[]): string | undefined {
        let nameTranslation: TextValueTranslation | undefined;
        if (locale && nameTranslations && nameTranslations.length > 0) {
            nameTranslation = nameTranslations.find(item => item.Language!.toLowerCase() === locale.toLowerCase());
        }

        return nameTranslation && nameTranslation.Text;
    }

    constructor(props: INavigationMenuProps<INavigationMenuData>) {
        super(props);
        this._updateViewport = this._updateViewport.bind(this);
        this.viewport = props.context.request && props.context.request.device && props.context.request.device.Type === 'Mobile' ? 'xs' : 'lg';
        this._setNavigationSource(this.props.config && this.props.config.navigationMenuSource);
        this.state = {isMobile: this.isMobile};
        this.menuItemList = [];
    }

    @computed get isMobile(): boolean {
        return (this.viewport === 'xs' || this.viewport === 'sm');
    }

    public componentDidMount(): void {
        this.resizeThrottledEventHandler =
        window && addThrottledEvent(window, 'resize', this._updateViewport as EventListener);
        this._updateViewport();
    }

    public componentWillUnmount(): void {
        window && window.removeEventListener('resize', this.resizeThrottledEventHandler!, false);
    }

    public render(): JSX.Element | null {
        this.menuItemList =  this._mapData();
        console.log(this.menuItemList);
        // 如果它为空
        if (isEmptyOrNullObject(this.props.data)) {
            this.props.telemetry.error('Navigatiomenu returned null');
            return null;
        }
        // 它默认照片的长宽
        const defaultImageSettings: IImageSettings = {
            viewports: {
                xs: { q: `w=224&h=300&m=6`, w: 0, h: 0 },
                xl: { q: `w=224&h=300&m=6`, w: 0, h: 0 }
            },
            lazyload: true
        };

        const viewProps = {
            ...this.props,
            ...this.state,
            imageSettings: defaultImageSettings,
            gridSettings: this.props.context.request.gridSettings,
            Navigation: {
                moduleProps: this.props,
                className: classnames('ms-nav', this.props.config.className, this.state.isMobile ? 'mobile-vp' : 'desktop-vp'),
                tag:'nav',
                role:'navigation',
                'aria-label': this.props.resources.menuAriaLabel
            },
            MenuList: {
                className: 'ms-nav__list',
                tag:'ul',
                role: 'menu'
            },
            ListItem: {
                className: 'ms-nav__list__item',
                role: 'presentation',
                tag:'li'
            },
            showCategoryImage:this.props.config.displayCategoryImage||false,
            Link: {
                tag: 'a',
                className: 'ms-nav__list__item__link',
                role: 'menuitem'
            },
            DivContainer:
            {
                tag: 'div',
                className:'ms-nav__feature',
                role:'menu'
            },
            ImageDivContainer:
            {
                tag:'div',
                className:'category-image',
                role:'menu'
            },
            Button: {
                className: 'ms-nav__list__item__button',
                tag:'span',
                role:'menuitem',
                onClick:this.props
            },
            ImageContainer: {
                className: 'ms-nav__list__item__image'
            },
            Span: {
                className: 'ms-nav__list__item__span',
                tag:'span'
            },
            MobileDescriptionContainer: {
                className: 'ms-nav__list__mobile__container'
            },
            MobileBackButton: {
                className: 'ms-nav__list__mobile__container__button',
                tag:'a',
                'aria-label': this.props.resources.backButtonAriaLabel,
                onClick:this.props
            },
            MobileDescriptionLabel: {
                className: 'ms-nav__list__mobile__container__span',
                tag:'span'
            },
            isMobileView: this.state.isMobile,
            menuItemData: this.menuItemList,
            className: classnames('ms-nav', this.props.config.className)
        };

        return this.props.renderView(viewProps) as React.ReactElement;
    }

    private _mapData(): IMenuItemData[] {
        const { data, config } = this.props;
        const mergedData: IMenuItemData[] = [];
        if (this.isRetail && data && data.categories && data.categories.result && data.categories.result.length > 0) {
            data.categories.result.map((item: CategoryHierarchy) => (
                mergedData.push(this._constructMenuItemData(item, undefined, true))
            ));
        }

        if (this.isCMS && config.cmsNavItems &&  config.cmsNavItems.length > 0) {
            config.cmsNavItems.map((item: ICmsNavItemsData, idx: number) => (
                mergedData.push(this._constructMenuItemData(undefined, item, false, idx+1))
            ));
        }
        return mergedData;
    }

    // tslint:disable-next-line: cyclomatic-complexity
    private _constructMenuItemData(retailItem?: CategoryHierarchy, cmsItem?: ICmsNavItemsData, isRetail?: boolean, idx?: number): IMenuItemData {
        const locale = this.props.context && this.props.context.request && this.props.context.request.locale ? this.props.context.request.locale : 'en-us';
        const imageSouce  = retailItem && retailItem.Images && retailItem.Images[0].Uri ? retailItem.Images[0].Uri: 'empty';
        if (isRetail) {
            return {
                id: NavigationMenu.RSItemIdInit++,
                linkText: NavigationMenu.getFriendlyName(locale, retailItem && retailItem.NameTranslations) || '',
                linkURL: retailItem && retailItem.Url,
                imageSource: imageSouce,
                subMenu: this._getNestedChildren(retailItem,imageSouce)
            } as IMenuItemData;
        } else {
            return {
                id: NavigationMenu.CMSItemIdInit++,
                linkText: cmsItem && cmsItem.linkText || '',
                linkURL: cmsItem && cmsItem.linkUrl && cmsItem.linkUrl.destinationUrl || '',
                imageDestinationURL: cmsItem && cmsItem.imageLink && cmsItem.imageLink.destinationUrl || '',
                imageSource: cmsItem && cmsItem.image && cmsItem.image.src || '',
                subMenu: this._getCMSNestedChildren(cmsItem)
            } as IMenuItemData;
        }
    }

    private _getNestedChildren(category?: CategoryHierarchy,imageSourceUrl?:string): IMenuItemData[] {
        const nestedChildren: IMenuItemData[] = [];
        if (!category || !category.Children || !category.Children.length) {
            return [];
        }
        nestedChildren.push({linkText: this.props.resources.allCategoryMenuText,imageSource:imageSourceUrl,linkURL: getCategoryUrl(category, this.props.context as unknown as IActionContext, {}) });
        category.Children.map((item: CategoryHierarchy) => {
            nestedChildren.push(this._constructMenuItemData(item, undefined, true));
        });
        return nestedChildren;
    }

    private _getCMSNestedChildren(category?: ICmsNavItemsData): IMenuItemData[] {
        const nestedChildren: IMenuItemData[] = [];

        if (!category || !category.subMenus || !category.subMenus.length) {
            return [];
        }

        category.subMenus.map((item: ISubMenusData, idx: number) => {
            nestedChildren.push(this._constructMenuItemData(undefined, item, false, idx));
        });
        return nestedChildren;
    }

    private _setNavigationSource = (sourceType?: navigationMenuSource): void => {
        switch(sourceType) {
            case navigationMenuSource.retailServerOnly:
                this.isRetail = true;
                this.isCMS = false;
                break;
            case navigationMenuSource.cmsOnly:
                this.isRetail = false;
                this.isCMS = true;
                break;
            case navigationMenuSource.all:
                this.isRetail = true;
                this.isCMS = true;
                break;
            default:
        }
    }

    private _updateViewport(): void {
        this.viewport = this._getViewport();
        this.setState({ isMobile: this.isMobile });
    }

    private _getViewport(): GridSize {
        const { context } = this.props;

        // always render in mobile viewport on a mobile device
        if (context.request && context.request.device && context.request.device.Type === 'Mobile') {
            return 'xs';
        }

        if (typeof window !== undefined && window.innerWidth) {
            const gridSettings = context.request.gridSettings;
            if (gridSettings) {
                if (gridSettings.xs && window.innerWidth <= gridSettings.xs.w) {
                    return 'xs';
                } else if (gridSettings.sm && window.innerWidth <= gridSettings.sm.w) {
                    return 'sm';
                } else if (gridSettings.md && window.innerWidth <= gridSettings.md.w) {
                    return 'md';
                } else if (gridSettings.lg && window.innerWidth <= gridSettings.lg.w) {
                    return 'lg';
                } else {
                    return 'xl';
                }
            }
        }

        return 'xs';
    }
}

export default NavigationMenu;
