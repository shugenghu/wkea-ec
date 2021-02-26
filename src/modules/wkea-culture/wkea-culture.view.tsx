/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import * as React from 'react';
import { IWkeaCultureViewProps } from './wkea-culture';

export default (props: IWkeaCultureViewProps) => {
    let baseUrl = props.context.request.apiSettings.baseImageUrl
    baseUrl = baseUrl.slice(-1) === '/' ? baseUrl.slice(0, baseUrl.length - 1) : baseUrl
    return (
        <div className="wkea-culture wkea-cms">
            <div>
                <div style={{ borderBottom: '10px solid #00B0E0', marginBottom: '26px', paddingBottom: '8px' }}>
                    <img src={`${baseUrl}wkea-log.png`} />
                </div>
                <p className="b font-family-yahei" style={{ marginBottom: '5px' }}>真正以客户体验为中心，让天下没有难买的工业品</p>
                <p className="font-family-yahei" style={{ marginBottom: '40px' }}>上海维嘉的理念是真正以客户体验为中心，通过满足客户的所有工业品需求，成为客户首选的采购网站，让 天下没有难买的工业品!通过市场数据支撑和客户满意度调查聚焦客户关注的挑战和压力，以持续保持高强度学习和优化供应商管理提供有竞争力的产品、服务和解决方案，持续为客户创造最大价值。</p>
                <p className="font-family-yahei" style={{ marginBottom: '40px' }}>一直以来，以<strong>客户为中心</strong>的理念鞭策着维嘉人勤奋工作、不懈坚持。维嘉相信通过从事有意义的工作和保持有意义的人际关系，抓住客户需求的痛点如货期不准、无现货、质量差去解决客户问题，拥有优质服务、高性价比、<strong>标准功能100%现货供应且有质量保证的《WKEA》品牌产品，以尽可能低的价格为客户提供真正 优质的现货产品及服务</strong>，我们将在工业品行业内占有一席之地。</p>
                <p className="font-family-yahei" style={{ marginBottom: '40px' }}>倾听客户的需求，倾听每一位人员的声音。企业文化在公司实际工作中起着重要的作用，既要受组织本身的 性质所影响，又会反过来对公司的发展起推动作用。维嘉一直以来以求实、进取、创新、协同、分享的文化来激励和鼓舞公司的所有人员，在完善工序流程的基础上加强公司的文化建设，让所有人员都能实现自身的价值，才能使公司持续高效运转。在发展中，维嘉以<strong>屡败屡战</strong>的精神，不断改善，志存高远，意志坚定。</p>
                <p className="font-family-yahei" style={{ marginBottom: '40px' }}>为了实现让天下没有难买的工业品，不仅在工序标准和服务标准上要改善，更需要让人员理解并认同企业文 化，做到真正以客户体验为中心而工作。在文化建设的期初阶段，存在一个基于需要解决理念和核心价值观说明图表、日常操作规范、数字化或清单化、环境影响等方面的传统工作关系率先让成员接受并予以执行， 而在建设成熟阶段，实际工作者反过来可以保证自己所创造的价值能促进企业的可持续发展</p>
                <p className="font-family-yahei" style={{ marginBottom: '40px' }}>通过践行公司的理念和核心价值观，利用培训、相关规范或说明，在对外宣传和实际工作中保持一致，维护 正直和热爱，将任何改善客户体验的想法和行为在维嘉一路绿灯、畅通无阻，维嘉鼓励所有的人员在客户服务以及满足客户需求等所有以客户为中心的方面进行创新或改善。</p>
            </div>
            <div>
                <h2 className="font-family-yahei b">发展战略</h2>
                <div>
                    <p className="font-family-yahei" style={{ marginBottom: '6px' }}><strong>优质的客户服务</strong></p>
                    <p className="font-family-yahei" style={{ marginBottom: '26px' }}>客户需求是维嘉发展的原动力，为客户服务是维嘉存在的唯一理由，维嘉<strong>客户服务</strong>三大标准:准确无误、真诚坦率、优质卓越;维嘉要求所有人员都以满足客户的需求来思考主要工作，同时，维嘉通过不断完善 的客户满意度调查问题解决或优化机制，客户的需求、不满的地方、提出的意见都将最终通过标准化落实，关注客户所关注的问题，不仅仅包括客户当前的需求，更要考虑潜在的需求和可能。</p>
                </div>
                <div>
                    <p className="font-family-yahei" style={{ marginBottom: '6px' }}><strong>一站式电商网站</strong></p>
                    <p className="font-family-yahei" style={{ marginBottom: '26px' }}>通过丰富产品线、完备产品信息，真正做到阳光采购，努力成为客户购买工业品的首选网站，做到让客户无 需咨询可直接自助下单的最优体验;有效的意见落实、切实的需求满足、积极的服务热情是平台建设的三个重要因素。建立客户和供应商可人人参与、需求直接落实的平台，通过信息技术的数据支撑，针对具体用户 需求或分析用户习惯进行设计，通过不断学习和创新搭建产生积极促进的环境。</p>
                </div>
                <div>
                    <p className="font-family-yahei" style={{ marginBottom: '6px' }}><strong>高效的管理体系</strong></p>
                    <p className="font-family-yahei" style={{ marginBottom: '26px' }}>持续改善、优化管理，实现高效的流程化、自动化运作，确保端到端的优质交付，一方面可以降低运营成 本，更重要的是能加快客户服务速度。在维嘉，个人的成功是以标准的可重复操作和高规格的服务理念为基础的。维嘉鼓励所有人员不断改善现有流程，一用通过有形因素如产品和服务、软件、平台、交流方式，二 可通过无形因素如品牌理念、工作态度、工作氛围、制度建设与贯彻落实项目运转。</p>
                </div>
                <div>
                    <p className="font-family-yahei" style={{ marginBottom: '6px' }}><strong>进取的企业文化</strong></p>
                    <p className="font-family-yahei" style={{ marginBottom: '26px' }}>以让天下没有难买的工业品为本，坚持求实、进取、创新、协同、分享。在标准化流程工作的同时，公司里 的任何一个工作人员都有创新的机会，通过维嘉案例库和知识文章，个体作用将被充分发挥，使得维嘉的工序和服务标准可以源源不断地创造出新的构思。维嘉倡导工作就是生活的自由环境，充分尊重人员“合理或 不合理的”意见和建议，维嘉人通过创新改善、持续提高服务标准，反过来更能促进进取的工作环境。</p>
                </div>
            </div>
            <div style={{ marginBottom: '200px' }}>
                <div className="align-center" style={{ marginTop: '70px' }}><img src={`${baseUrl}wkea-log.png`} style={{display: 'inline'}}/></div>
                <p className="font-family-yahei align-center" style={{ marginBottom: '26px' }}>Wonderful price King product Excellent service Action</p>
                <p className="font-family-yahei align-center">正如维嘉品牌一样，践行让天下没有难买的工业品的同时，保证厚道的价格、更好的产品、卓越的服务 成立一套可操作、经过实际测试的操作手册或工作指南 ，穿插说明维嘉理念并示范行动，理念终将成为现实</p>
            </div>
        </div>
    );
};
