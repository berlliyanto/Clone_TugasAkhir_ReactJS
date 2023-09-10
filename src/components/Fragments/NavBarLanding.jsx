
import NavLink from "../Elements/NavLink/NavLink";

const NavBarLanding = ({currentPage}) => {
    return (
        <header className="navigation-bar landing-nav">
            <div className="tag-line">
                <h1>Production Monitoring System</h1>
            </div>
            <ul className="nav-links">
                <NavLink className={currentPage==="login"? "active" : ""} name="login" href="/login" text="Login" />
                <NavLink className={currentPage==="register"? "active" : ""}name="register" href="/register" text="Register"/>
            </ul>
        </header>
    )
}

export default NavBarLanding;