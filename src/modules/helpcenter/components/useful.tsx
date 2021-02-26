import React, { useState } from 'react';
import { IHelpcenterViewProps } from '../helpcenter';

export default (props: IHelpcenterViewProps) => {
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
        <div className='additional'>    
            <div className='useful'>
                <img className='img' onClick={clickUsefulHandle} src={useful ? `${baseUrl}eup.png` : `${baseUrl}useful.png`} />
                <span onClick={clickUsefulHandle} className="comment comment-useful">有用</span>
            </div>
            <div className='useful'>
                <img className='img' onClick={clickUselessHandle} src={useless ? `${baseUrl}edown.png` : `${baseUrl}ddown.png`} />
                <span onClick={clickUselessHandle} className="comment comment-useless">没用</span>
            </div>
            <p className='call_us'>如未能解决您的问题，请&nbsp;<a href='#'>联系客服</a>&nbsp;进行反馈。</p>
        </div>
    );
};
