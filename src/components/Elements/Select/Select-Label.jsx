import { Fragment } from "react"
import Label from "../Input/Label"
import Select from "./Select";

const SelectLabel = ({name,label,optionValue, id}) =>{
    return (
        <Fragment>
            <Label htmlFor={name}>{label}</Label>
            <Select optionValue={optionValue} name={name} id={id} />
        </Fragment>
    )
}

export default SelectLabel;