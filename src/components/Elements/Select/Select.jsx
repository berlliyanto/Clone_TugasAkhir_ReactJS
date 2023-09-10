const Select = ({optionValue,name,id}) => {
    return (
        <select name={name} id={id} className="select">
            {
                optionValue.map((item, index) => {
                    return <option className="option" key={index} value={item}>{item}</option>
                })
            }
        </select>
    )
}

export default Select;