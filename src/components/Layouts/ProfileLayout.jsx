import { Fragment } from "react"
import { useParams } from "react-router-dom"

const ProfileLayout = () => {
    const id = useParams().id;
    console.log(id)
    return (
        <Fragment>
            <h1>{id}</h1>
        </Fragment>
    )
}

export default ProfileLayout;