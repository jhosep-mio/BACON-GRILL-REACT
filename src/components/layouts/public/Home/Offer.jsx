import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Parrilla1 from '../../../../assets/Productos/af500.png';
import Parrilla2 from '../../../../assets/Productos/china505.png';
import {FaBars} from 'react-icons/fa';

import "swiper/css";
import "swiper/css/pagination";

export const Offer = () => {
  return (
    <section className="section ofertas" id="new">
      <h2 className="section__title ofert">OFERTAS</h2>
      <div className="ofertas__container container">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          slidesPerView={3}
          className="mySwiper"
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
            },
            "@0.50": {
              slidesPerView: 1,
            },
            "@1.00": {
              slidesPerView: 2,
            },
            "@1.25": {
              slidesPerView: 3,
            },
            "@1.50": {
              slidesPerView: 3 ,
            },
            "@1.75": {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="ofertas__content swiper-slide">
              <div className="ofertas__tag">Ofertas</div>
              <img src={Parrilla1} alt="" className="ofertas__img" />
              <h3 className="ofertas__title">Parrilla Fire</h3>
              <span className="ofertas__subtitle">Caja China</span>

              <div className="ofertas__prices">
                <span className="ofertas__price">S/980</span>
                <span className="ofertas__discount">2000</span>
              </div>

              <button className="button ofertas__button">
                <a href="#"><FaBars/></a>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ofertas__content swiper-slide">
              <div className="ofertas__tag">offer</div>
              <img src={Parrilla1} alt="" className="ofertas__img" />
              <h3 className="ofertas__title">Parrilla Fire</h3>
              <span className="ofertas__subtitle">Caja China</span>

              <div className="ofertas__prices">
                <span className="ofertas__price">S/980</span>
                <span className="ofertas__discount">2000</span>
              </div>

              <button className="button ofertas__button">
                <a href="#"><FaBars/></a>
              </button>
            </div>
          </SwiperSlide><SwiperSlide>
            <div className="ofertas__content swiper-slide">
              <div className="ofertas__tag">Ofertas</div>
              <img src={Parrilla1} alt="" className="ofertas__img" />
              <h3 className="ofertas__title">Parrilla Fire</h3>
              <span className="ofertas__subtitle">Caja China</span>

              <div className="ofertas__prices">
                <span className="ofertas__price">S/980</span>
                <span className="ofertas__discount">2000</span>
              </div>

              <button className="button ofertas__button">
                <a href="#"><FaBars/></a>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ofertas__content swiper-slide">
              <div className="ofertas__tag">Ofertas</div>
              <img src={Parrilla1} alt="" className="ofertas__img" />
              <h3 className="ofertas__title">Parrilla Fire</h3>
              <span className="ofertas__subtitle">Caja China</span>

              <div className="ofertas__prices">
                <span className="ofertas__price">S/980</span>
                <span className="ofertas__discount">2000</span>
              </div>

              <button className="button ofertas__button">
                <a href="#"><FaBars/></a>
              </button>
            </div>
          </SwiperSlide>

        </Swiper>

      </div>
    </section>
  );
};
