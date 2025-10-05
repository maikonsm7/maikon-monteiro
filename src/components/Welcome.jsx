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
                        <a className="text-body-secondary" href="#">
                            <i class="bi bi-instagram fs-2 primary-color"></i>
                        </a>
                    </li>
                    <li className="ms-4">
                        <a className="text-body-secondary" href="#">
                            <i class="bi bi-facebook fs-2 primary-color"></i>
                        </a>
                    </li>
                    <li className="ms-4">
                        <a className="text-body-secondary" href="#">
                            <i class="bi bi-whatsapp fs-2 primary-color"></i>
                        </a>
                    </li>
                    <li className="ms-4">
                        <a className="text-body-secondary" href="#">
                            <i class="bi bi-github fs-2 primary-color"></i>
                        </a>
                    </li>
                    <li className="ms-4">
                        <a className="text-body-secondary" href="#">
                            <i class="bi bi-linkedin fs-2 primary-color"></i>
                        </a>
                    </li>
                </ul>

            </div>
            <div className="col-md-5">
                <div className="img-profile"></div>                
            </div>
        </div >
    </>)
}