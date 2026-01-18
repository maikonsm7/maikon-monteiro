import { Link } from "react-router"
import cap1 from "../assets/cap1.jpg"
import cap2 from "../assets/cap2.jpg"
import cap3 from "../assets/cap3.jpg"
export const Portfolio = ({props, ref}) => {

    return (<>
        <div ref={ref} className="fade-in-section">
            <h2 className="pb-2 border-bottom">Meu Portfólio</h2>
            <div className="row g-4 py-4 row-cols-1 row-cols-md-3">
                <div className="col">
                    <div className="card h-100">
                        <img src={cap1} alt="cap1"/>
                        <div className="card-body">
                            <h5 className="card-title">Sistema para Universidade</h5>
                            <p className="card-text justify">Sistema de gestão para Universidade Particular com controle de acesso de perfil. Módulos: Alunos, Professores, Notas, Disciplinas etc.</p>
                        </div>
                        <div className="card-footer d-flex justify-content-between align-items-center">
                            <span className="form-text">Agosto 2025</span>
                            <Link className="text-success" to="https://itacoatiaracei.com.br/login" target="_blank">Acessar</Link>
                        </div>
                    </div>

                </div>
        
                <div className="col">
                    <div className="card h-100">
                        <img src={cap3} alt="cap3"/>
                        <div className="card-body">
                            <h5 className="card-title">Landing Page</h5>
                            <p className="card-text justify">
                                Landing personalizada. Solução ideal para campanhas, lançamentos de produtos ou validação de ideias com foco em impacto e eficiência.
                            </p>
                        </div>
                        <div className="card-footer d-flex justify-content-between align-items-center">
                            <span className="form-text">Setembro 2025</span>
                            <Link className="text-success" to="https://itacoatiaracei.com.br" target="_blank">Acessar</Link>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100">
                        <img src={cap2} alt="cap2"/>
                        <div className="card-body">
                            <h5 className="card-title">Sales Force</h5>
                            <p className="card-text justify">SaaS - Força de vendas para empresas. Gestão de vendas e controle de tarefas para correspondente bancário com perfil de acesso.</p>
                        </div>
                        <div className="card-footer d-flex justify-content-between align-items-center">
                            <span className="form-text">Novembro 2025</span>
                            <Link className="text-success" to="https://salesforce.maikonsm.com.br" target="_blank">Acessar</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>)
}