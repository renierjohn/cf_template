import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from './Image_component';

function Carousel_component() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image src="https://www.etatvasoft.com/insights/wp-content/uploads/2017/02/b-thumb-img9.jpg" />
        <Carousel.Caption>
          <h3 className="">First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="https://www.etatvasoft.com/insights/wp-content/uploads/2017/02/b-thumb-img9.jpg" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="https://www.etatvasoft.com/insights/wp-content/uploads/2017/02/b-thumb-img9.jpg" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel_component;
