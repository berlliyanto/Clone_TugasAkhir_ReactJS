import { Link } from "react-router-dom";

const SideLink = ({text,icon}) => {
    return (
        <li className="sidebar-link">
            <Link className="link">{icon}<span></span>{text}</Link>
        </li>
    )
}

export default SideLink