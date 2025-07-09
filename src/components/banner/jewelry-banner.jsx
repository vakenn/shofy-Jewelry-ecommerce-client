import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
// internal
import slider_img_1 from '@assets/img/slider/4/slider-1.png';
import Link from 'next/link';

// slider data 
const slider_data = [
  { subtitle: 'MEDICAST', title: 'Made to Care', img: slider_img_1 },
]

const JewelryBanner = () => {
  const [slider1, setSlider1] = useState(null);

  //  slider setting 
  const main_slider_setting = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    centerMode: false,
  }

  // 
  const [play, setPlay] = useState(false);

  const handleToggle = () => {
    if (play === false) {
      setPlay(true);
      const videos = document.querySelectorAll('.tp-slider-video video');
      videos.forEach((video) => video.play());
    } else {
      setPlay(false);
      const videos = document.querySelectorAll('.tp-slider-video video');
      videos.forEach((video) => video.pause());
    }
  };
  return (
    <>
      <section className="tp-slider-area p-relative z-index-1 fix">
        <Slider {...main_slider_setting} ref={(slider) => setSlider1(slider)} className="tp-slider-active-4 green-bg">
          {slider_data.map((item, i) => (
            <div key={i} className="tp-slider-item-4 tp-slider-height-4 p-relative green-bg d-flex align-items-center" >
              <div className="tp-slider-thumb-4">
                <Image 
                  src={item.img} 
                  alt="slider img" 
                  width={800}
                  height={600}
                  priority
                  style={{ 
                    width: '500px', 
                    height: '500px', 
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
                <div className="tp-slider-thumb-4-shape">
                  <span className="tp-slider-thumb-4-shape-1"></span>
                  <span className="tp-slider-thumb-4-shape-2"></span>
                </div>
              </div>


              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6 col-md-8">
                    <div className="tp-slider-content-4 p-relative z-index-1">
                      <span>{item.subtitle}</span>
                      <h3 className="tp-slider-title-4">{item.title}</h3>
                      <div className="tp-slider-btn-4">
                        <Link href="/shop" className="tp-btn tp-btn-border tp-btn-border-white">Voir nos products</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>


      </section>
    </>
  );
};

export default JewelryBanner;