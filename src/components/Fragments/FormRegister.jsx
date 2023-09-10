import { register } from "../../services/auth.service";
import Button from "../Elements/Button/Button";
import InputLabel from "../Elements/Input/Input-Label";
import SelectLabel from "../Elements/Select/Select-Label";

const FormRegister = (props) => {
    const roleList = [
        "User-Management",
        "User-Maintenance",
        "User-Operator",
        "User-QC",
        "User-Warehouse"
    ]

    const handleRegister = (e) => {
        e.preventDefault();

        const data = {
            name: e.target.name.value,
            username: e.target.username.value,
            password: e.target.password.value,
            otoritas: e.target.role.value
        }

        register(data, (response) => {
            if(response.status == 200){
                window.location.href = "/login";
            }else{
                console.log(response);
            }
        })
    }

    return <form className="form-validate" onSubmit={handleRegister}>
        <InputLabel name="name" placeHolder="Input Name" type="text" label="Name" />
        <InputLabel name="username" placeHolder="example@email.com" type="text" label="Username" />
        <InputLabel name="password" placeHolder="*****" type="text" label="Password" />
        <SelectLabel name="role" id="role" optionValue={roleList} label="Role" />
        <Button buttonStyle={"button-cyan"} textButton={"Register"} />
    </form>
}

export default FormRegister;