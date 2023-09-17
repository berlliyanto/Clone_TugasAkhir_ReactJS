const Label = (props) =>{
    const {htmlFor, children, color} = props;
    return <label style={{color: color}} htmlFor={htmlFor}>{children}</label>
}

export default Label;