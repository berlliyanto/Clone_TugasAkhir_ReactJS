const Divider = (props) =>{
    const {top, bottom} = props;
    const marginStyle = {
        marginTop: top,
        marginBottom: bottom
    };
    return <div style={marginStyle}></div>
}

export default Divider;