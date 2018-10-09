import React, { Component } from "react";
import Slider from "react-slick";
import Img1 from '../../Slider-assets/November-1.png';
import Img2 from '../../Slider-assets/October-3.png'
import Img3 from '../../Slider-assets/September-2.png'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
            <div>
                <img src={Img1} alt="bracelet" className="slider_Img"/>
            </div>
            <div>
                <img src={Img2} alt="Necklace" className="slider_Img"/>
            </div>
            <div>
                <img src={Img3} alt="Ring" className="slider_Img"/>
            </div>
        </Slider>
      </div>
    );
  }
}