
export const Navbar = () => {
    return (<>
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark container">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Portifólio</a>
          
          <button className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Projetos</a></li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button className="btn btn-outline-success btn-outline-person" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
    </>)
}