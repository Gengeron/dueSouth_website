import {Link} from "react-router-dom";

import logo from '../assets/trip.svg'

function Navigation() {
    return (
        <>
            <header className="header">
                <div className="header__container container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="" width="48" height="48"  style={{ marginRight: '10px' }} />
                        Due South
                    </Link>
                    <ul className="header__nav">
                        <li className="nav__element"><Link to="/about" className="nav__link">o mnie</Link></li>
                        <li className="nav__element"><Link to="/trips" className="nav__link">podróże</Link></li>
                        <li className="nav__element"><Link to="/gallery" className="nav__link">galeria</Link></li>
                        <li className="nav__element"><Link to="/contact" className="nav__link">kontakt</Link></li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Navigation;