import "./Landing.css"

function Landing() {

    return (
        <div className="mt-2 sm:mt-40">
            <header>
            </header>
            <main>
                <section className="flex justify-center">
                    <div className="flex justify-between flex-col gap-5 w-72">
                        <div className="flex flex-col max-w-md">
                            <h1 className="font-bold mb-5 text-xl text-start max-w-md text-gray-700 h1">Full Stack Web Developer 👋🏼</h1>
                            <div className="flex flex-col gap-6">
                                <img className="rounded-2xl shadow-xl w-full h-full" src="https://res.cloudinary.com/dp6v6zvsy/image/upload/v1724566162/profile_fbn4pf.png" alt="Bruno's profile picture" />
                                <div>
                                    <p className="text-gray-600 mb-4 max-w-md text-justify">Hi, I'm <b>Bruno Champion</b>, a passionate Full Stack Web Developer eager to collaborate with others and keep learning.</p>
                                    <p className="text-gray-600 text-start">Based in <b>Lima, Perú</b> 📍</p>
                                </div>
                            </div>
                            <div className="hidden justify-start items-center mt-5 gap-4">
                                <div className="tech-icon">
                                    <img className="w-12" src="https://res.cloudinary.com/dp6v6zvsy/image/upload/v1724564924/nestjs_iuweod.png" alt="NestJS logo" />
                                    <span className="tooltip">NestJS</span>
                                </div>
                                <div className="tech-icon">
                                    <img className="w-10 h-10" src="https://res.cloudinary.com/dp6v6zvsy/image/upload/v1724564927/expressjs_a95whi.png" alt="Express.js logo" />
                                    <span className="tooltip">Express.js</span>
                                </div>
                                <div className="tech-icon">
                                    <img className="w-26 h-12" src="https://res.cloudinary.com/dp6v6zvsy/image/upload/v1724564922/typeorm_kltax5.png" alt="TypeORM logo" />
                                    <span className="tooltip">TypeORM</span>
                                </div>
                                <div className="tech-icon">
                                    <img className="w-12 h-12" src="https://res.cloudinary.com/dp6v6zvsy/image/upload/v1724564922/output-onlinetools_ltd1j4.png" alt="PostgreSQL logo" />
                                    <span className="tooltip">PostgreSQL</span>
                                </div>
                                <div className="tech-icon">
                                    <img className="w-16 h-12" src="https://res.cloudinary.com/dp6v6zvsy/image/upload/v1724564924/mongoose_quajbe.png" alt="Mongoose logo" />
                                    <span className="tooltip">Mongoose</span>
                                </div>
                                <div className="tech-icon">
                                    <img className="w-8 h-12" src="https://res.cloudinary.com/dp6v6zvsy/image/upload/v1724564925/mongodb_y9bbqa.png" alt="MongoDB logo" />
                                    <span className="tooltip">MongoDB</span>
                                </div>
                            </div>
                            <div className="hidden mt-3 items-center gap-4">
                                <div className="tech-icon">
                                    <img className="w-14 h-12" src="https://res.cloudinary.com/dp6v6zvsy/image/upload/v1724564922/react_i1qy9i.png" alt="React.js logo" />
                                    <span className="tooltip">React.js</span>
                                </div>
                                <div className="tech-icon">
                                    <img className="w-12 h-14" src="https://res.cloudinary.com/dp6v6zvsy/image/upload/v1724564922/reduxjs_tctnrd.png" alt="Redux.js logo" />
                                    <span className="tooltip">Redux.js</span>
                                </div>
                                <div className="tech-icon">
                                    <img className="w-14 h-12" src="https://res.cloudinary.com/dp6v6zvsy/image/upload/v1724564923/nodejs_l1qtjz.png" alt="Node.js logo" />
                                    <span className="tooltip">Node.js</span>
                                </div>
                                <div className="tech-icon">
                                    <img className="w-10 h-10" src="https://res.cloudinary.com/dp6v6zvsy/image/upload/v1724564921/typescript_rldzvi.png" alt="TypeScript logo" />
                                    <span className="tooltip">TypeScript</span>
                                </div>
                                <div className="tech-icon">
                                    <img className="w-10 h-10" src="https://res.cloudinary.com/dp6v6zvsy/image/upload/v1724564926/javascript_oo8t4q.png" alt="JavaScript logo" />
                                    <span className="tooltip">JavaScript</span>
                                </div>
                                <div className="tech-icon">
                                    <img className="w-9 h-10" src="https://res.cloudinary.com/dp6v6zvsy/image/upload/v1724564928/css_ij8lw7.png" alt="CSS logo" />
                                    <span className="tooltip">CSS</span>
                                </div>
                                <div className="tech-icon">
                                    <img className="w-9 h-10" src="https://res.cloudinary.com/dp6v6zvsy/image/upload/v1724564926/html_gm09cx.png" alt="HTML logo" />
                                    <span className="tooltip">HTML</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-16 flex items-center flex-col">
                    <h2 className="h2 text-2xl text-gray-800 font-bold mb-10">Projects</h2>
                    <div className="flex gap-12">
                        <article className="rounded-2xl flex flex-col items-center max-w-72 pt-4 pb-4 pr-8 pl-8 bg-white shadow-lg">
                            <h3 className="project-h3 text-gray-800 font-bold mt-3 mb-3">RutaViajera</h3>
                            <p className="text-gray-700 text-justify mb-3">Pagina web capaz de gestionar la creación de nuevas reservas de cuartos de hoteles según las fechas solicitadas por los clientes y la disponibilidad de los cuartos. Contiene, además, una integración con Google Maps y Gemini para buscar lugares turísticos.</p>
                            <div className="mb-2 gap-4 flex mt-auto justify-center items-center">
                                <button className="hover:bg-red-600 transition-all focus:outline-none focus:border-none rounded-full cursor-pointer bg-red-500 text-white pt-1 pb-1 pr-3 pl-3 w-max">Imágenes</button>
                                <button className="hover:bg-red-600 transition-all focus:outline-none focus:border-none rounded-full cursor-pointer bg-red-500 text-white pt-1 pb-1 pr-3 pl-3 w-max">Visitar</button>
                                <a className="focus:outline-none focus:border-none" href="">
                                    <img className="w-7" src="https://res.cloudinary.com/dp6v6zvsy/image/upload/v1724624163/github2_l0i2f6.png" alt="GitHub logo" />
                                </a>
                            </div>
                        </article>
                        <article className="rounded-2xl flex flex-col items-center max-w-72 pt-4 pb-4 pr-8 pl-8 bg-white shadow-lg">
                            <h3 className="project-h3 text-gray-800 font-bold mt-3 mb-3">Ecommerce</h3>
                            <p className="text-gray-700 text-justify mb-3">página web ecommerce capaz de crear y almacenar pedidos de productoselectrónicos, manejando al mismo tiempo el stock, el precio total de los pedidos y el permiso de acciones deacuerdo a los roles del usuario.</p>
                            <div className="mb-2 gap-4 flex mt-auto justify-center items-center">
                                <button className="hover:bg-red-600 transition-all focus:outline-none focus:border-none rounded-full cursor-pointer bg-red-500 text-white pt-1 pb-1 pr-3 pl-3 w-max">Imágenes</button>
                                <button className="hover:bg-red-600 transition-all focus:outline-none focus:border-none rounded-full cursor-pointer bg-red-500 text-white pt-1 pb-1 pr-3 pl-3 w-max">Visitar</button>
                                <a className="focus:outline-none focus:border-none" href="">
                                    <img className="w-7" src="https://res.cloudinary.com/dp6v6zvsy/image/upload/v1724624163/github2_l0i2f6.png" alt="GitHub logo" />
                                </a>
                            </div>
                        </article>
                        <article className="rounded-2xl flex flex-col items-center max-w-72 pt-4 pb-4 pr-8 pl-8 bg-white shadow-lg">
                            <h3 className="project-h3 text-gray-800 font-bold mt-3 mb-3">Companion</h3>
                            <p className="text-gray-700 text-justify mb-3">Pagina web capaz de gestionar la creación de nuevas reservas de cuartos de hoteles según las fechas solicitadas por los clientes y la disponibilidad de los cuartos.</p>
                            <div className="mb-2 gap-4 flex mt-auto justify-center items-center">
                                <button className="hover:bg-red-600 transition-all focus:outline-none focus:border-none rounded-full cursor-pointer bg-red-500 text-white pt-1 pb-1 pr-3 pl-3 w-max">Imágenes</button>
                                <button className="hover:bg-red-600 transition-all focus:outline-none focus:border-none rounded-full cursor-pointer bg-red-500 text-white pt-1 pb-1 pr-3 pl-3 w-max">Visitar</button>
                                <a className="focus:outline-none focus:border-none" href="">
                                    <img className="w-7" src="https://res.cloudinary.com/dp6v6zvsy/image/upload/v1724624163/github2_l0i2f6.png" alt="GitHub logo" />
                                </a>
                            </div>
                        </article>
                    </div>
                    <div>
                    </div>
                </section>
                <section className="mt-16 flex items-center flex-col mb-60">
                    <h2 className="h2 text-2xl text-gray-800 font-bold mb-10">Experience</h2>
                    <div className="flex flex-col">
                        <div className="bg-white shadow-md rounded-lg ">
                            <img className="" src="https://res.cloudinary.com/dp6v6zvsy/image/upload/v1724706152/TA_Certificate_Imagen_ral6sm.jpg" alt="Certificado Teaching Assistant" />
                            <div className="">
                                <h4>Teaching Assistant</h4>
                                <p className="text-justify">En Henry tuve la oportunidad de ser mentor y acompañante de alumnos de módulos anteriores en su proceso de aprendizaje. Logré ayudarlos en muchas ocasiones con la resolución de errores en tecnologías como Express.js, NestJS, TypeORM, TypeScript, PostgreSQL y React.js, además de que promoví el trabajo en equipo y la colaboración grupal. Me permitió desarrollar mis habilidades comunicativas y desarrollar mi interés por aportar en el progreso de los demás.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer></footer>
        </div>
    )
}

export default Landing