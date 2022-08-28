const NavBar = () => {
    return (
        <div> 
            <nav className="NavBar-nav">
                <a className="NavBar-marca NavBar-a" href="/">STICKERZONE</a>
                <ul className="NavBar-ul">
                    <li className="NavBar-li"><a className="NavBar-a" href="/">Home</a></li>
                    <li className="NavBar-li"><a className="NavBar-a" href="/">Productos</a></li>
                    <li className="NavBar-li"><a className="NavBar-a" href="/">Contacto</a></li>
                </ul>
            </nav>
        </div>
    )     
}

export default NavBar
