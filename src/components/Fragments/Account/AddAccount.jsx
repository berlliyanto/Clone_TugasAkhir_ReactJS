import { register } from "../../../services/auth.service";
import Button from "../../Elements/Button/Button";
import InputLabel from "../../Elements/Input/Input-Label";
import SelectLabel from "../../Elements/Select/Select-Label";

const AddAccount = ({ color }) => {
    let textButton = "Add Account";
    const roleList = [
        "User-Management",
        "User-Maintenance",
        "User-Operator",
        "User-QC",
        "User-Warehouse"
    ];

    const handleRegister = (e) => {
        e.preventDefault();

        const data = {
            name: e.target.name.value,
            username: e.target.username.value,
            password: e.target.password.value,
            otoritas: e.target.role.value
        }

        register(data, (response) => {
            if(response===false){
                textButton = "Loading...";
            }else{
                textButton = "Add Account";
                if (response.status == 200) {
                    window.location.href = "/account";
                } else {
                    console.log(response);
                }
            }

        })
    }

    return (
        <dialog className="dialog-acc">
            <h6 onClick={() => document.querySelector('.dialog-acc').removeAttribute('open')}>Close</h6> 
            <form className="form-validate" onSubmit={handleRegister} style={{ backgroundColor: 'transparent', border: 'none', backdropFilter: 'none' }}>
                <InputLabel color={color} name="name" placeHolder="Input Name" type="text" label="Name" />
                <InputLabel color={color} name="username" placeHolder="Input Username" type="text" label="Username" />
                <InputLabel color={color} name="password" placeHolder="*****" type="text" label="Password" />
                <SelectLabel color={color} name="role" id="role" optionValue={roleList} label="Role" />
                <Button buttonStyle={"button-success"} textButton={textButton} />
            </form>
        </dialog>
    )
}

export default AddAccount;