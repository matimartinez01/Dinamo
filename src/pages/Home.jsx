import logo from "../utils/Logo Academia Dínamo.png"
import Banner from "../utils/20240424_142911.jpg"
import Hamburger from "hamburger-react"
import ReactDOM from 'react-dom'


import {render} from 'react-dom'
import { LogoInstagram, LogoWhatsapp, LogoLinkedin, LogoYoutube, LogoFacebook } from 'react-ionicons'











import { useState } from 'react'
import { useEffect } from 'react'
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
import { NavLink } from 'react-router-dom'





const Home = () => {

    const [menuVisible, setMenuVisible] = useState(false);

    const handleToggle = (toggled) => {
        setMenuVisible(toggled);
    };

    const handleClose = () => {
        setMenuVisible(false);
    };

    

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

        handleClose()
      };

      let showMenu = false;


      if (window.innerWidth < 768) {
        showMenu = true;
      }else{
        showMenu = false;
      }

      let whatsapp = ""

      if (window.innerWidth > 768) {
        whatsapp = "https://web.whatsapp.com/send?phone=543516413560&text="
      }else{
        whatsapp = "https://wa.me/543516413560"
      }

      const [legendNombre, setLegendNombre] = useState('');
      const [legendApellido, setLegendApellido] = useState('');
      const [legendEmail, setLegendEmail] = useState('');
      const [legendCurso, setLegendCurso] = useState('');

      const [formulario, setFormulario] = useState({
        nombre: '',
        apellido: '',
        email: '',
        curso: '',
        consulta: '',
      });

      const handleChange = (event) => {
        setFormulario({
          ...formulario,
          [event.target.name]: event.target.value
        });
      };
      
      

      const sendEmail = (e) => {
        e.preventDefault();

        if(formulario.nombre == ""){
          setLegendNombre("Debes ingresar tu nombre");
        }else{
          setLegendNombre("");
        }

        if(formulario.apellido == ""){
          setLegendApellido("Debes ingresar tu apellido");
        }else{
          setLegendApellido("");
        }

        if(formulario.email == "" || formulario.email.includes("@") == false){
          setLegendEmail("Debes ingresar tu correo");
        }else{
          setLegendEmail("");
        }

        if(formulario.curso == ""){
          setLegendCurso("Debes elegir un curso");
        }else{
          setLegendCurso("");
        }

        if(formulario.nombre != "" && formulario.apellido != "" && formulario.email != "" && formulario.curso != ""){
            emailjs.send('service_2v21rsv', 'template_psum0mf', formulario, '99jfHBAiPkqmxoKd9')
          .then((response) => {
            console.log('Correo enviado exitosamente!', response.status, response.text);
            Swal.fire({
                icon: "success",
                title: "Consulta enviada!",
              });
          })
          .then(() => {
            setFormulario({
              nombre: '',
              apellido: '',
              email: '',
              curso: '',
              consulta: '',
            });
          })
          
          .catch((error) => {
            console.error('Error al enviar el correo:', error);
          });
        }

        
      };
    
      const callate = (e) => {
        e.preventDefault();
      }

    
    


    return (

        <main>
            
            <section className="w-full h-screen bg-gray-200">
            <header className="w-full mb-[100px] h-[60px] flex flex-row items-center justify-between bg-gray-200 md:h-[130px] fixed z-50">
            <img src={logo} alt="logo" className="w-[100px] h-2/3 ml-[20px] md:m-[20px] md:w-[250px]"/>
            {!showMenu && (
                <div className="flex flex-row items-center text-sm mr-2 gap-x-[15px] lg:mr-[20px] md:gap-x-[50px] md:text-lg md:mr-4">
                    <a href="#quienes-somos" onClick={(e) => handleScroll(e, 'quienes-somos')} className="font-bold text-blue-800 hover:underline hover:text-orange-500 hover:scale-105">QUIENES SOMOS</a>
                    <a href="#cursos" onClick={(e) => handleScroll(e, 'cursos')} className="font-bold text-blue-800 hover:underline hover:text-orange-500 hover:scale-105">CURSOS</a>
                    <NavLink to="/clientes" className="font-bold text-blue-800 hover:underline hover:text-orange-500 hover:scale-105">CLIENTES</NavLink>
                    
                </div>)
            }

                {showMenu && (
                <div>
                <Hamburger size={20} label="Show menu" color="#2f2c79" onToggle={handleToggle} toggled={menuVisible}/>
                    {menuVisible && (
                        <div className="menu bg-gray-300 text-blue-900 font-bold w-2/5 h-[100vh] fixed top-0 right-0 flex flex-col items-left p-2 gap-y-4">
                            <Hamburger size={20} label="Hide menu" color="#2f2c79" onToggle={handleClose} toggled={menuVisible}/>
                            <a href="#quienes-somos" onClick={(e) => handleScroll(e, 'quienes-somos')} className="font-bold">QUIENES SOMOS</a>
                            <a href="#cursos" onClick={(e) => handleScroll(e, 'cursos')} className="font-bold">CURSOS</a>
                            <NavLink to="/clientes" className="font-bold">CLIENTES</NavLink>
                        </div>
                    )}  
                </div>
                )}

            </header>

            <div className="relative w-full h-[100vh]  gap-y-[10px] flex flex-col p-2 lg:h-[78vh] md:gap-y-[10px]">
                    <img src={Banner} alt="banner" className="w-full object-cover h-[100vh] rounded-xl mt-[60px] opacity-30 md:mt-[150px] md:h-[80vh] mb-[40px]"/>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center w-11/12 mx-auto lg:w-1/2 lg:mx-[50px] lg:mt-[300px]">
                        <h1 className=" items-center text-4xl font-extrabold text-center text-blue-900 w-full md:text-7xl md:mb-[10px]">TRANSFORMAMOS PERSONAS</h1>
                        <p className="text-center text-2xl italic text-blue-900 font-semibold w-full mb-[10px] md:mb-[30px] md:text-4xl">Capacitamos a quienes trabajan en las PyMEs para que desarrollen sus competencias y puedan crecer</p>
                    </div>
                </div>
            </section>
        
            <body className="w-full" id="quienes-somos">
                <div className="p-2 bg-white min-h-[100vh] flex flex-col">
                    <div className="text-center flex flex-col gap-y-[30px] mt-[60px]" >
                        <h1 className="text-4xl font-bold text-center text-blue-800 md:text-5xl">QUIENES SOMOS</h1>
                        <h2 className="text-center text-2xl italic text-orange-600 md:text-4xl md:w-2/3 md:mx-auto">Somos una academia especialista en capacitar y entrenar a dueños, mandos medios y
                            personas que ocupan puestos operativos en PyMEs.</h2>
                        <div className="flex flex-col gap-y-[10px] md:flex-row md:flex-wrap md:justify-center gap-x-[20px] md:gap-y-[30px] lg:mt-[50px]">
                        <p className="border border-2 border-blue-800 p-2 rounded-xl w-full text-center text-lg md:w-1/3 md:text-xl p-2 lg:w-1/4">Sabemos que las pequeñas y medianas empresas tienen una realidad diferente a las grandes empresas y por eso
                        adaptamos los contenidos para que sean simples y fáciles de aplicar en el día a día. </p>
                        <p className="border border-2 border-blue-800 p-2 rounded-xl w-full text-center text-lg md:w-1/3 md:text-xl p-2 lg:w-1/4">Nos enfocamos en el aprendizaje a través de la práctica por lo que nuestros programas y cursos tienen contenido teórico
                        siempre acompañado de dinámicas y ejercicios que facilitan la incorporación de herramientas y técnicas para utilizar en
                        el trabajo.</p>
                        <p className="border border-2 border-blue-800 p-2 rounded-xl w-full text-center text-lg md:w-1/3 md:text-xl p-2 lg:w-1/4">Nuestros formadores son profesionales expertos con experiencia como empleados y como consultores, y eso les da una
                        perspectiva única de como transmitir el contenido para que sea aplicable.</p>
                        </div>

                        <div className="flex flex-row items-center justify-center gap-x-[40px] md:gap-x-[50px] mb-[20px] md:w-3/4 md:mx-auto lg:mt-[30px]">
                            <div>
                                <p className="font-bold text-orange-600 text-3xl text-center md:text-4xl">+13</p>
                                <p className="font-semibold text-blue-800 text-center md:text-2xl">Años de experiencia</p>
                            </div>
                            <div>
                                <p className="font-bold text-orange-600 text-3xl text-center md:text-4xl">+80</p>
                                <p className="font-semibold text-blue-800 text-center md:text-2xl">Empresas que confían</p>
                            </div>
                            <div>
                                <p className="font-bold text-orange-600 text-3xl text-center md:text-4xl">+3.500</p>
                                <p className="font-semibold text-blue-800 text-center md:text-2xl">Personas capacitadas</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full min-h-[90vh] bg-gray-200" id="cursos">
                    <div className="text-center flex flex-col gap-y-[15px]">
                        <h1 className="text-4xl font-bold text-center text-blue-800 md:text-5xl mt-[30px]">CURSOS</h1>
                        <h2 className="text-center text-2xl italic text-orange-600 md:text-4xl md:w-2/3 md:mx-auto ">Programas y Cursos a medida</h2>
                        <div className="flex flex-col gap-y-[10px] md:flex-row md:flex-wrap md:justify-center gap-x-[20px] md:gap-y-[10px] lg:w-4/5 lg:mx-auto">
                            <p className="w-11/12 text-center mx-auto text-lg md:text-2xl md:w-5/6 md:mx-auto">Desarrollamos programas y cursos a medida, tanto de habilidades blandas o duras.</p>
                            <p className="w-11/12 text-center mx-auto text-lg md:text-2xl md:w-5/6 md:mx-auto mb-[30px]">Identificamos las necesidades de la PyMEs, conversamos con quien solicita la capacitación y nos
                            enfocamos en las competencias identificadas para desarrollar.</p>
                        </div>
                        <div className="flex flex-col gap-y-[10px] mb-[30px] md:flex-row md:flex-wrap md:justify-center lg:gap-x-[10px] lg:gap-y-[15px] lg:w-4/5 lg:mx-auto">
                            <a href="#jefe-gerente" onClick={(e) => handleScroll(e, 'jefe-gerente')} className="flex flex-col bg-blue-900 w-11/12 mx-auto p-2 rounded-xl md:w-2/3 lg:w-2/5 hover:scale-105 hover:cursor-pointer hover:bg-blue-600">
                                <h2 className="text-xl font-bold text-center text-white">Programa de Formación Gerencial</h2>
                                <p className="text-center text-white text-lg italic md:text-xl md:font-semibold">"De Jefe a Gerente"</p>
                            </a>

                            <a href="#despachante" onClick={(e) => handleScroll(e, 'despachante')} className="flex flex-col bg-blue-900 w-11/12 mx-auto p-2 rounded-xl md:w-2/3 lg:w-2/5 hover:scale-105 hover:cursor-pointer hover:bg-blue-600">
                                <h2 className="text-xl font-bold text-center text-white">Taller de Entrenamiento en Ventas</h2>
                                <p className="text-center text-white text-lg italic md:text-xl md:font-semibold">“De Despachante y Vendedor”</p>
                            </a>

                            <a href="#estrategia" onClick={(e) => handleScroll(e, 'estrategia')} className="flex flex-col bg-blue-900 w-11/12 mx-auto p-2 rounded-xl md:w-2/3 lg:w-2/5 hover:scale-105 hover:cursor-pointer hover:bg-blue-600">
                                <h2 className="text-xl font-bold text-center text-white">Taller para Dueños de PyMEs</h2>
                                <p className="text-center text-white text-lg italic md:text-xl md:font-semibold">“Diseñando la Estrategia de mi Empresa”</p>
                            </a>

                            <a href="#modelado" onClick={(e) => handleScroll(e, 'modelado')} className="flex flex-col bg-blue-900 w-11/12 mx-auto p-2 rounded-xl md:w-2/3 lg:w-2/5 hover:scale-105 hover:cursor-pointer hover:bg-blue-600">
                                <h2 className="text-xl font-bold text-center text-white">Taller para Dueños de PyMEs</h2>
                                <p className="text-center text-white text-lg italic md:text-xl md:font-semibold">“Modelando mi Negocio”</p>
                            </a>

                            <a href="#sentido" onClick={(e) => handleScroll(e, 'sentido')} className="flex flex-col bg-blue-900 w-11/12 mx-auto p-2 rounded-xl md:w-2/3 lg:w-2/5 hover:scale-105 hover:cursor-pointer hover:bg-blue-600">
                                <h2 className="text-xl font-bold text-center text-white">Taller para Dueños de PyMEs</h2>
                                <p className="text-center text-white text-lg italic md:text-xl md:font-semibold">“Encontrando el Sentido que me Impulsa”</p>
                            </a>

                            <a href="#conectando" onClick={(e) => handleScroll(e, 'conectando')} className="flex flex-col bg-blue-900 w-11/12 mx-auto p-2 rounded-xl md:w-2/3 lg:w-2/5 hover:scale-105 hover:cursor-pointer hover:bg-blue-600">
                                <h2 className="text-xl font-bold text-center text-white">Outdoor PyME</h2>
                                <p className="text-center text-white text-lg italic md:text-xl md:font-semibold">“Aprender conectando”</p>
                            </a>

                            <a href="#liderazgo" onClick={(e) => handleScroll(e, 'liderazgo')} className="flex flex-col bg-blue-900 w-11/12 mx-auto p-2 rounded-xl md:w-2/3 lg:w-2/5 hover:scale-105 hover:cursor-pointer hover:bg-blue-600">
                                <h2 className="text-xl font-bold text-center text-white">Curso de Liderazgo</h2>
                                <p className="text-center text-white text-lg italic md:text-xl md:font-semibold">“Formando Líderes”</p>
                            </a>

                            <a href="#ventas" onClick={(e) => handleScroll(e, 'ventas')} className="flex flex-col bg-blue-900 w-11/12 mx-auto p-2 rounded-xl md:w-2/3 lg:w-2/5 hover:scale-105 hover:cursor-pointer hover:bg-blue-600">
                                <h2 className="text-xl font-bold text-center text-white">Curso Integral de Ventas</h2>
                                <p className="text-center text-white text-lg italic md:text-xl md:font-semibold">“Vendedor Efectivo”</p>
                            </a>

                            <a className="flex flex-col mt-10 bg-blue-900 text-white font-bold text-center w-2/5 mx-auto p-4 rounded-xl 
                            md:text-xl md:w-2/5 lg:w-1/5 hover:scale-105 hover:cursor-pointer hover:bg-blue-600" 
                            href="#contactanos" onClick={(e) => handleScroll(e, 'contactanos')}>CONTACTANOS</a>

                        </div>
                    </div>

                </div>

                

                <div className="w-full min-h-[90vh]">
                    <div className="w-full mt-[50px] flex flex-col justify-center items-center gap-y-[30px] md:flex-row md:flex-wrap md:gap-x-[50px] mb-10">

                        <div id="jefe-gerente" className="w-5/6 bg-blue-100 p-2 flex flex-col rounded-xl border-2 border-blue-900 shadow-lg shadow-blue-300 md:p-[15px] md:w-2/3 lg:w-1/3 lg:min-h-[854px] lg:gap-y-[10px] xl:min-h-[630px] 3xl:min-h-[520px]">
                            <h2 className="text-2xl font-bold text-center text-blue-900 md:text-4xl">Programa de Formación Gerencial</h2>
                            <p className="text-center text-xl italic text-blue-900 font-semibold mb-[10px] md:text-2xl">"De Jefe a Gerente"</p>
                            <p className="text-justify md:text-lg lg:text-xl font-semibold">Es habitual encontrar personas en las PyMEs que han llegado a convertirse en mandos medios por su gran capacidad técnica, por conocimientos, por compromiso y
                            por su alto nivel de responsabilidad.</p>
                            <p className="text-justify md:text-lg lg:text-xl font-semibold">Pero una vez en el puesto, se encuentran con problemáticas para las que no han sido preparados.</p>
                            <p className="text-justify md:text-lg lg:text-xl font-semibold">Por eso nace "De Jefe a Gerente", el único programa pensado para mandos medios de PyMEs, diseñado por especialistas en PyMEs</p>
                            <a href="https://de-jefe-a-gerente.webnode.page/" target="_blank" className="text-center text-white bg-blue-900 p-2 w-2/5 mx-auto rounded-xl font-bold mt-4 md:text-xl lg:mt-6 lg:text-2xl hover:scale-105 hover:cursor-pointer hover:bg-blue-600">+ INFO</a>
                        </div>

                        <div id="despachante" className="w-5/6 bg-orange-100 p-2 flex flex-col rounded-xl border-2 border-orange-700 shadow-lg shadow-orange-400 md:p-[15px] md:w-2/3 lg:w-1/3 lg:min-h-[854px] lg:gap-y-[10px] xl:min-h-[630px] 3xl:min-h-[520px]">
                            <h2 className="text-2xl font-bold text-center text-orange-700 md:text-4xl">Taller de Entrenamiento en Ventas</h2>
                            <p className="text-center text-xl italic text-orange-700 font-semibold mb-[10px] md:text-2xl ">“De Despachante y Vendedor”</p>
                            <p className="text-justify md:text-lg lg:text-xl font-semibold">En las PyMEs quienes ocupan puestos en ventas suelen ser personas con gran actitud, atentas y serviciales, pero
                            carecen de formación y entrenamiento para vender.</p>
                            <p className="text-justify md:text-lg lg:text-xl font-semibold">El mercado se ha vuelta competitivo y los clientes exigentes y eso requiere manejar técnicas de ventas modernas,
                            conocer sobre neuromarketing, tener escucha activa, saber manejar sistemas de seguimiento a clientes y cerrar ventas.</p>
                            <p className="text-justify md:text-lg lg:text-xl font-semibold">Nuestro programa “De Despachante a Vendedor” entrena para convertir personas en profesionales de la venta.</p>
                            <a href="https://de-despachante-a-vendedor.webnode.page/" target="_blank" className="text-center text-white bg-orange-600 p-2 w-2/5 mx-auto rounded-xl font-bold mt-4 md:text-xl lg:mt-6 lg:text-2xl hover:scale-105 hover:cursor-pointer hover:bg-orange-500">+ INFO</a>
                        </div>

                        <div id="estrategia" className="w-5/6 bg-blue-100 p-2 flex flex-col rounded-xl border-2 border-blue-900 shadow-lg shadow-blue-300 md:p-[15px] md:w-2/3 lg:w-1/3 lg:min-h-[772px] lg:gap-y-[10px] xl:min-h-[630px] 2xl:min-h-[550px] 3xl:min-h-[520px]">
                            <h2 className="text-2xl font-bold text-center text-blue-900 md:text-4xl">Taller para Dueños de PyMEs</h2>
                            <p className="text-center text-xl italic text-blue-900 font-semibold mb-[10px] md:text-2xl ">“Diseñando la Estrategia de la Empresa”</p>
                            <p className="text-justify md:text-lg lg:text-xl font-semibold">Los Dueños de PyMEs necesitan definir claramente lo que la empresa debe hacer, cuál será su ventaja competitiva,
                            definir claramente sus objetivos y metas.</p>
                            <p className="text-justify md:text-lg lg:text-xl font-semibold">Se desarrollará la visión, misión y valores de la organización.</p>
                            <p className="text-justify md:text-lg lg:text-xl font-semibold">Se establecerán objetivos y también se diseñará un tablero de mando para monitorear y evaluar el progreso de la
                            estrategia.</p>
                            <a href="https://tallerpyme.webnode.page/" target="_blank" className="text-center text-white bg-blue-900 p-2 w-2/5 mx-auto rounded-xl font-bold mt-4 md:text-xl lg:mt-6 lg:text-2xl hover:scale-105 hover:cursor-pointer hover:bg-blue-600">+ INFO</a>
                        </div>

                        <div id="modelado" className="w-5/6 bg-orange-100 p-2 flex flex-col rounded-xl border-2 border-orange-700 shadow-lg shadow-orange-400 md:p-[15px] md:w-2/3 lg:w-1/3 lg:min-h-[772px] lg:gap-y-[10px] xl:min-h-[630px] 2xl:min-h-[550px] 3xl:min-h-[520px]">
                            <h2 className="text-2xl font-bold text-center text-orange-700 md:text-4xl">Taller para Dueños de PyMEs</h2>
                            <p className="text-center text-xl italic text-orange-700 font-semibold mb-[10px] md:text-2xl ">“Modelando mi Negocio”</p>
                            <p className="text-justify md:text-lg lg:text-xl font-semibold">Ese modelado brinda una estructura visual sencilla y comprensible para organizar y analizar los componentes
                            clave del negocio.</p>
                            <p className="text-justify md:text-lg lg:text-xl font-semibold">Permite a las personas obtener una visión holística y clara de cómo funciona su empresa, explorando nuevas ideas y oportunidades de negocio,
                            desafiando las suposiciones existentes y buscando formas de mejorar o adaptar el modelo de negocio actual a las condiciones cambiantes del mercado.</p>
                            <a href="https://modelando-mi-negocio.webnode.page/" target="_blank" className="text-center text-white bg-orange-600 p-2 w-2/5 mx-auto rounded-xl font-bold mt-4 md:text-xl lg:mt-6 lg:text-2xl hover:scale-105 hover:cursor-pointer hover:bg-orange-500">+ INFO</a>
                        </div>

                        <div id="sentido" className="w-5/6 bg-blue-100 p-2 flex flex-col rounded-xl border-2 border-blue-900 shadow-lg shadow-blue-300 md:p-[15px] md:w-2/3 lg:w-1/3 lg:min-h-[772px] lg:gap-y-[10px] xl:min-h-[630px] 2xl:min-h-[550px] 3xl:min-h-[520px]">
                            <h2 className="text-2xl font-bold text-center text-blue-900 md:text-4xl">Taller para Dueños de PyMEs</h2>
                            <p className="text-center text-xl italic text-blue-900 font-semibold mb-[10px] md:text-2xl ">“Encontrando el Sentido que me Impulsa”</p>
                            <p className="text-justify md:text-lg lg:text-xl font-semibold">A lo largo de nuestros años de experiencia de trabajar con Dueños de PyMEs, notamos que pierden la pasión, esa
                            llama interna que los llevó a crear una empresa.</p>
                            <p className="text-justify md:text-lg lg:text-xl font-semibold">En este taller, te enseñaremos cómo descubrir tu propósito y utilizarlo para guiar a tu empresa hacia el éxito.</p>
                            <p className="text-justify md:text-lg lg:text-xl font-semibold">Te ayudaremos a conectar con tu pasión, identificar tus valores y crear una visión personal y para tu negocio que te
                            inspire a ti y a tu equipo.</p>
                            <a href="https://encontrando-el-sentido-que-me-impulsa.webnode.page/" target="_blank" className="text-center text-white bg-blue-900 p-2 w-2/5 mx-auto rounded-xl font-bold mt-4 md:text-xl lg:mt-6 lg:text-2xl hover:scale-105 hover:cursor-pointer hover:bg-blue-600">+ INFO</a>
                        </div>

                        <div id="conectando" className="w-5/6 bg-orange-100 p-2 flex flex-col rounded-xl border-2 border-orange-700 shadow-lg shadow-orange-400 md:p-[15px] md:w-2/3 lg:w-1/3 lg:min-h-[772px] lg:gap-y-[10px] xl:min-h-[630px] 2xl:min-h-[550px] 3xl:min-h-[520px]">
                            <h2 className="text-2xl font-bold text-center text-orange-700 md:text-4xl">Outdoor PyME</h2>
                            <p className="text-center text-xl italic text-orange-700 font-semibold mb-[10px] md:text-2xl ">“Aprender conectando”</p>
                            <p className="text-justify md:text-lg lg:text-xl font-semibold">Las experiencias “fuera de oficina” pueden crear un fuerte sentido de pertenencia y comunidad entre los empleados,
                            lo que puede mejorar la moral y la retención del personal.</p>
                            <p className="text-justify md:text-lg lg:text-xl font-semibold">Los juegos y dinámicas vivenciales junto a la exposición a la naturaleza pueden mejorar el estado de ánimo, aumentar
                            los niveles de energía y promover una sensación de bienestar general.</p>
                            <a href="https://aprender-conectando.webnode.page/" target="_blank" className="text-center text-white bg-orange-600 p-2 w-2/5 mx-auto rounded-xl font-bold mt-4 md:text-xl lg:mt-6 lg:text-2xl hover:scale-105 hover:cursor-pointer hover:bg-orange-500">+ INFO</a>
                        </div>

                        <div id="liderazgo" className="w-5/6 bg-blue-100 p-2 flex flex-col rounded-xl border-2 border-blue-900 shadow-lg shadow-blue-300 md:p-[15px] md:w-2/3 lg:w-1/3 lg:min-h-[772px] lg:gap-y-[10px] xl:min-h-[630px] 2xl:min-h-[550px] 3xl:min-h-[520px]">
                            <h2 className="text-2xl font-bold text-center text-blue-900 md:text-4xl">Curso de Liderazgo</h2>
                            <p className="text-center text-xl italic text-blue-900 font-semibold mb-[10px] md:text-2xl ">“Formando Líderes”</p>
                            <p className="text-justify md:text-lg lg:text-xl font-semibold">Desarrollar y conducir en forma eficiente al personal se volvió para las organizaciones un elemento sustancial para
                            lograr que su capital humano sea hoy una ventaja competitiva en el mercado.</p>
                            <p className="text-justify md:text-lg lg:text-xl font-semibold">El valor de esta propuesta se sostiene en el rol clave que en la actualidad tienen los mandos medios dentro de las
                            organizaciones.</p>
                            <p className="text-justify md:text-lg lg:text-xl font-semibold">En el curso se abordarán los conceptos y herramientas necesarias para que los participantes puedan
                            desarrollar al máximo sus competencias.</p>
                            <a href="https://curso-de-liderazgo.webnode.page/" target="_blank" className="text-center text-white bg-blue-900 p-2 w-2/5 mx-auto rounded-xl font-bold mt-4 md:text-xl lg:mt-6 lg:text-2xl hover:scale-105 hover:cursor-pointer hover:bg-blue-600">+ INFO</a>
                        </div>

                        <div id="ventas" className="w-5/6 bg-orange-100 p-2 flex flex-col rounded-xl border-2 border-orange-700 shadow-lg shadow-orange-400 md:p-[15px] md:w-2/3 lg:w-1/3 lg:min-h-[772px] lg:gap-y-[10px] xl:min-h-[630px] 2xl:min-h-[550px] 3xl:min-h-[520px]">
                            <h2 className="text-2xl font-bold text-center text-orange-700 md:text-4xl">Curso Integral de Ventas</h2>
                            <p className="text-center text-xl italic text-orange-700 font-semibold mb-[10px] md:text-2xl ">“Vendedor Efectivo”</p>
                            <p className="text-justify md:text-lg lg:text-xl font-semibold">Este curso de entrenamiento brinda los conocimientos y herramientas para que los vendedores tengan éxito en su
                            gestión de ventas.</p>
                            <p className="text-justify md:text-lg lg:text-xl font-semibold">Mediante una metodología teórico-práctica podrán analizar experiencias personales, incorporando nuevos aprendizajes
                            que les permitirán tener una gran performance.</p>
                            <p className="text-justify md:text-lg lg:text-xl font-semibold">El curso tendrá un énfasis práctico, presentando los contenidos por medio de ejercicios individuales y grupales
                            que ayudarán a afianzar los conocimientos.</p>
                            <a href="https://cefor80.webnode.page/" target="_blank" className="text-center text-white bg-orange-600 p-2 w-2/5 mx-auto rounded-xl font-bold mt-4 md:text-xl lg:mt-6 lg:text-2xl hover:scale-105 hover:cursor-pointer hover:bg-orange-500">+ INFO</a>
                        </div>

                        

                        

                    </div>

                </div>

                <div className="bg-gray-200 pt-10 min-h-[100vh] flex flex-col" id="contactanos">
                    <h2 className="text-4xl font-bold text-center text-blue-800 md:text-5xl">CONTACTANOS</h2>


                    <form className="flex mt-[40px] flex-col gap-y-2 mb-[40px] border-2 border-blue-900 rounded-xl shadow-lg shadow-blue-300 p-4 w-4/5 mx-auto lg:w-1/3" onSubmit={callate}>
                        
                        <div>
                        <label className="md:text-lg lg:text-xl p-2 w-full font-bold text-blue-900 text-center md:w-3/4 lg:w-full mx-auto"> Nombre
                            <input
                                className="w-full bg-gray-200 mx-auto p-2 text-black flex flex-col rounded-xl border-2 border-blue-900"
                                type="text" name="nombre" onChange={handleChange} placeholder="Ingrese su nombre...">
                            </input>
                        </label>
                        <label className="text-red-600 italic font-semibold">{legendNombre}</label>
                        </div>

                        <div>
                        <label className="md:text-lg p-2 lg:text-xl w-full font-bold text-blue-900 text-center md:w-3/4 lg:w-full mx-auto"> Apellido
                            <input
                                className="w-full bg-gray-200 mx-auto p-2 text-black flex flex-col rounded-xl border-2 border-blue-900"
                                type="text" name="apellido" onChange={handleChange} placeholder="Ingrese su apellido...">
                            </input>
                        </label>
                        <label className="text-red-600 italic font-semibold">{legendApellido}</label>
                        </div>

                        <div>
                        <label className="md:text-lg p-2 lg:text-xl w-full font-bold text-blue-900 text-center md:w-3/4 lg:w-full mx-auto"> Email
                            <input
                                className="w-full bg-gray-200 mx-auto p-2 text-black flex flex-col rounded-xl border-2 border-blue-900"
                                type="text" name="email" onChange={handleChange} placeholder="Ingrese su email...">
                            </input>
                        </label>
                        <label className="text-red-600 italic font-semibold">{legendEmail}</label>
                        </div>

                        <div>
                        <label className="md:text-lg p-2 w-full lg:text-xl md:w-3/4 font-bold text-blue-900 text-center lg:w-full mx-auto"> Curso
                            <select className="w-full bg-gray-200 text-black mx-auto p-2 flex flex-col rounded-xl border-2 border-blue-900" name="curso" onChange={handleChange}>
                                <option value="" disabled selected className="text-gray-400">Seleccione un curso...</option>
                                <option value="De Jefe a Gerente">De Jefe a Gerente</option>
                                <option value="De Despachante y Vendedor">De Despachante y Vendedor</option>
                                <option value="Diseñando la Estrategia de la Empresa">Diseñando la Estrategia de la Empresa</option>
                                <option value="Modelando mi Negocio">Modelando mi Negocio</option>
                                <option value="Encontrando el Sentido que me Impulsa">Encontrando el Sentido que me Impulsa</option>
                                <option value="Aprender conectando">Aprender conectando</option>
                                <option value="Formando Líderes">Formando Líderes</option>
                                <option value="Vendedor Efectivo">Vendedor Efectivo</option>
                            </select>
                        </label>
                        <label className="text-red-600 italic font-semibold">{legendCurso}</label>
                        </div>

                        <div>
                        <label className="md:text-lg p-2 w-full lg:text-xl font-bold text-blue-900 text-center md:w-3/4 lg:w-full mx-auto"> Consulta
                            <textarea
                                className="overflow-y-auto bg-gray-200 text-black text-start w-full h-[100px] mx-auto p-2 flex flex-col rounded-xl border-2 border-blue-900"
                                type="text" name="consulta" onChange={handleChange}>
                            </textarea>
                        </label>
                        </div>

                        <button
                            className="w-1/2 mx-auto md:w-1/3 lg:w-1/4 text-center p-1 rounded-xl border-2 bg-blue-900 text-white font-bold text-lg hover:bg-blue-700 hover:scale-105" 
                             onClick={sendEmail}>ENVIAR</button>
                    </form>
                </div>

                


                <footer className='w-full bg-gray-700 py-4 flex flex-col items-center px-2 text-white'>
                <article className='flex flex-col items-center w-full md:flex-row'>
                <div className=' flex flex-col gap-2 border-b-2 border-white py-6 px-2 text-center w-[75%] md:border-0 md:w-[33%]'>
                    <div className='flex flex-col text-center gap-4'>
                        <p className="font-semibold">Dínamo - "Transformadora de empresas"</p>
                        <p className='font-semibold'>Saturnino Navarro 4274, Córdoba, Argentina</p>
                    </div>
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
                        <a href={whatsapp} target="_blank" className="hover:scale-110">
                        <LogoWhatsapp color={'#FFFFFF'} title={""} height="50px" width="50px"/></a>
                    </div>  
                </div>

                <div className='flex flex-col items-center text-center py-4 px-2 gap-4 md:w-[33%]'>
                    <p>© 2024 Dinamo | Todos los derechos reservados</p>
                </div>
                </article>
        </footer>

                


            </body>

        </main>
    )
}

export default Home