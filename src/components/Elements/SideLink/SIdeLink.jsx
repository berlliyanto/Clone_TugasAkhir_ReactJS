import { Link } from "react-router-dom";

const SideLink = ({text,icon,href}) => {
    return (
        <li className="sidebar-link">
            <Link to={href} className="link">{icon}<span></span>{text}</Link>
        </li>
    )
}

export default SideLink