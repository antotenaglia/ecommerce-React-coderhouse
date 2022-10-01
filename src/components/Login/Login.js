import { Link } from "react-router-dom";

const Login = ({name, phone, email, handleInputChange}) => {

    return (
        <Link to='/logIn'> 
            <div className="Login-section">
                <div> <p className="Login-hola">HOLA!</p> Para finalizar con la compra, completa los siguientes datos: </div>
                <div>
                    <input type='text' name='name' value= {name} onChange={handleInputChange} className='Login-input' placeholder="Nombre y Apellido"/>
                </div>
                <div>
                    <input type='text' name='email' value= {email} onChange={handleInputChange} className='Login-input' placeholder="Correo electrónico"/>
                </div>
                <div>
                    <input type='text' name='phone' value= {phone} onChange={handleInputChange} className='Login-input' placeholder="Teléfono"/>
                </div>
                <div>
                    <button type="button" className="Login-buttonEnviar">Enviar</button>
                </div>
            </div>
        </Link>
  );
};

export default Login;