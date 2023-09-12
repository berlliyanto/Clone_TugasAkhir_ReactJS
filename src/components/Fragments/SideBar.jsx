import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import SideLink from "../Elements/SideLink/SIdeLink";
import Button from "../Elements/Button/Button";

const SideBar = () => {
    const darkMode = useSelector((state)=> state.darkMode);
    let name = "";
    let role = ""
    if(localStorage.getItem('auth')){
        name = JSON.parse(localStorage.getItem('auth')).name;
        role = JSON.parse(localStorage.getItem('auth')).otoritas;
    }

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
                            return <SideLink key={index} text={item.text} icon={<FontAwesomeIcon icon={faDesktop}/>}/>
                        })
                    }
                </ul>
                <Button buttonStyle={'button-alert'} textButton={'Logout'} onClick={showPopUpLogout} />
            </div>
        </aside>
    )
}

export default SideBar;