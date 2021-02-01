/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import React, { useState, useEffect } from 'react';
import { IWkeaDocumentViewProps } from './wkea-document';
import * as _ from 'lodash';

const _renderDocumentTabHead = (active: string, setActive: React.Dispatch<React.SetStateAction<string>>, props: IWkeaDocumentViewProps) => {
    const {
        wkeaFaq,
        // wkeaIntroduction,
        // wkeaSupplier,
        // wkeaCulture,
        wkeaWarranty,
        // wkeaAbout
    } = props
    return (
        <div className='wkea-document__tab-head-left'>
            <p className="wkea-doucument__tab-title">帮助中心</p>
            <ul className='wkea-document__tab-head'>
                {wkeaFaq && <li className={active === 'faq' ? 'active' : ''} onClick={() => setActive('faq')} role='button'>
                    常见问题
                </li>}
                {/* {wkeaIntroduction && <li className={active === 'introduction' ? 'active' : ''} onClick={() => setActive('introduction')} role='button'>
                    公司介绍与文化
                </li>}
                {wkeaSupplier && <li className={active === 'supplier' ? 'active' : ''} onClick={() => setActive('supplier')} role='button'>
                    成为供应商
                </li>}
                {wkeaCulture && <li className={active === 'culture' ? 'active' : ''} onClick={() => setActive('culture')} role='button'>
                    维嘉文化
                </li>} */}
                {wkeaWarranty && <li className={active === 'warranty' ? 'active' : ''} onClick={() => setActive('warranty')} role='button'>
                    质保声明
                </li>}
                {/* {wkeaAbout && <li className={active === 'about' ? 'active' : ''} onClick={() => setActive('about')} role='button'>
                    为什么选择维嘉
                </li>} */}
            </ul>
        </div>
    )
}
const _renderDocumentTabBody = (active: string, setActive: React.Dispatch<React.SetStateAction<string>>, props: IWkeaDocumentViewProps) => {
    const {
        wkeaFaq,
        // wkeaIntroduction,
        // wkeaSupplier,
        // wkeaCulture,
        wkeaWarranty,
        // wkeaAbout
    } = props
    return (
        <div className="wkea-document__tab-body">
            {active === 'faq' && wkeaFaq}
            {/* {active === 'introduction' && wkeaIntroduction}
            {active === 'supplier' && wkeaSupplier}
            {active === 'culture' && wkeaCulture} */}
            {active === 'warranty' && wkeaWarranty}
            {/* {active === 'about' && wkeaAbout} */}
        </div>
    )
}


const _getUrlAllParams = () => {
    // 解决乱码问题
    var url = decodeURI(window.location.href)
    var res = {}
    var url_data = _.split(url, '?').length > 1 ? _.split(url, '?')[1] : null ;
    if (!url_data) return null
    var params_arr = _.split(url_data, '&')
    _.forEach(params_arr, function(item) {
           var key = _.split(item, '=')[0]
           var value = _.split(item, '=')[1]
           res[key] = value
    }); 
    return res
}

export default (props: IWkeaDocumentViewProps) => {
    const [active, setActive] = useState('')

    useEffect(() => {
        const params = _getUrlAllParams()
        // @ts-ignore
        if (params && params.active) {
            // @ts-ignore
            setActive(params.active)
        } else {
            setActive('faq')
        }
    }, [])

    return (
        <div className="wkea-document">
            <div className="wk-product-detail__tab row">
                {_renderDocumentTabHead(active, setActive, props)}
                {_renderDocumentTabBody(active, setActive, props)}
            </div>
        </div>
    );
};