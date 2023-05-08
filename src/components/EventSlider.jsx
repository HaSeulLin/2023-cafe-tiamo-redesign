import React from "react";
import Slider from "react-slick";
import '../css/eventslick.css';
import '../css/eventslick-theme.css';

// 폰트어썸
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'


// 함수형 변경
export default function EventSlider() {
  const settings = {
    dots : true,
    infinite: true,
    fade : true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed : 3000,
    prevArrow : <EventPrevArrow />,
    nextArrow : <EventNextArrow />
  };
    return (
      <div className="slider-wrap">
        {/** 위의 객체 내용이 들어옴 */}
        <Slider {...settings}>
          <div className="slide-img">
            <img src={`${process.env.PUBLIC_URL}/img/event1.jpg`} alt="" />
          </div>
          <div className="slide-img">
            <img src={`${process.env.PUBLIC_URL}/img/event2.jpg`} alt="" />
          </div>
          <div className="slide-img">
            <img src={`${process.env.PUBLIC_URL}/img/event3.jpg`} alt="" />
          </div>
          <div className="slide-img">
            <img src={`${process.env.PUBLIC_URL}/img/event4.jpg`} alt="" />
          </div>
        </Slider>
      </div>
    );
}

function EventPrevArrow (props) {
  const {className, style, onClick} = props;
  return (
    <div onClick={onClick}>
      <FontAwesomeIcon 
        icon={faChevronLeft}
        className={className}
        style={{...style, display:'block', color:'black',
          width:'48px', height:'48px', left:'12px', top:'calc(50% - 2px)'}}
      />
            <FontAwesomeIcon 
        icon={faChevronLeft}
        className={className}
        style={{...style, display:'block', color:'white',
          width:'48px', height:'48px', left:'12px', top:'calc(50% + 2px)'}}
      />
      <FontAwesomeIcon 
        icon={faChevronLeft}
        className={className}
        style={{...style, display:'block', color:'rgb(255, 113, 112)',
          width:'49px', height:'49px', left:'10px'}}
      />

    </div>
  );
}

function EventNextArrow (props) {
  const {className, style, onClick} = props;
  return (
    <div onClick={onClick}>
      <FontAwesomeIcon 
        icon={faChevronRight}
        className={className}
        style={{...style, display:'block', color:'white',
          width:'48px', height:'48px', right:'10px', top:'calc(50% - 2px)'}}
      />
            <FontAwesomeIcon 
        icon={faChevronRight}
        className={className}
        style={{...style, display:'block', color:'black',
          width:'48px', height:'48px', right:'10px', top:'calc(50% + 2px)'}}
      />
      <FontAwesomeIcon 
        icon={faChevronRight}
        className={className}
        style={{...style, display:'block', color:'rgb(255, 113, 112)',
          width:'49px', height:'49px', right:'10px'}}
      />

    </div>
  );
}