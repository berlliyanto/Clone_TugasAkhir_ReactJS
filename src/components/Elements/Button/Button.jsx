const Button = ({buttonStyle,textButton, type, onClick}) => {
    const buttonClassName = `button ${buttonStyle}`;
    return (
        <button  type={type} className={buttonClassName} onClick={onClick} >
            <span>{textButton}</span>
        </button>
    )
}

export default Button;