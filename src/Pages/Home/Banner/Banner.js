import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/bn1.png';
import banner2 from '../../../images/banner/bn2.png';
import banner3 from '../../../images/banner/bn3.png';

const Banner = () => {
     return (
          <>
              <Carousel fade>
                    <Carousel.Item>
                    <img
                         className="d-block w-100"
                         src={banner1}
                         alt="First slide"
                    />
                    <Carousel.Caption>
                         <h3>Automotor Service Mechanics</h3>
                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                         className="d-block w-100"
                         src={banner2}
                         alt="Second slide"
                    />

                    <Carousel.Caption>
                         <h3>Automotor Service Mechanics</h3>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                         className="d-block w-100"
                         src={banner3}
                         alt="Third slide"
                    />

                    <Carousel.Caption>
                         <h3>Automotor Service Mechanics</h3>
                         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel> 
          </>
     );
};

export default Banner;