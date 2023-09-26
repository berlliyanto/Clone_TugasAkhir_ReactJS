import { Fragment } from "react";
import SideBar from "../../components/Fragments/SideBar";
import PopUpLogout from "../../components/Fragments/PopUpLogout";
import NavBar from "../../components/Fragments/NavBar";

function MachinePage3(){
    return (
        <Fragment>
            <NavBar />
            <SideBar />
            <PopUpLogout/>
        </Fragment>
    )
}

export default MachinePage3;