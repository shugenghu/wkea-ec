import React, { useState } from 'react';
import { IWkeaFaqViewProps } from '../wkea-faq';

export default (props: IWkeaFaqViewProps) => {
    const [useful, setUseful] = useState(false);
    const [useless, setUseless] = useState(false);
    const clickUsefulHandle = () => {
        setUseful(!useful)
        setUseless(false)
    }
    const clickUselessHandle = () => {
        setUseless(!useless)
        setUseful(false)
    }
    let baseUrl = props.context.request.apiSettings.baseImageUrl
    baseUrl = baseUrl.slice(-1) === '/' ? baseUrl.slice(0, baseUrl.length - 1) : baseUrl
    return (
        <div className="additional">
            <p className="info">该回答是否对您有帮助？</p>
            <div className="useful">
                <img className="img" onClick={clickUsefulHandle} src={useful ? `${baseUrl}eup.png` : `${baseUrl}useful.png`} />
                <span onClick={clickUsefulHandle} className="comment comment-useful">有用</span>
            </div>
            <div className="useful">
                <img className="img" onClick={clickUselessHandle} src={useless ? `${baseUrl}edown.png` : `${baseUrl}ddown.png`} />
                <span onClick={clickUselessHandle} className="comment comment-useless">无用</span>
            </div>
        </div>
    )
};
