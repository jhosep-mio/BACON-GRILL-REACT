import React from 'react';
import logo_footer from '../../../assets/Footer/logo_bacon.png';
import tiktok from '../../../assets/Footer/tik-tok.png';
import instagram from '../../../assets/Footer/instagram.png';

import { FaMapMarkerAlt, FaPhone, FaMobileAlt, FaBookOpen, FaRegHeart } from 'react-icons/fa';

export const Footer = () => {
    
    return (
        <footer className='footer'>
            <div className="content">
                <div className="content__primero box">
                    <div className='content__box-logo'>
                        <img src={logo_footer} className="content__logo-foot"/>
                    </div>
                </div>

                <div className="content__segundo box">
                    <div className="content__topic">MENU</div>
                    <div className="content__sen_list">
                        <FaMapMarkerAlt className="fas" />
                        <p>SAN BORJA – Av. Rosa Toro 1206</p>
                    </div>
                    <div className="content__sen_list">
                        <FaPhone className="fas"/>
                        <p>(01) 489 4490</p>
                    </div>
                    <div className="content__sen_list">
                        <FaPhone className="fas"/>
                        <p>(01) 309 0879</p>
                    </div>
                    <div className="content__sen_list">
                        <FaMobileAlt />
                        <p>+51 998 347 396</p>
                    </div>
                    <div className="content__sen_list">
                        <FaMapMarkerAlt className="fas" />
                        <p>SURCO - Av. EL Polo 1151 </p>
                    </div>
                    <div className="content__sen_list">
                        <FaPhone className="fas"/>
                        <p>(01) 489 4490</p>
                    </div>
                    <div className="content__sen_list">
                        <FaMobileAlt />
                        <p>+51 955 141 773</p>
                    </div>

                </div>

                <div className="content__tercero box">
                    <div>
                        <FaBookOpen />
                        <h4>LIBRO DE RECLAMACIONES</h4>
                        <a href="#">
                            <p>Tu opinión es importante para nosotros</p>
                        </a>
                        <br />
                        <a href="https://www.mediafire.com/file/uabququxhmxenbl/ARBA.apk/file" target="_blank">
                            <p className="content__descarga">Descarga la aplicacion de realidad aumentada</p>
                        </a>
                    </div>
                </div>

                <div className="content__cuarto box">
                    <div className="content__topic">BACON GRILL</div>
                    <div className="content__media_icons">
                        <div className="fb-page content__sc" data-href="https://www.facebook.com/profile.php?id=100063755006655"
                            data-tabs="timeline" data-width="170" data-height="70" data-small-header="false"
                            data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                            <blockquote cite="https://www.facebook.com/profile.php?id=100063755006655" className="fb-xfbml-parse-ignore">
                                <a href="https://www.facebook.com/profile.php?id=100063755006655">Inversiones Bacon</a>
                            </blockquote>
                        </div>

                        <div className="content__links_pages">
                            <a href="#"><img src={instagram} alt="" className='content__logo_ins'/></a>
                            <p>@bacon_grill</p>
                            <FaRegHeart/>
                        </div>

                        <div className="content__links_pages">
                            <a href="#"><img src={tiktok} alt="" /></a>
                            <p>@bacon_grill</p>
                            <FaRegHeart/>
                        </div>
                    </div>
                </div>

                <div className="content__bottom_floot">
                    <p>Copyright © 2022 Bacon. Grill | Diseño Página Web por: <a href="#">Grupo 6</a> </p>
                </div>
                
            </div>
        </footer>
    )
}
