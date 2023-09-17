import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import { deleteUser, getUser } from "../../../services/account.service";

const TableUser = ({ users, tableClassName }) => {
    const darkMode = useSelector((state) => state.darkMode);
    const auth = useSelector((state) => state.auth.user);
    let token = auth.token;
    const handleDeleteUser = (token, id,e) => {
        e.preventDefault();
        deleteUser({ token, id }, (response) => {
            if (response == false) {
                console.log(response)
            } else {
                if (response.status == 200) {
                    window.location.href = '/account';
                } else {
                    console.log(response);
                }
            }
        })
    }

    const openModalEdit = (state, id, data) => {
        console.log(data);
        document.querySelector('.dialog-edit #name').setAttribute('value', data.name);
        document.querySelector('.dialog-edit #username').setAttribute('value', data.username);
        if(state){
            document.querySelector('.dialog-edit').setAttribute('open', 'true'); 
            document.querySelector('.dialog-edit').setAttribute('target-id', id); 
        }else{
            document.querySelector('.dialog-edit').removeAttribute('open');
        }
    }


    return (
        <table className={tableClassName}>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user) => {
                        return (
                            <tr key={user.id} >
                                <td style={darkMode ? { color: '#FFFFFF' } : { color: '#333e46' }}>{user.username}</td>
                                <td style={darkMode ? { color: '#FFFFFF' } : { color: '#333e46' }}>{user.name}</td>
                                <td style={darkMode ? { color: '#FFFFFF' } : { color: '#333e46' }}>{user.otoritas}</td>
                                <td>
                                    {
                                        user.otoritas == "Admin" ?
                                            <div></div> :
                                            <Fragment>
                                                <Button
                                                    customStyle={{ width: 'auto', padding: '0px 25px' }}
                                                    buttonStyle={"button-alert"}
                                                    textButton={<FontAwesomeIcon icon={faTrash}
                                                    onClick={(e) => handleDeleteUser(token, user.id,e)}
                                                    />} />
                                                <span> </span>
                                                <Button
                                                    customStyle={{ width: 'auto', padding: '0px 25px' }}
                                                    buttonStyle={"button-danger"}
                                                    textButton={<FontAwesomeIcon icon={faEdit} 
                                                    onClick={()=>openModalEdit(true, user.id, user)}
                                                    />} />
                                            </Fragment>
                                    }
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default TableUser;