const DividerLine = (props) =>{
    const {top, bottom, height, width, bgColor} = props;
    const marginStyle = {
        marginTop: top,
        marginBottom: bottom,
        height: height,
        width: width,
        backgroundColor:bgColor
    };
    return <div style={marginStyle}></div>
}

export default DividerLine;