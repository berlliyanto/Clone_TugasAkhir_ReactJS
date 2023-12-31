import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import SideLink from "../Elements/SideLink/SIdeLink";
import Button from "../Elements/Button/Button";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const SideBar = () => {
    const darkMode = useSelector((state) => state.darkMode);
    const auth = useSelector((state) => state.auth.user);
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        if (auth) {
            setName(auth.name);
            setRole(auth.otoritas)
            setId(auth.id);
        }
    }, [])


    const sideMenu = [
        {
            text: "Home",
            to: '/home',
            icon: faHome
        },
        {
            text: "Machine 1",
            to: '/machine/1',
            icon: faDesktop
        },
        {
            text: "Machine 2",
            to: '/machine/2',
            icon: faDesktop,
        },
        {
            text: "Machine 3",
            to: '/machine/3',
            icon: faDesktop,
        },
        {
            text: "Machine 4",
            to: '/machine/4',
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
        <aside className="sidebar" style={{ backgroundColor: darkMode ? '#303841' : '#3A4750' }}>
            <div className="sidebar-content">
                <div className="avatar">
                    <Link to={`/profile/${id}`}><img src="/images/icon_avatar.png" alt="" /></Link>
                    <h1>Welcome</h1>
                    <h2>{name}</h2>
                    <h6>{role}</h6>
                </div>
                <ul className="sidebar-links">
                    {
                        sideMenu.map((item, index) => {
                            if (role === "Admin" || item.text !== "Account") {
                                return <SideLink key={index} text={item.text} icon={<FontAwesomeIcon icon={item.icon} />} href={item.to} />;
                            } else {
                                return null;
                            }
                        })
                    }
                </ul>
                <Button buttonStyle={'button-alert'} textButton={'Logout'} onClick={showPopUpLogout} />
            </div>
        </aside>
    )
}

export default SideBar;