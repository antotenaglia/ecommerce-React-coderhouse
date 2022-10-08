import ImgCarrito from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    
    return (
        <div> 
            <nav className="NavBar-nav">
                <div className="NavBar-div">
                    <NavLink className="NavBar-marca" to="/">STICKERZONE</NavLink>
                </div>    
                <div>
                    <ul className="NavBar-ul">
                        <div className="NavBar-dropdown">
                            <li className="NavBar-li">
                                <NavLink to="/allCategories"
                                    className= {({isActive}) => isActive ? 'NavBar-linkActive' : 'NavBar-linkNoActive'} 
                                >
                                    Categorías
                                </NavLink>
                            </li>
                            <div className="NavBar-dropdownContent">
                                <NavLink to="/allCategories" 
                                    className= "NavBar-dropdownItem" 
                                >
                                    Todas las categorías
                                </NavLink>
                                <NavLink to="/category/bandas-musicales" 
                                    className= "NavBar-dropdownItem" 
                                >
                                    Bandas musicales
                                </NavLink>
                                <NavLink to="/category/series"
                                    className= "NavBar-dropdownItem"
                                >
                                    Series
                                </NavLink>
                            </div>
                        </div>
                    </ul>  
                </div>
                <div className="NavBar-carrito">
                    <ImgCarrito />
                </div>
            </nav>
        </div>
    );     
};

export default NavBar;
