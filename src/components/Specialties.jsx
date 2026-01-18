export const Specialties = ({props, ref}) => {
    return (<>
        <div ref={ref} className="fade-in-section">
            <h2 className="pb-2 border-bottom">Minhas Especialidades</h2>
            <div className="row g-4 py-4 row-cols-1 row-cols-lg-3">
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
                        <i className="bi bi-code-square text-dark"></i>
                    </div>
                    <h3 className="fs-2 text-body-emphasis">Website</h3>
                    <p className="justify">
                        Desenvolvimento de websites modernos, rápidos e responsivos, focados em performance, usabilidade e conversão. Soluções sob medida para fortalecer sua presença digital e transmitir credibilidade ao seu negócio.
                    </p>
                    <a href="#" className="text-success">
                        Saiba mais
                        <i className="bi bi-chevron-double-right"></i>
                    </a>
                </div>
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
                        <i className="bi bi-card-list text-dark"></i>
                    </div>
                    <h3 className="fs-2 text-body-emphasis">Cardápio Online</h3>
                    <p className="justify">
                        Criação de cardápios online práticos e intuitivos, acessíveis por celular, com visual atrativo e fácil atualização. Ideal para restaurantes que querem agilizar pedidos e melhorar a experiência do cliente.
                    </p>
                    <a href="#" className="text-success">
                        Saiba mais
                        <i className="bi bi-chevron-double-right"></i>
                    </a>
                </div>
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
                        <i className="bi bi-cart text-dark"></i>
                    </div>
                    <h3 className="fs-2 text-body-emphasis">Loja Online</h3>
                    <p className="justify">
                        Desenvolvimento de lojas virtuais completas, seguras e escaláveis, prontas para vender 24h por dia. Integrações com pagamento, gestão de produtos e foco total em conversão e crescimento do negócio.
                    </p>
                    <a href="#" className="text-success">
                        Saiba mais
                        <i className="bi bi-chevron-double-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </>)
}