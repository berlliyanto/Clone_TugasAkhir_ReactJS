import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ActiveMachine = ({style, title, status, icon}) => {

    return (
        <div className="active-machine">
            <div className="status" style={style}><FontAwesomeIcon icon={icon}/></div>
            <h4>{title} : <span>{status}</span></h4>
        </div>
    )
}

export default ActiveMachine;