import { useEffect } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";

import NavBar from "../components/Fragments/NavBar";
import { useLogin } from "../hooks/useLogin";
import HomeLayout from "../components/Layouts/HomeLayout";
import SideBar from "../components/Fragments/SideBar";
import PopUpLogout from "../components/Fragments/PopUpLogout";
import { useNavigate } from "react-router-dom";



function HomePage() {
    const navigate = useNavigate();
    useLogin(navigate);
    return (
        <Fragment>
            <NavBar />
            <SideBar />
            <HomeLayout />
            <PopUpLogout />
        </Fragment>
    )
}

export default HomePage;