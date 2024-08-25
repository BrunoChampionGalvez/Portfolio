import "./Landing.css"

function Landing() {

    return (
        <div className="mt-24">
            <header>
            </header>
            <main>
                <section className="flex justify-center">
                    <div className="flex justify-between gap-12 max-w-6xl">
                        <div className="flex flex-col max-w-md">
                            <h1 className="font-bold mb-5 text-3xl text-start max-w-md text-gray-700 h1">Full Stack Web Developer 👋🏼</h1>
                            <p className="text-gray-600 mb-2 max-w-md text-start">Hi, I'm Bruno Champion, a passionate Full Stack Web Developer eager to build new projects and keep learning.</p>
                            <p className="text-gray-600 text-start">Based in <b>Lima, Perú</b> 📍</p>
                            <div className="flex justify-start items-center mt-auto gap-4">
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
                            <div className="mt-3 flex items-center gap-4">
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
                        <img className="rounded-2xl shadow-xl w-80 h-80" src="https://res.cloudinary.com/dp6v6zvsy/image/upload/v1724566162/profile_fbn4pf.png" alt="Bruno's profile picture" />
                    </div>
                </section>
            </main>
            <footer></footer>
        </div>
    )
}

export default Landing