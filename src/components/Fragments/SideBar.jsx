import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import SideLink from "../Elements/SideLink/SIdeLink";

const SideBar = () => {
    const name = useSelector((state) => state.auth.user.name);
    const role = useSelector((state) => state.auth.user.otoritas);
    const sideMenu = [
        {
            text: "Machine 1",
            to: ''
        },
        {
            text: "Machine 2",
            to: ''
        },
        {
            text: "Machine 3",
            to: ''
        },
        {
            text: "Machine 4",
            to: ''
        },
    ]

    return (
        <aside className="sidebar">
            <div className="sidebar-content">
                <div className="avatar">
                    <img src="/images/icon_avatar.png" alt="" />
                    <h1>Welcome</h1>
                    <h2>{name}</h2>
                    <h6>{role}</h6>
                </div>
                <ul className="sidebar-links">
                    {
                        sideMenu.map((item, index) => {
                            return <SideLink key={index} text={item.text} icon={<FontAwesomeIcon icon={faDesktop}/>}/>
                        })
                    }
                </ul>
            </div>
        </aside>
    )
}

export default SideBar;