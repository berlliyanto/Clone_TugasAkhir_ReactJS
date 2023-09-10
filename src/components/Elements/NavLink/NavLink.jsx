import { Link } from "react-router-dom";

const NavLink = ({text, href, name, handleLogout, className}) => {
    const classNameData = `link ${className}`;
    return (
    <li className="nav-link">
        <Link  className={classNameData} to={href} name={name} onClick={(e)=>e.target.name==='Logout'?handleLogout():''}>{text}</Link>
    </li>
    )
}

export default NavLink;