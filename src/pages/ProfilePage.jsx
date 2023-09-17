import { Fragment } from "react";
import SideBar from "../components/Fragments/SideBar";
import PopUpLogout from "../components/Fragments/PopUpLogout";
import NavBar from "../components/Fragments/NavBar";
import ProfileLayout from "../components/Layouts/ProfileLayout";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

function ProfilePage(){
    const navigate = useNavigate();
    useLogin(navigate);
    return (
        <Fragment>
            <NavBar />
            <SideBar />
            <ProfileLayout />
            <PopUpLogout />
        </Fragment>
    )
}

export default ProfilePage;