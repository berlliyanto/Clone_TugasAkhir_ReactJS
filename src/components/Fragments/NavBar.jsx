
import Hamburger from "../Elements/Hamburger/Hamburger";
import { useDispatch, useSelector } from "react-redux";
import Switch from "../Elements/Switch/Switch";
import {toggleDarkMode} from "../../redux/slices/darkModeSlice";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector((state)=> state.darkMode);

    const openSidebar = () => {
        const hambuger = document.querySelector('.hamburger-menu');
        const sidebar = document.querySelector('.sidebar');
        hambuger.classList.toggle("open-sidebar");
        console.log(sidebar.classList.toggle("sidebar-open"));
    }
    function tes(){
        dispatch(toggleDarkMode());
    }
    
    return (
        <header className="navigation-bar home-nav" style={{backgroundColor: darkMode? '#303841' : '#3A4750'}}>
            <div className="tag-line">
                <Hamburger onClick={openSidebar} />
                <h1>Production Monitoring System</h1>
            </div>
            <ul className="nav-links">
                <Switch handleOnClick={tes} checked={darkMode} />
                <FontAwesomeIcon color={darkMode? '#EEEEEE': 'black'} icon={faSun} />
            </ul>
        </header>
    )
}

export default NavBar;