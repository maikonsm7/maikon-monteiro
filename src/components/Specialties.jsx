export const Specialties = () => {
    return (<>
        <h2 className="pb-2 border-bottom">Minhas Especialidades</h2>
        <div className="row g-4 py-4 row-cols-1 row-cols-lg-3">
            <div className="feature col">
                <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
                    <i className="bi bi-code-square text-dark"></i>
                </div>
                <h3 className="fs-2 text-body-emphasis">Website</h3>
                <p>
                    Paragraph of text beneath the heading to explain the heading.
                    We'll add onto it with another sentence and probably just keep
                    going until we run out of words.
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
                <p>
                    Paragraph of text beneath the heading to explain the heading.
                    We'll add onto it with another sentence and probably just keep
                    going until we run out of words.
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
                <p>
                    Paragraph of text beneath the heading to explain the heading.
                    We'll add onto it with another sentence and probably just keep
                    going until we run out of words.
                </p>
                <a href="#" className="text-success">
                    Saiba mais
                    <i className="bi bi-chevron-double-right"></i>
                </a>
            </div>
        </div>
    </>)
}