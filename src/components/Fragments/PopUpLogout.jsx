import { useNavigate } from "react-router-dom";
import Button from "../Elements/Button/Button"
import Overlay from "../Elements/Overlay/Overlay";


const PopUpLogout = () => {
    const navigate = useNavigate();
    const closePopupLogout = () => {
        const overlay = document.querySelector('.overlay');
        const popup = document.querySelector('.popup-logout');
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
        overlay.style.zIndex = -1001;
        popup.style.opacity = 0;
    }

    const useLogout = () => {
        localStorage.removeItem('auth');
        navigate('/login');
    }

    return (
        <Overlay>
            <div className="popup-logout">
                <h1>Apakah Anda Yakin akan Logout?</h1>
                <Button buttonStyle={"button-success"} textButton={"Tidak"} onClick={closePopupLogout} />
                <Button buttonStyle={"button-alert"} textButton={"Ya"} onClick={useLogout}/>
            </div>
        </Overlay>
    )
}


export default PopUpLogout;