import React from "react";
import { Fragment } from "react";
import NavBar from "../components/Fragments/NavBar";
import SideBar from "../components/Fragments/SideBar";
import PopUpLogout from "../components/Fragments/PopUpLogout";
import AccountLayout from "../components/Layouts/AccountLayout";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

function AccountPage(){
    const navigate = useNavigate();
    useLogin(navigate);
    return (
        <Fragment>
            <NavBar />
            <SideBar />
            <AccountLayout />
            <PopUpLogout />
        </Fragment>
    )
}

export default AccountPage;