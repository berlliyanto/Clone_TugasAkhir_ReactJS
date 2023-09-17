import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import SideLink from "../Elements/SideLink/SIdeLink";
import Button from "../Elements/Button/Button";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const SideBar = () => {
    const darkMode = useSelector((state)=> state.darkMode);
    const auth = useSelector((state)=> state.auth.user);
    let name = auth.name;
    let role = auth.otoritas;
    

    const sideMenu = [
        {
            text: "Home",
            to: '/home',
            icon: faHome
        },
        {
            text: "Machine 1",
            to: '/Machine/1',
            icon: faDesktop
        },
        {
            text: "Machine 2",
            to: '/Machine/2',
            icon: faDesktop,
        },
        {
            text: "Machine 3",
            to: '/Machine/3',
            icon: faDesktop,
        },
        {
            text: "Machine 4",
            to: '/Machine/4',
            icon: faDesktop,
        },
        {
            text: "Account",
            to: '/account',
            icon: faUserAlt,
        },
    ];

    const showPopUpLogout = () => {
        const overlay = document.querySelector('.overlay');
        const popup = document.querySelector('.popup-logout');
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        overlay.style.zIndex = 1001;
        popup.style.opacity = 1;
    }

    return (
        <aside className="sidebar" style={{backgroundColor: darkMode? '#303841' : '#3A4750'}}>
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
                            return <SideLink key={index} text={item.text} icon={<FontAwesomeIcon icon={item.icon}/>} href={item.to} />
                        })
                    }
                </ul>
                <Button buttonStyle={'button-alert'} textButton={'Logout'} onClick={showPopUpLogout} />
            </div>
        </aside>
    )
}

export default SideBar;