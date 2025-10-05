import { Link } from "react-router"
export const Welcome = () => {
    return (<>
            <div className="row pb-4">
                <div className="col-md-7 text-focus-in">
                    <h5 className="fw-normal text-white">
                        MUITO PRAZER,
                    </h5>
                    <h1 className="pb-2 primary-color">
                        SOU MAIKON MONTEIRO
                    </h1>
                    <p className="justify">
                        Bacharel em Sistemas de Informação e Desenvolvedor Full Stack, apaixonado por tecnologia e resolução de problemas através do código.
                        Tenho experiência no desenvolvimento de aplicações web modernas, com foco em desempenho, usabilidade e boas práticas de desenvolvimento.
                    </p>

                    <ul className="col-md-4 list-unstyled d-flex">
                        <li>
                            <Link to="https://www.instagram.com/maikonsm?igsh=aWZxMDY5Z2c0dmhx&utm_source=qr" target="_blank">
                                <i className="bi bi-instagram fs-2 link"></i>
                            </Link>
                        </li>
                        <li className="ms-4">
                            <Link to="https://www.facebook.com/share/1B8G1ViTH4/?mibextid=wwXIfr" target="_blank">
                                <i className="bi bi-facebook fs-2 link">
                                </i></Link>
                        </li>
                        <li className="ms-4">
                            <Link to="https://wa.me/559284251129" target="_blank">
                                <i className="bi bi-whatsapp fs-2 link"></i>
                            </Link>
                        </li>
                        <li className="ms-4">
                            <Link to="https://github.com/maikonsm7" target="_blank">
                                <i className="bi bi-github fs-2 link"></i>
                            </Link>
                        </li>
                        <li className="ms-4">
                            <Link to="https://linkedin.com/in/maikon-monteiro" target="_blank">
                                <i className="bi bi-linkedin fs-2 link"></i>
                            </Link>
                        </li>
                    </ul>

                </div>
                <div className="col-md-5">
                    <div className="img-profile scale-in-center"></div>
                </div>
            </div >
    </>)
}