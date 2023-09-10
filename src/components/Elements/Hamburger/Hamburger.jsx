const Hamburger = () => {
    const openSidebar = () => {
        const hambuger = document.querySelector('.hamburger-menu');
        const sidebar = document.querySelector('.sidebar');
        hambuger.classList.toggle("open-sidebar");
        console.log(sidebar.classList.toggle("sidebar-open"));
    }

    return (
        <div className="hamburger-menu" onClick={openSidebar}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
        </div>
    )
}

export default Hamburger;