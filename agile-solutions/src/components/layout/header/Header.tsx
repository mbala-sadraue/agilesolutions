import { BiEnvelope } from "react-icons/bi";
import { BsClock, BsInstagram, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const Header = () => {


    return (

        <>



            <header className="">

                <div className="bg-primary text-white py-3">
                    <div className="m-auto max-w-7xl">
                        <div className=" flex flex-1  md:justify-between justify-center ">
                            
                                <ul className="md:flex flex-1 space-x-3 text-sm hidden">
                                    <li className=" flex space-x-2 items-center">
                                        <i className=""><BsClock className="text-secondary text-secondary text-[1rem]" /> </i>
                                        <span>Secunda - Sexta:
                                            8:00 - 18:00 / Sábado 8:00 - 14:00</span>
                                    </li>
                                    <li className="flex space-x-2 items-center">
                                        <i className=""><BiEnvelope className="text-secondary text-[1.1rem]"/> </i>
                                        <a href="mailto:geral@agilesolutions.ao">geral@agilesolutions.ao</a>
                                    </li>

                                    <li className="flex space-x-2 items-center">
                                        <i className=""><GoLocation className="text-secondary text-[1.1rem]"/> </i>
                                        <span>Jardim de Rosa, Luanda - Angola</span>

                                    </li>


                                </ul>
                          
                            <div className="flex items-center space-x-4 ">
                                <span className="text-sm font-normal">Siga-nos em:</span>
                                <a href="https://www.facebook.com/" rel="noopener noreferrer"   target="_blank"><i className="hover:text-amber-400"><FaFacebookF /> </i></a>
                                <a href="https://www.twitter.com/"  rel="noopener noreferrer"  target="_blank"><i className="hover:text-amber-400"><BsTwitterX /> </i></a>
                                <a href="https://www.linkedin.com/"  rel="noopener noreferrer"  target="_blank"> <i className="hover:text-amber-400"><BsLinkedin /> </i></a>
                                <a href="https://www.instagram.com/"  rel="noopener noreferrer"  target="_blank"><i className="hover:text-amber-400"><BsInstagram /> </i></a>
                                <a href="https://www.youtube.com/" rel="noopener noreferrer"   target="_blank"><i className="hover:text-amber-400"><BsYoutube /> </i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-main">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Navbar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                                aria-label="Toggle navigation">
                                <i className="fa fa-bars"></i>
                                {/* <span className="navbar-toggler-icon"></span> */}
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="about.html">Sobre Nos</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Serviços</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contacto</a>
                                    </li>

                                </ul>
                                <div className="col-auto d-none d-xl-block">
                                    <div className="header-button">
                                        <a className="sideMenuToggler icon-btn" href="#">
                                            {/* <img src="assets/images/icons/menu.svg" alt="" srcset=""> */}
                                        </a>
                                        <a className="btn th-btn " href="tel:+244935378674">
                                            <i className="fa-light fa-phone"></i> ligue para nos ajudar: +244 935 378 674

                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="logo-bg bg-mask"></div>
                    </nav>
                </div>
                {/* <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home <i className="fa fa-plus"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Sobre Nos <i className="fa fa-plus"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Serviços <i className="fa fa-plus"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Contacto <i className="fa fa-plus"></i></a>
                            </li>
                        </ul>
                        <div className="mt-5" id="offcanvas-contact">
                            <h5 className="title">Contacto</h5>

                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="http://maps.google.com/maps?q=-8.9696347,13.2298243&z=14"
                                        target="_blank"><i className="fa fa-location-dot"></i> Jardim de Rosa, Luanda - Angola </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="mailto:geral@agilesolutions.ao"> <i className="fa fa-envelope"></i>
                                        geral@agilesolutions.ao</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> <i className="fa fa-clock"></i> Segunda a Sexta -
                                        08h:18h</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="tel:+244935378674"> <i className="fa fa-phone"></i> (+244) 935 378
                                        674</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </header>



        </>
    );

}

export default Header;