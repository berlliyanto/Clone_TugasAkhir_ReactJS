const Wrap = ({ children, className ,style }) => {
    const newClassName = `wrap ${className}`;

    return (
        <div style={style} className={newClassName}>{children}</div>
    )
}

export const HeaderWrap = ({title,style}) => {
    return (
        <div className="header">
            <h1 style={style}>{title}</h1>
        </div>
    )
}

export const BodyWrap = ({children}) => {
    return (
        <div className="body">
            {children}
        </div>
    )
}

export const FooterWrap = () => {
    return (
        <div className="footer"></div>
    )
}

export default Wrap;