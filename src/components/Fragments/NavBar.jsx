import NavLink from "../Elements/NavLink/NavLink";
import Hamburger from "../Elements/Hamburger/Hamburger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt  } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    const showPopUpLogout = () => {
        const overlay = document.querySelector('.overlay');
        const popup = document.querySelector('.popup-logout');
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        overlay.style.zIndex = 1001;
        popup.style.opacity = 1;
    }

    return (
        <header className="navigation-bar home-nav">
            <div className="tag-line">
                <Hamburger />
                <h1>Production Monitoring System</h1>
            </div>
            <ul className="nav-links">
                <NavLink name="Logout" href="" text={<FontAwesomeIcon icon={faSignOutAlt} />} handleLogout={showPopUpLogout} />
            </ul>
        </header>
    )
}

export default NavBar;