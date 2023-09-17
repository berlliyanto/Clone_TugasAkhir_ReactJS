const Switch = ({handleOnChange, checked}) => {
    return (
        <label className="switch">
            <input className="switch-input" type="checkbox" onChange={handleOnChange} checked={Boolean(checked)} />
            <span className="slider round"></span>
        </label>
    )
}

export default Switch;