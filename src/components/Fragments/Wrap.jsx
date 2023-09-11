const Wrap = ({ children, className }) => {
    const newClassName = `wrap ${className}`;

    return (
        <div className={newClassName}>{children}</div>
    )
}

export const HeaderWrap = ({title}) => {
    return (
        <div className="header">
            <h1>{title}</h1>
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