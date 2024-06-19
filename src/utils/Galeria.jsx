import cliente1 from "../utils/Clientes/Alimentaria San Francisco - San Alfonso.png"
import cliente2 from "../utils/Clientes/Arco Iris.jpg"
import cliente3 from "../utils/Clientes/Autoentrada.png"
import cliente4 from "../utils/Clientes/Be There.png"
import cliente5 from "../utils/Clientes/campanario.png"
import cliente6 from "../utils/Clientes/Casa ASDI.png"
import cliente7 from "../utils/Clientes/Casona de la Nonna.png"
import cliente8 from "../utils/Clientes/Ceracor.png"
import cliente9 from "../utils/Clientes/Cerramientos y Estructuras.png"
import cliente10 from "../utils/Clientes/Clementine.webp"
import cliente11 from "../utils/Clientes/Clinica Privada Velez Sarsfield.png"
import cliente12 from "../utils/Clientes/Clotta.jpg"

import cliente14 from "../utils/Clientes/cptv_ok.jpg"
import cliente15 from "../utils/Clientes/De-Hierro3.png"
import cliente16 from "../utils/Clientes/Degano.jpg"
import cliente17 from "../utils/Clientes/drogueria-mg.png"
import cliente18 from "../utils/Clientes/Económicos Desagotes.jpeg"
import cliente19 from "../utils/Clientes/Ecovías.png"
import cliente20 from "../utils/Clientes/El Instalador.png"
import cliente21 from "../utils/Clientes/El Mesón.png"
import cliente22 from "../utils/Clientes/El Rusti.png"
import cliente23 from "../utils/Clientes/Esmeralda.jpg"
import cliente24 from "../utils/Clientes/Espacity.png"
import cliente25 from "../utils/Clientes/Exotrade.png"
import cliente26 from "../utils/Clientes/Expensas Online.png"
import cliente27 from "../utils/Clientes/Farmacias RED.png"
import cliente28 from "../utils/Clientes/Feyro.jpg"
import cliente29 from "../utils/Clientes/GNI Propietarian.png"
import cliente30 from "../utils/Clientes/Godere.jpg"
import cliente31 from "../utils/Clientes/Gozzo.svg"
import cliente32 from "../utils/Clientes/Grupo Baco.jpg"
import cliente33 from "../utils/Clientes/Grupo Broka.jpeg"
import cliente34 from "../utils/Clientes/Grupo MEF.png"
import cliente35 from "../utils/Clientes/Grupo Mónaco.png"
import cliente36 from "../utils/Clientes/geotecnia.jpg"
import cliente37 from "../utils/Clientes/Hatch.png"
import cliente38 from "../utils/Clientes/Hotel-Monaco-100x102.png"
import cliente39 from "../utils/Clientes/IBC.png"
import cliente40 from "../utils/Clientes/La Nonna Pasta.jpg"
import cliente41 from "../utils/Clientes/Lanfranconi Giordano.png"
import cliente42 from "../utils/Clientes/Las Condez - aguas de mesa (Aguas Punta Cana).jpg"
import cliente43 from "../utils/Clientes/Model construcciones.jpeg"
import cliente44 from "../utils/Clientes/Monimar.png"
import cliente45 from "../utils/Clientes/Mundos E.jpg"
import cliente46 from "../utils/Clientes/Narcisa Zapatos.png"
import cliente47 from "../utils/Clientes/Nobis Medical.svg"
import cliente48 from "../utils/Clientes/Olympia Salud.png"
import cliente49 from "../utils/Clientes/Ormay.svg"
import cliente50 from "../utils/Clientes/Orthodontika.jpg"
import cliente51 from "../utils/Clientes/Osunlar.png"
import cliente52 from "../utils/Clientes/Oxala Travel.jpg"
import cliente53 from "../utils/Clientes/Panificadora Elca.jpg"
import cliente54 from "../utils/Clientes/Parrilla La Emilia.jpeg"

import cliente56 from "../utils/Clientes/patria-muebles-logotipo-1.png"
import cliente57 from "../utils/Clientes/Servicios Integrales.jpeg"
import cliente58 from "../utils/Clientes/Sex Cordoba Shop.png"



import cliente62 from "../utils/Clientes/TCTech.png"
import cliente63 from "../utils/Clientes/Tecnicord.png"
import cliente64 from "../utils/Clientes/TIANO - Identidad_FONDO BLANCO.jpg"
import cliente65 from "../utils/Clientes/Tinta amarilla.png"
import cliente66 from "../utils/Clientes/uniformes 21 de septiembre.png"
import cliente67 from "../utils/Clientes/Vectus.png"
import cliente68 from "../utils/Clientes/Zou Packaging.jpg"
import cliente69 from "../utils/Clientes/Zárate Materiales.png"

import logo from "../utils/Clientes/DINAMO-academia (1) (1).png"
import { NavLink, useNavigate } from 'react-router-dom'

import ReactDOM from 'react-dom'


import {render} from 'react-dom'
import { LogoInstagram, LogoWhatsapp, LogoLinkedin, LogoYoutube, LogoFacebook } from 'react-ionicons'


const Galeria = () => {

    const handleScroll = (event, id) => {
        event.preventDefault();
        const offsetDesktop = 130; // Ajusta esto según la altura de tu encabezado en escritorio
        const offsetMobile = 60; // Ajusta esto según la altura de tu encabezado en móvil
        const offset = window.innerWidth < 768 ? offsetMobile : offsetDesktop;
        const element = document.getElementById(id);
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
    
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

      };

      const navigate = useNavigate();

      function handleScrollToTop() {
        window.scrollTo(0, 0);
        navigate('/');
      }


    const imagenes = [cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7, cliente8, cliente9, cliente10, cliente11, cliente12, cliente14,
        cliente15, cliente16, cliente17, cliente18, cliente19, cliente20, cliente21, cliente22, cliente23, cliente24, cliente25, cliente26, cliente27, cliente28, cliente29,
        cliente30, cliente31, cliente32, cliente33, cliente34, cliente35, cliente36, cliente37, cliente38, cliente39, cliente40, cliente41, cliente42, cliente43, cliente44,
        cliente45, cliente46, cliente47, cliente48, cliente49, cliente50, cliente51, cliente52, cliente53, cliente54, cliente56, cliente57, cliente58,
        cliente62, cliente63, cliente64, cliente65, cliente66, cliente67, cliente68, cliente69]

    return (
        <div>
        <header className="w-full mb-[100px] h-[60px] flex flex-row items-center justify-between bg-gray-200 md:h-[130px] fixed z-50">
        <a href="#principio" onClick={(e) => handleScroll(e, 'principio')}><img src={logo} alt="logo" className="w-[100px] h-2/3 ml-[20px] md:m-[20px] md:w-[250px]"/></a>
        <div className="flex flex-row items-center text-sm mr-2 gap-x-[15px] lg:mr-[20px] md:gap-x-[50px] md:text-lg md:mr-4">
                <a onClick={handleScrollToTop} className="font-bold text-blue-800 hover:cursor-pointer hover:underline hover:text-orange-500 hover:scale-105">INICIO</a>
                <a href="#" className="font-bold text-orange-500 underline">CLIENTES</a>
            </div>
        </header>

        
        <div className="relative w-full min-h-[100vh] bg-gray-200 mx-auto pt-[70px] md:pt-[140px] mb-10px" id="principio">
        <div className="w-11/12 flex flex-col mx-auto bg-white pt-10 rounded-xl border-2 border-blue-900">
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-2 md:mb-20 md:text-5xl">NUESTROS CLIENTES</h2>
                    <div className="flex flex-row flex-wrap gap-y-10 gap-x-2">
                        {imagenes.map(i => {
                        return <img src={i} className="w-[150px] h-[150px] object-contain mx-auto md:w-1/4 lg:w-1/6"/>
                        })}
                    </div>
                    
        </div>
        </div>

        <footer className='w-full bg-gray-700 py-4 flex flex-col items-center px-2 text-white mt-[20px]'>
                <article className='flex flex-col items-center w-full md:flex-row'>
                <div className=' flex flex-col gap-2 border-b-2 border-white py-6 px-2 text-center w-[75%] md:border-0 md:w-[33%]'>
                    <div className='flex flex-col text-center gap-4'>
                        <p className="font-semibold">Dínamo - "Transformadora de empresas"</p>
                        <p className='font-semibold'>Saturnino Navarro 4274, Córdoba, Argentina</p>
                    </div>
                    <p className='font-semibold'>Teléfono: <span className='font-normal'> (+54) 351-6413560</span></p>
                    <p className='font-semibold'>Email: <span className='font-normal'> academia@dinamo.net.ar</span></p>
                    <p className='font-semibold'>Visita nuestra web: <span className='font-normal hover:underline hover:text-blue-500'>
                        <a href="https://dinamo.net.ar/" target="_blank">https://dinamo.net.ar/</a></span></p>
                </div>

                <div className='flex flex-col gap-4 items-center border-white border-b-2 py-4 px-2 text-center w-[75%] md:border-0 md:w-[33%]'>
                    <img src="https://dinamo.net.ar/wp-content/uploads/2024/01/favicon_dinamo-8.png#111" alt="" className='bg-white rounded-full p-0.5 w-[60px] h-[60px]' />
                    <h2 className='text-xl font-semibold text-center w-[100%]'>Síguenos</h2>
                    <div className='flex gap-4 md:flex-wrap md:justify-center'>
                        <a href="https://www.instagram.com/dinamo.consultora/" target="_blank" className="hover:scale-110">
                        <LogoInstagram color={'#FFFFFF'} title={""} height="50px" width="50px"/></a>
                        <a href="https://www.facebook.com/p/Dinamo-Consultora-100063511054838/" target="_blank" className="hover:scale-110">
                        <LogoFacebook color={'#FFFFFF'} title={""} height="50px" width="50px"/></a>
                        <a href="https://www.youtube.com/@dinamo1620/featured" target="_blank" className="hover:scale-110">
                        <LogoYoutube color={'#FFFFFF'} title={""} height="50px" width="50px"/></a>
                        <a href="https://www.linkedin.com/company/dinamoempresas/?originalSubdomain=ar" target="_blank" className="hover:scale-110 hover:shadow-2xl">
                        <LogoLinkedin color={'#FFFFFF'} title={""} height="50px" width="50px"/></a>
                        <a href="https://web.whatsapp.com/send?phone=543516413560&text=" target="_blank" className="hover:scale-110">
                        <LogoWhatsapp color={'#FFFFFF'} title={""} height="50px" width="50px"/></a>
                    </div>  
                </div>

                <div className='flex flex-col items-center text-center py-4 px-2 gap-4 md:w-[33%]'>
                    <p>© 2024 Dinamo | Todos los derechos reservados</p>
                </div>
                </article>
        </footer>


        </div>

    )

}

export default Galeria
