import { Link } from "react-router"
export const Footer = () => {
    return (<>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">

            <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2025 Maikon Monteiro</span>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li>
                    <Link to="https://www.instagram.com/maikonsm?igsh=aWZxMDY5Z2c0dmhx&utm_source=qr" target="_blank">
                        <i className="bi bi-instagram fs-4 text-body-secondary"></i>
                    </Link>
                </li>
                <li className="ms-4">
                    <Link to="https://www.facebook.com/share/1B8G1ViTH4/?mibextid=wwXIfr" target="_blank">
                        <i className="bi bi-facebook fs-4 text-body-secondary">
                        </i>
                    </Link>
                </li>
                <li className="ms-4">
                    <Link to="https://wa.me/559284251129" target="_blank">
                        <i className="bi bi-whatsapp fs-4 text-body-secondary"></i>
                    </Link>
                </li>
            </ul>
        </footer>
    </>)
}