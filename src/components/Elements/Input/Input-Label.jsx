import Label from "./Label";
import Input from "./Input";
import { forwardRef } from "react";

const InputLabel = forwardRef((props, ref) =>{
    const {label,name,placeHolder, type, } = props;
    return (
        <>
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeHolder={placeHolder} ref={ref}></Input>
        </>
    )
})

export default InputLabel;