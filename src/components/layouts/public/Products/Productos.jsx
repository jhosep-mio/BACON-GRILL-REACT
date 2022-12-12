import React from 'react';
import Parrilla1 from '../../../../assets/Productos/af500.png'
import {FaBars} from 'react-icons/fa';


export const Productos = () => {
  return (
    <section className="section sale" id="sale">
        <h2 className="section__title titulo">Productos</h2>

        <div className="sale__container container grid">
            <div className="sale__content">
                <img src={Parrilla1} alt="" className="sale__img" />
                <h3 className="sale__title"> Parrilla AF500 </h3>
                <span className="sale__subtitle">Parrilla</span>

                 <span className="sale__price">S/ 899.10 <del className="black_pre">S/ 999</del></span>
                {/* <span className="sale__price">S/ 999</span> */}
                <div className="addcart" id="addcart">
                    <button className="button sale__button" id="checkout">
                        <a href=""><FaBars/></a>
                    </button>
                </div>

            </div>
            <div className="sale__content">
                <img src={Parrilla1} alt="" className="sale__img" />
                <h3 className="sale__title"> Parrilla AF500 </h3>
                <span className="sale__subtitle">Parrilla</span>

                 <span className="sale__price">S/ 899.10 <del className="black_pre">S/ 999</del></span>
                {/* <span className="sale__price">S/ 999</span> */}
                <div className="addcart" id="addcart">
                    <button className="button sale__button" id="checkout">
                        <a href=""><FaBars/></a>
                    </button>
                </div>

            </div>
            <div className="sale__content">
                <img src={Parrilla1} alt="" className="sale__img" />
                <h3 className="sale__title"> Parrilla AF500 </h3>
                <span className="sale__subtitle">Parrilla</span>

                 <span className="sale__price">S/ 899.10 <del className="black_pre">S/ 999</del></span>
                {/* <span className="sale__price">S/ 999</span> */}
                <div className="addcart" id="addcart">
                    <button className="button sale__button" id="checkout">
                        <a href=""><FaBars/></a>
                    </button>
                </div>

            </div>
            <div className="sale__content">
                <img src={Parrilla1} alt="" className="sale__img" />
                <h3 className="sale__title"> Parrilla AF500 </h3>
                <span className="sale__subtitle">Parrilla</span>

                 <span className="sale__price">S/ 899.10 <del className="black_pre">S/ 999</del></span>
                {/* <span className="sale__price">S/ 999</span> */}
                <div className="addcart" id="addcart">
                    <button className="button sale__button" id="checkout">
                        <a href=""><FaBars/></a>
                    </button>
                </div>

            </div>
            <div className="sale__content">
                <img src={Parrilla1} alt="" className="sale__img" />
                <h3 className="sale__title"> Parrilla AF500 </h3>
                <span className="sale__subtitle">Parrilla</span>

                 <span className="sale__price">S/ 899.10 <del className="black_pre">S/ 999</del></span>
                {/* <span className="sale__price">S/ 999</span> */}
                <div className="addcart" id="addcart">
                    <button className="button sale__button" id="checkout">
                        <a href=""><FaBars/></a>
                    </button>
                </div>

            </div>
            <div className="sale__content">
                <img src={Parrilla1} alt="" className="sale__img" />
                <h3 className="sale__title"> Parrilla AF500 </h3>
                <span className="sale__subtitle">Parrilla</span>

                 <span className="sale__price">S/ 899.10 <del className="black_pre">S/ 999</del></span>
                {/* <span className="sale__price">S/ 999</span> */}
                <div className="addcart" id="addcart">
                    <button className="button sale__button" id="checkout">
                        <a href=""><FaBars/></a>
                    </button>
                </div>

            </div>
        </div>
        
    
    </section>
  )
}
