import { useEffect } from "react";
import Button from "../../Elements/Button/Button";
import InputLabel from "../../Elements/Input/Input-Label";
import SelectLabel from "../../Elements/Select/Select-Label";
import { useState } from "react";
import { getUser, updateUser } from "../../../services/account.service";

const EditAccount = ({ color, token }) => {
    let textButton = "Update";
    const roleList = [
        "User-Management",
        "User-Maintenance",
        "User-Operator",
        "User-QC",
        "User-Warehouse"
    ];

    const [userData, setUserData] = useState({});

    const updateAccount = (e) => {
        e.preventDefault();
        let targetId = document.querySelector('.dialog-edit').getAttribute('target-id');
        const data = {
            token: token,
            id: targetId,
            name: e.target.name.value,
            username: e.target.username.value,
            password: e.target.password.value,
            otoritas: e.target.role.value
        }

        updateUser(data, (response) => {
            if (response.status == 200) {
                window.location.href = "/account";
            } else {
                console.log(response);
            }
        })
    }

    const closeModal = () => {
        document.querySelector('.dialog-edit').removeAttribute('open')
    }

    return (
        <dialog className="dialog-edit" target-id="">
            <div className="dialog-content">
                <h6 onClick={closeModal}>Close</h6>
                <form className="form-validate" onSubmit={updateAccount} style={{ backgroundColor: 'transparent', border: 'none', backdropFilter: 'none' }}>
                    <InputLabel color={color} name="name" placeHolder="Input Name" type="text" label="Name" />
                    <InputLabel color={color} name="username" placeHolder="Input Username" type="text" label="Username" />
                    <InputLabel color={color} name="password" placeHolder="*****" type="text" label="Password" />
                    <SelectLabel color={color} name="role" id="role" optionValue={roleList} label="Role" />
                    <Button buttonStyle={"button-success"} textButton={textButton} />
                </form>
            </div>
        </dialog>
    )
}

export default EditAccount;