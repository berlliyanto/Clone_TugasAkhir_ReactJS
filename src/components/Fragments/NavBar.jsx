import NavLink from "../Elements/NavLink/NavLink";
import Hamburger from "../Elements/Hamburger/Hamburger";

const NavBar = () => {
    const showPopUpLogout = () => {
        const overlay = document.querySelector('.overlay');
        const popup = document.querySelector('.popup-logout');
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        overlay.style.zIndex = 1001;
        popup.style.opacity = 1;
    }

    const openSidebar = () => {
        const hambuger = document.querySelector('.hamburger-menu');
        const sidebar = document.querySelector('.sidebar');
        hambuger.classList.toggle("open-sidebar");
        console.log(sidebar.classList.toggle("sidebar-open"));
    }

    return (
        <header className="navigation-bar home-nav">
            <div className="tag-line">
                <Hamburger onClick={openSidebar} />
                <h1>Production Monitoring System</h1>
            </div>
            <ul className="nav-links">
                <NavLink name="Logout" href="" text="Logout" handleLogout={showPopUpLogout} />
            </ul>
        </header>
    )
}

export default NavBar;