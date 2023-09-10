import { useEffect } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";

import NavBar from "../components/Fragments/NavBar";
import { useLogin } from "../hooks/useLogin";
import HomeLayout from "../components/Layouts/HomeLayout";
import SideBar from "../components/Fragments/SideBar";
import PopUpLogout from "../components/Fragments/PopUpLogout";
import { getProductHome } from "../services/home.service";


function HomePage() {
    const auth = useLogin();
    useEffect(() => {

    }, [])
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