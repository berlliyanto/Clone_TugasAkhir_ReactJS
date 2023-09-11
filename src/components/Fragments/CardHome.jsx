import Button from "../Elements/Button/Button";

const CardHome = ({machine,data1, data2, data3, data4, path, title, color}) => {
    return(
        <div className="card-home" style={{backgroundColor:color}}>
            <h3>{title[0]} {machine}</h3>
            <h4>{title[1]} {data1}</h4>
            <h4>{title[2]} {data2}</h4>
            <h4>{title[3]} {data3}</h4>
            <h4>{title[4]} {data4}</h4>
            <Button buttonStyle="button-cyan" textButton="Detail" onClick={() => window.location.href = path} />
        </div>
    )
}

export default CardHome;