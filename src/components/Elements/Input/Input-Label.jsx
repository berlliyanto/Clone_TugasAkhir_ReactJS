import Label from "./Label";
import Input from "./Input";
import { forwardRef } from "react";

const InputLabel = forwardRef((props, ref) =>{
    const {label,name,placeHolder, type, color, value } = props;
    return (
        <>
            <Label color={color} htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeHolder={placeHolder} ref={ref} value={value}></Input>
        </>
    )
})

export default InputLabel;