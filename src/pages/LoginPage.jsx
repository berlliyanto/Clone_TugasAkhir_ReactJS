import { useState } from "react";
import NavBarLanding from "../components/Fragments/NavBarLanding";
import LandingLayouts from "../components/Layouts/LandingLayout";
import LoginLayout from "../components/Layouts/LoginLayout";

function LoginPage() {

    return (
        <LandingLayouts>
            <NavBarLanding currentPage={"login"}/>
            <LoginLayout/>
        </LandingLayouts>
    )
}

export default LoginPage;