const Button = ({buttonStyle,textButton, type, onClick, customStyle}) => {
    const buttonClassName = `button ${buttonStyle}`;
    return (
        <button style={customStyle}  type={type} className={buttonClassName} onClick={onClick} >
            <span>{textButton}</span>
        </button>
    )
}

export default Button;