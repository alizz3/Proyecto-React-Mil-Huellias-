import { Link } from 'react-router-dom'
import { indexBanner, BannerMobileUno, BannerMobileDos, BannerMobileTres, BtnPcTrasparente, BtnTrasparente, fotoUno, fotoDos, fotoTres, fotoCuatro, fotoCinco, mapa } from '../assets/img/ImportImg'
import './Mainhome.css'

function MainHome() {
    return (
        <main className="index-heder">
            <div className="index-banner">
                <img src={indexBanner} alt="" />
            </div>

            <div className="index-banner-mobile">
                <ul>
                    <li><img src={BannerMobileUno} className="banner-r" alt='banner' /></li>
                    <li><img src={BannerMobileDos} className="banner-az" alt='banner' /></li>
                    <li><img src={BannerMobileTres} className="banner-am" alt='banner' /></li>
                </ul>
            </div>

            <h1>¿como nos puedes ayudar?</h1>

            <div className="index_buttons-pc">
                <Link to="/donacion"><button id="index-btn-pc-D-material">
                    <img src={BtnPcTrasparente} alt="" />
                    <h3>Donación <br /> Material</h3>
                </button></Link>
                <Link to="/donacion"><button id="index-btn-pc-D-economica">
                    <img src={BtnPcTrasparente} alt="" />
                    <h3>Donación <br /> economica</h3>
                </button></Link>
                <Link to="/donacion"><button id="index-btn-pc-Apadrinamiento">
                    <img src={BtnPcTrasparente} alt="" />
                    <h3>Apadrinamiento</h3>
                </button></Link>
                <Link to="/aliados"><button id="index-btn-pc-emprendimiento">
                    <img src={BtnPcTrasparente} alt="" />
                    <h3>Apoya un<br /> emprendimiento</h3>
                </button></Link>

            </div>

            <div className="index_buttons">
                <Link to="/donacion"><button id="index-btn-D-material">
                    <img src={BtnTrasparente} alt="" />
                    <h3>Donación <br /> Material</h3>
                </button></Link>
                <Link to="/donacion"><button id="index-btn-D-economica">
                    <img src={BtnTrasparente} alt="" />
                    <h3>Donación <br /> economica</h3>
                </button></Link>
                <Link to="/donacion"><button id="index-btn-Apadrinamiento">
                    <img src={BtnTrasparente} alt="" />
                    <h3>Apadrinamiento</h3>
                </button></Link>
                <Link to="/aliados"><button id="index-btn-emprendimiento">
                    <img src={BtnTrasparente} alt="" />
                    <h3>Apoya un<br /> emprendimiento</h3>
                </button></Link>
            </div>




            <h1>Nuestro equipo</h1>

            <div className="carrusel">
                <ul className="carrusel-fotos">
                    <li id="foto1"><img src={fotoUno} alt="" /></li>
                    <li id="foto2"><img src={fotoDos} alt="" /></li>
                    <li id="foto3"><img src={fotoTres} alt="" /></li>
                    <li id="foto4"><img src={fotoCuatro} alt="" /></li>
                    <li id="foto5"><img src={fotoCinco} alt="" /></li>
                </ul>
                <ul className="carrusel-menu">
                    <li><a href="#foto1"><img src={fotoUno} alt="" /></a></li>
                    <li><a href="#foto2"><img src={fotoDos} alt="" /></a></li>
                    <li><a href="#foto3"><img src={fotoTres} alt="" /></a></li>
                    <li><a href="#foto4"><img src={fotoCuatro} alt="" /></a></li>
                    <li><a href="#foto5"><img src={fotoCinco} alt="" /></a></li>
                </ul>
            </div>


            <h1>Encuentranos Aquí</h1>
            <div className="index_container-maps">

                <div className="_container-maps">
                    <div className="-map">
                        <img className="index-map"
                            src={mapa}
                            // style="border:0;"
                            allowFullScreen="" loading="lazy" width="100%"
                            referrerPolicy="no-referrer-when-downgrade"></img>
                    </div>
                    <div className="index_text">
                        <h2>Sede Rosales</h2>
                        <h4><i className="fa-solid fa-shield-dog"></i> carrera 12 #34-56, Rosales</h4>
                        <h4><i className="fa-solid fa-paw"></i> 57 312 4567890</h4>
                        <a href="https://www.google.com/maps/place/HUELLITAS+CALLEJERAS/@4.548945,-74.163406,15z/data=!4m5!3m4!1s0x0:0x7a7ed86ccbb2b380!8m2!3d4.5489452!4d-74.1634065?hl=es-419"
                            target="_blank" rel='noopener noreferrer'>Abrir</a>
                    </div>
                </div>

                <div className="_container-maps">
                    <div className="-map">
                        <img className="index-map" src={mapa}></img>
                        <iframe href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5508394223048!2d-74.10994518255615!3d4.673860300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b804a9222a5%3A0x37035180c0f83c83!2sFundaci%C3%B3n%20coraz%C3%B3n%20peludito!5e0!3m2!1ses-419!2sco!4v1648805119780!5m2!1ses-419!2sco" allowFullScreen="" loading="lazy" width="100%"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="index_text">
                        <h2>Sede Chapinero</h2>
                        <h4><i className="fa-solid fa-shield-cat"></i> carrera 12 #34-56, Rosales</h4>
                        <h4><i className="fa-solid fa-paw"></i> 57 312 4567890</h4>
                        <a href="https://www.google.com/maps/place/HUELLITAS+CALLEJERAS/@4.548945,-74.163406,15z/data=!4m5!3m4!1s0x0:0x7a7ed86ccbb2b380!8m2!3d4.5489452!4d-74.1634065?hl=es-419"
                            target="_blank" rel='noopener noreferrer'>Abrir</a>
                    </div>
                </div>

            </div>


        </main>

    )
}

export default MainHome

export {
    indexBanner, BannerMobileUno
}