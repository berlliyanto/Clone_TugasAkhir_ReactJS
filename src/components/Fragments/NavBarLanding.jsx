
import { Link } from "react-router-dom";
import NavLink from "../Elements/NavLink/NavLink";
import Hamburger from "../Elements/Hamburger/Hamburger";

const NavBarLanding = ({ currentPage }) => {
    const openMenu = () => {
        const hambuger = document.querySelector('.hamburger-menu');
        const menuLanding = document.querySelector(".menu-landing");
        hambuger.classList.toggle("open-sidebar");
        menuLanding.classList.toggle("landing-active");
    }

    return (
        <header className="navigation-bar landing-nav">
            <div className="tag-line">
                <h1><Link to={"/"}>Production Monitoring System</Link></h1>
            </div>
            <ul className="nav-links">
                <NavLink className={currentPage === "login" ? "active" : ""} name="login" href="/login" text="Login" />
                <NavLink className={currentPage === "register" ? "active" : ""} name="register" href="/register" text="Register" />
            </ul>
            <Hamburger onClick={openMenu} />
            <div className="menu-landing">
                <NavLink className={currentPage === "login" ? "active" : ""} name="login" href="/login" text="Login" />
                <NavLink className={currentPage === "register" ? "active" : ""} name="register" href="/register" text="Register" />
            </div>
        </header>
    )
}

export default NavBarLanding;