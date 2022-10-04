import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Login = ({name, phone, email, handleInputChange}) => {

    function alert () {
        Swal.fire(
            '¡Compra realizada!',
            'Enseguida nos pondremos en contacto contigo. ¡Muchas gracias por su compra!',
            'success'
          )
    };

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
                    <button type="button" className="Login-buttonEnviar" onClick={() => alert()}>Enviar</button>
                </div>
            </div>
        </Link>
    );
};

export default Login;