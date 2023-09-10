import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
    const {type, name, placeHolder, value} = props;
    return <input 
    type={type} 
    className="input" 
    name={name} 
    placeholder={placeHolder} 
    id={name} 
    value={value}
    ref={ref}
    required/>
})

export default Input;