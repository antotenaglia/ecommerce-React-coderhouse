import ImgCarrito from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div> 
            <nav className="NavBar-nav">
                <div className="NavBar-div">
                <NavLink className="NavBar-marca" to="/">STICKERZONE</NavLink>
                    <ul className="NavBar-ul">
                        <li className="NavBar-li"><NavLink className= {({isActive}) => isActive ? 'NavBar-linkActive' : 'NavBar-linkNoActive'} to="/">Home</NavLink></li>
                            <div className="NavBar-dropdown">
                                <li className="NavBar-li"><NavLink className= {({isActive}) => isActive ? 'NavBar-linkActive' : 'NavBar-linkNoActive'} to="/">Categorías</NavLink></li>
                                <div className="NavBar-dropdownContent">
                                    <NavLink className= "NavBar-dropdownItem" to="/">Todas las categorías</NavLink>
                                    <NavLink className= "NavBar-dropdownItem" to="/category/bandas-musicales">Bandas musicales</NavLink>
                                    <NavLink className= "NavBar-dropdownItem" to="/category/series">Series</NavLink>
                                </div>
                            </div>
                    </ul>  
                </div>
                <div className="NavBar-carrito"><ImgCarrito /></div>
            </nav>
        </div>
    )     
}

export default NavBar
