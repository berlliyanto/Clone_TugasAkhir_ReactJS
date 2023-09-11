const Hamburger = ({onClick}) => {
    return (
        <div className="hamburger-menu" onClick={onClick}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
        </div>
    )
}

export default Hamburger;