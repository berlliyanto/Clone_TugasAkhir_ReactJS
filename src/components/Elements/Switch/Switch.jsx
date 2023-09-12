const Switch = ({handleOnClick, checked}) => {
    return (
        <label className="switch">
            <input className="switch-input" type="checkbox" onClick={handleOnClick} checked={checked} />
            <span className="slider round"></span>
        </label>
    )
}

export default Switch;