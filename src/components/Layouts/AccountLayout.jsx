import { useSelector } from "react-redux";
import AddAccount from "../Fragments/Account/AddAccount";
import Overlay from "../Elements/Overlay/Overlay"
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../Elements/Loading/Loading";
import { getUsers } from "../../services/account.service";
import TableUser from "../Elements/Table/TableUser";
import Button from "../Elements/Button/Button";
import EditAccount from "../Fragments/Account/EditAccount";

const AccountLayout = () => {
    const darkMode = useSelector((state) => state.darkMode);
    const auth = useSelector((state) => state.auth.user);
    const [users, setUsers] = useState([]);
    const [loadingUsers, setLoadingUsers] = useState(false);
    let token = auth.token;
    useEffect(() => {
        getUsers({ token }, (response) => {
            if (response == false) {
                setLoadingUsers(false);
            } else {
                setLoadingUsers(true);
                if (response.status == 200) {
                    setUsers(response.data.data);
                } else {
                    console.log(response);
                }
            }
        })
    }, [token]);

    const openModalAdd = (state) => {
        if(state){
            document.querySelector('.dialog-acc').setAttribute('open', 'true') 
        }else{
            document.querySelector('.dialog-acc').removeAttribute('open');
        }
    }
    

    return (
        <main className="account" style={{ backgroundColor: darkMode ? '#333e46' : '#EEEEEE' }}>
            <h1 style={{ color: darkMode ? '#FFFFFF' : '#333e46' }}>Manage Account</h1>
            <div className="add-account">
                <Button buttonStyle={'button-success'} textButton={'Add Account'} onClick={() => openModalAdd(true)} />
            </div>
            <div className="list-account" style={{ backgroundColor: darkMode ? '#333e46' : '#FFFFFF' }}>
                {
                    !loadingUsers ? <Loading /> : <TableUser users={users} tableClassName="table-user" />
                }
            </div>
                <AddAccount />
                <EditAccount token={token} />
        </main>

    )
}

export default AccountLayout;