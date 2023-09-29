import { Fragment } from "react";
import SideBar from "../components/Fragments/SideBar";
import PopUpLogout from "../components/Fragments/PopUpLogout";
import NavBar from "../components/Fragments/NavBar";
import { useParams } from "react-router-dom";
import MachineLayout from "../components/Layouts/MachineLayout";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

function MachinePage(){
    
    const navigate = useNavigate();
    useLogin(navigate);
    return (
        <Fragment>
            <NavBar />
            <SideBar />
            <MachineLayout />
            <PopUpLogout/>
        </Fragment>
    )
}

export default MachinePage;