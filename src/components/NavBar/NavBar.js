import ImgCarrito from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <div> 
            <nav className="NavBar-nav">
                <div className="NavBar-div">
                <a className="NavBar-marca" href="/">STICKERZONE</a>
                    <ul className="NavBar-ul">
                        <li className="NavBar-li"><a className="NavBar-a" href="/">Home</a></li>
                        <li className="NavBar-li"><a className="NavBar-a" href="/">Productos</a></li>
                        <li className="NavBar-li"><a className="NavBar-a" href="/">Contacto</a></li>
                    </ul>  
                </div>
                <div className="NavBar-carrito"><ImgCarrito /></div>
            </nav>
        </div>
    )     
}

export default NavBar
