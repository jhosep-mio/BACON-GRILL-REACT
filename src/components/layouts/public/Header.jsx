import React from 'react';
import logo from '../../../assets/NavBar/logo.png';
import onlypanda from '../../../assets/NavBar/logo_onlypanda.png';
import icon_close from '../../../assets/NavBar/icon_close.png';
import { FaBars, FaWhatsapp, FaSistrix, FaShoppingCart, FaAngleDown, FaUser, FaGreaterThan } from 'react-icons/fa';
import { useState } from 'react';


export const Header = () => {

    const [active, setActive] = useState(true);

    const mostrarMenuMobile =() =>{
        if(active == true){
            setActive(false);
        }else{
            setActive(true);
        }
    }

    return (
        <nav className="navBar">
            <div className="navTop">
                <div className="navTop__container-top">
                    <div className="navTop__left">
                        <div className="navTop__img-nav">
                            <img src={logo} alt="menu" className="navTop__menu" />
                            <img src={onlypanda} alt="menu" className="navTop__menu navTop__menu--inactive" />
                        </div>
                    </div>

                    <div className="navTop__right">
                        <div className="navTop__conatiner-contacto">
                            <div className="navTop__contacto">
                                <div className="navTop__menu_mobile navTop__menu_mobile--inactiv" >
                                    <div className="navTop__menu_list" onClick={mostrarMenuMobile}>
                                        <FaBars className='navTop__bars_fa' />
                                    </div>
                                </div>
                                <ul className='navTop__contac'>
                                    <li className="navTop__on-active">
                                        <a href="https://wa.me//+51964713135" target="_blank">CONTACTO</a>
                                    </li>
                                    <li className="navTop__image-png navTop__image-png--on-active">
                                        <FaWhatsapp />
                                        <a href="https://wa.me//+51964713135" target="_blank">960613700</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="navTop__container-buscar">
                            <input type="text" placeholder="Buscar...." required />
                            <div className="navTop__buscar-icono">
                                <FaSistrix className='navTop__bb' />
                            </div>
                        </div>
                        {/* <p className="navTop__user_name">Jhosep</p> */}
                        <div className={active ? "navTop__conatiner-login" : "navTop__on-active_button"}>
                            <a href="#" className="navTop__logo_login"><FaUser className='navTop__login_fa' /></a>
                        </div>
                        <div className="navTop__cart-shop navTop__cart-shop--inactive">
                            <FaShoppingCart className='navTop__shopping_fa navTop__cartf' />
                            <span className="navTop__cont_prod">2</span>
                            <FaAngleDown className='navTop__greater' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="navDown">
                <div className={active ? "navbar-bot on-active" : "navbar-bot"}>
                    <ul className="navbar-bot__list">
                        <div className="navbar-bot__product-detail-close navbar-bot__product-detail-close--inactiv" >
                            <img src={icon_close} alt="close" onClick={mostrarMenuMobile}/>
                        </div>

                        <li className="navbar-bot__list_items navbar-bot__list_items--products_detail">
                            <div className="navbar-bot__arrow">
                                <a href="../php/index.php">HOME</a>
                                <FaGreaterThan className='navbar-bot__greater_faT' />
                            </div>
                        </li>

                        <li className="navbar-bot__list_items">
                            <div className="navbar-bot__arrow">
                                <a href="../php/productos.php">PRODUCTOS</a>
                                <FaGreaterThan className='navbar-bot__greater_faT' />
                            </div>
                        </li>

                        <li className="navbar-bot__list_items">
                            <div className="navbar-bot__arrow">
                                <a href="../php/contacto.php">CONTACTO</a>
                                <FaGreaterThan className='navbar-bot__greater_faT' />
                            </div>
                        </li>

                        <li className="navbar-bot__list_items">
                            <div className="navbar-bot__cart-shop navbar-bot__cart-shop--on-active navbar-bot__cart-shop--cart_cart">
                                <FaShoppingCart className='navbar-bot__shopping_fa navbar-bot__cartf' />
                                <span className="navbar-bot__cont_prod">2</span>
                                <FaAngleDown className='navbar-bot__greater' />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
