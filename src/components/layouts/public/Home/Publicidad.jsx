import React from 'react'
import Sale1 from '../../../../assets/Home/menu_sale-1.png';
import Hom2 from '../../../../assets/Home/hom2.png';
import Sale3 from '../../../../assets/Home/menu_sale-3.png';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaArrowRight } from 'react-icons/fa';

export const Publicidad = () => {
    return (
        <div className='Contenedor-home'>
            <Carousel >
                <Carousel.Item interval={2500}>
                    <Row className="justify-content-center align-items-center">
                        <Col lg="4" md="5" sm="7" xs="7" className='Contenedor-home__img_content'>
                            <img
                                src={Sale1}
                                alt="First slide"
                                className='Contenedor-home__img' />

                        </Col>
                        <Col lg="4" md="5" sm="7" xs="7" className='Contenedor-home__text_content'>
                            <h3 className="Contenedor-home__subtitle">#1 Excelente Servicio</h3>
                            <h1 className="Contenedor-home__title">
                                UN <br />
                                EXCELENTE <br />
                                SERVICIO!!
                            </h1>
                            <p className="Contenedor-home__description">
                                Bacon grill  ofrece una experiencia completa de principio a fin. Con diferentes
                                modelos y productos de alta calidad de acuerdo a sus necesidades y al alcance del
                                público consumidor. Además, mantiene ofertas irresistibles en diferentes épocas
                                del año.
                            </p>

                            <div className="Contenedor-home__buttons">
                                <a href="#new" className="button"> Ir a Ofertas</a>
                                <a href="./productos.php" className="button--link button--flex">
                                    Productos
                                    <FaArrowRight /></a>
                            </div>
                        </Col>
                    </Row>

                </Carousel.Item>

                <Carousel.Item interval={2500}>
                    <Row className="justify-content-center align-items-center">
                        <Col lg="4" md="5" sm="7" xs="7" className='Contenedor-home__img_content'>
                            <img
                                src={Hom2}
                                alt="First slide"
                                className='Contenedor-home__img' />

                        </Col>
                        <Col lg="4" md="5" sm="7" xs="7" className='Contenedor-home__text_content'>
                            <h3 className="Contenedor-home__subtitle">#2 Productos de calidad</h3>
                            <h1 className="Contenedor-home__title">
                                PRODUCTOS <br />
                                DE <br />
                                CALIDAD!!
                            </h1>
                            <p className="Contenedor-home__description">
                                Somos una empresa comprometida con nuestros clientes  cuyas acciones diarias las
                                ejecutamos con una elevada vocación de servicio a los clientes basadas en los
                                siguientes principios: Integridad personal, creatividad e innovación.
                            </p>

                            <div className="Contenedor-home__buttons">
                                <a href="#new" className="button"> Ir a Ofertas</a>
                                <a href="./productos.php" className="button--link button--flex">
                                    Productos
                                    <FaArrowRight /></a>
                            </div>
                        </Col>
                    </Row>

                </Carousel.Item>

                <Carousel.Item interval={2500}>
                    <Row className="justify-content-center align-items-center">
                        <Col lg="4" md="5" sm="7" xs="7" className='Contenedor-home__img_content'>
                            <img
                                src={Sale3}
                                alt="First slide"
                                className='Contenedor-home__img' />

                        </Col>
                        <Col lg="4" md="5" sm="7" xs="7" className='Contenedor-home__text_content'>
                            <h3 className="Contenedor-home__subtitle">#3 Envio muy Rapido</h3>
                            <h1 className="Contenedor-home__title">
                                ENVIO <br />
                                MUY <br />
                                RAPIDO!!
                            </h1>
                            <p className="Contenedor-home__description">
                                En estas fiestas navideñas del 20 de diciembre al 30 de diciembre por la compra
                                de cualquier producto se realiza envió gratis a todos los distritos aledaños al
                                cercado de Lima.
                            </p>

                            <div className="Contenedor-home__buttons">
                                <a href="#new" className="button"> Ir a Ofertas</a>
                                <a href="./productos.php" className="button--link button--flex">
                                    Productos
                                    <FaArrowRight /></a>
                            </div>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
