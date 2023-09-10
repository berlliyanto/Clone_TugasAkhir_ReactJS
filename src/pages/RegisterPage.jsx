import { useSelector } from "react-redux";
import NavBarLanding from "../components/Fragments/NavBarLanding";
import LandingLayouts from "../components/Layouts/LandingLayout";
import RegisterLayout from "../components/Layouts/RegisterLayout";

function RegisterPage() {


    return (
        <LandingLayouts>
            <NavBarLanding currentPage={"register"}/>
            <RegisterLayout/>
        </LandingLayouts>
    )
}

export default RegisterPage;