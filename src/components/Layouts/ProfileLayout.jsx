import Loading from '../Elements/Loading/Loading'
import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react"
import { useParams } from "react-router-dom"
import { getUser } from "../../services/account.service";
import { useSelector } from "react-redux";

const ProfileLayout = () => {
    const id = useParams().id;
    const [isLoading, setIsLoading] = useState(false);
    const [profile, setProfile] = useState({
        username: "",
        name: "",
        otoritas: "",
        token: false,
    });
    const auth = useSelector((state) => state.auth.user);

    useEffect(() => {
        let token = "";
        if (auth) {
            token = auth.token;
        }
        getUser({ token, id }, (response) => {
            if (response == false) {
                setIsLoading(true)
            } else {
                setIsLoading(false);
                if (response.status == 200) {
                    const data = response.data.data;
                    setProfile({
                        username: data.username,
                        name: data.name,
                        otoritas: data.otoritas,
                        token: true
                    });
                } else {
                    setProfile({
                        username: "",
                        name: "",
                        otoritas: "",
                        token: false
                    });
                }
            }
        })
    }, [])

    return (
        <main className="profile">
            {
                isLoading ? <Loading /> : <Fragment>
                    <section className="profile-container">
                        <img src="/images/icon_avatar.png" alt="" />
                        <h3 className='username'>Username : {profile.username}</h3>
                        <h3 className="name">Name : {profile.name}</h3>
                        <h3 className="otoritas">Otoritas : {profile.otoritas}</h3>
                        <h5 className="token">Status Token : {profile.token? 'Active' : 'Not Active'}</h5>
                    </section>
                    <section className="ubah-password"></section>
                </Fragment>
            }
        </main>
    )
}

export default ProfileLayout;