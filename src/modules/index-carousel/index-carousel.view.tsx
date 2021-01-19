/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import * as React from 'react';
import { IIndexCarouselViewProps } from './index-carousel';
import { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
const items = [
    {
        src: 'https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MF7Oh?pubver=1',
        altText: 'Slide 1',
        key: '1'
    },
    {
        src: 'https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MF2Cl?pubver=1',
        altText: 'Slide 2',
        key: '2'
    },
    {
        src: 'https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MF7Ol?pubver=1',
        altText: 'Slide 3',
        key: '3'
    },
    {
      src: 'https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MF2Cm?pubver=1',
      altText: 'Slide 4',
      key: '4'
    },
    {
      src: 'https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MF5dq?pubver=1',
      altText: 'Slide 5',
      key: '5'
    },
    {
      src: 'https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MF5dt?pubver=1',
      altText: 'Slide 6',
      key: '6'
    }
];
const Example = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex: React.SetStateAction<number>) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem className="wkea-index-carousel-content-top-content"
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <a href="连接地址在上面修改"><img src={item.src} alt={item.altText} /></a>
        </CarouselItem>
      );
    });
    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    );
  }
  
export default (props: IIndexCarouselViewProps) => {
    return (
        <div className="wkea-index-carousel-content-top-content">
            <Example></Example>
        </div>
    );
};
