import { forwardRef } from "react"
import { Link } from "react-router"
import cap1 from "../assets/cap1.jpg"
export const Portfolio = forwardRef((props, ref) => {
    return (<>
        <div ref={ref}>
            <h2 className="pb-2 border-bottom">Meu Portfólio</h2>
            <div className="row g-4 py-4 row-cols-1 row-cols-md-3">
                <div className="col">
                    <div className="card h-100">
                        <img src={cap1} alt="" srcset="" />
                        <div className="card-body">
                            <h5 className="card-title">Sistema para Universidade</h5>
                            <p className="card-text">Sistema de gestão para Universidade Particular com controle de acesso de perfil. Módulos: Alunos, Professores, Notas, Disciplinas etc.</p>
                        </div>
                        <div className="card-footer">
                            <Link className="text-success" to="https://itacoatiaracei.com.br" target="_blank">Acessar</Link>
                        </div>
                    </div>

                </div>
                <div className="col">
                    <div className="card h-100">
                        <svg height="200" className="card-img-top" role="img" xmlns="http://www.w3.org/2000/svg">
                            <rect width="100%" height="100%" fill="#55595c"></rect>
                            <text x="40%" y="50%" fill="#eceeef">
                                Image cap
                            </text>
                        </svg>
                        <div className="card-body">
                            <h5 className="card-title">Projeto 2</h5>
                            <p className="card-text">This is a short card.</p>
                        </div>
                        <div className="card-footer">
                            <Link className="text-success">Acessar</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <svg height="200" className="card-img-top" role="img" xmlns="http://www.w3.org/2000/svg">
                            <rect width="100%" height="100%" fill="#55595c"></rect>
                            <text x="40%" y="50%" fill="#eceeef">
                                Image cap
                            </text>
                        </svg>
                        <div className="card-body">
                            <h5 className="card-title">Projeto 3</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">Desenvolvido em Agosto 2025</small>
                            <Link className="text-success">Acessar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
})