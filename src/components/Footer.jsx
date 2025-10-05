export const Footer = () => {
    return (<>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">

            <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2025 Maikon Monteiro</span>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3">
                    <a className="text-body-secondary" href="#">
                        <i class="bi bi-instagram fs-4"></i>
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-body-secondary" href="#">
                        <i class="bi bi-facebook fs-4"></i>
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-body-secondary" href="#">
                        <i class="bi bi-whatsapp fs-4"></i>
                    </a>
                </li>
            </ul>
        </footer>
    </>)
}