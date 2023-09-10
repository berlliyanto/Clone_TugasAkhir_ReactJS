import NavBarLanding from "../components/Fragments/NavBarLanding";
import LandingLayouts from "../components/Layouts/LandingLayout";


function LandingPage(){
    return <LandingLayouts>
        <NavBarLanding />
        <h1 className="welcome">Welcome To</h1>
        <h1 className="welcome">Production Monitoring System</h1>
    </LandingLayouts>
}

export default LandingPage;