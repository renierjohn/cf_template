import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

function Component_Carousel(data) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {
        data.data.field_ws_carousel_items.map((data, i) => {
          return <Carousel.Item key={i}>
            <Image width='100%'
              src={data.field_ws_image.url.replace('public://', 'http://d10.docksal.site/sites/default/files/')}
              alt={data.field_ws_image.alt} />
            <Carousel.Caption>
              <h3>{data.field_ws_title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        })
      }
    </Carousel>
  );
}

export default Component_Carousel;
