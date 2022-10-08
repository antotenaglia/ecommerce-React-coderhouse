import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import moment from "moment/moment";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Login = ({name, phone, email, emailchecked}) => {
    
    const {cart} = useContext(CartContext);
    
    let precioTotal = cart.reduce((precioTotalCart, product) => precioTotalCart + (product.precio * product.quantity), 0);

    const [order, setOrder] = useState({
        buyer: {
            name: '', 
            phone: '',
            email: '',
            emailchecked: '',
        },
        items: cart, 
        total: precioTotal,
        date: moment().format(),
    });

    const [inputName, setInputName] = useState('');
    const [inputPhone, setInputPhone] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputEmailChecked, setInputEmailChecked] = useState('');
    let disabledCondition = true;

    const handleInputChange = (event, input) => {
        if(input === "name") {
            setInputName(event.target.value)
        } else if (input === "email") {
            setInputEmail(event.target.value)
        } else if (input === "emailchecked") {
            setInputEmailChecked(event.target.value)
        } else if (input === "phone") {
            setInputPhone(event.target.value)
        } 
        setOrder ({
            ...order, 
            buyer: {
                ...order.buyer,
                [event.target.name]: event.target.value,
            },
        });
    };

    const createOrder = () => {
        const db = getFirestore();
        const query = collection(db, 'orders');
        if (order.buyer.email === order.buyer.emailchecked) {
            addDoc(query, order).then (({id}) => {
                Swal.fire(
                    '¡Compra realizada!',
                    `Enseguida nos pondremos en contacto contigo. Corserve este código de seguimiento: ${id}`,
                    'success'
                  );
            });
        } else {
            Swal.fire(
                'Datos erróneos',
                'Por favor, ingrese el correo electrónico correctamente',
                'error'
              );
        };
    };

    return (
        <Link to='/logIn'> 
            <div className="Login-section">
                <div> <p className="Login-hola">HOLA!</p> Para finalizar con la compra, completa los siguientes datos: </div>
                <div>
                    <input 
                        type='text' 
                        name='name' 
                        value= {name} 
                        onChange= {(event) => handleInputChange(event, 'name')} 
                        className='Login-input' 
                        placeholder="Nombre y Apellido"
                    />
                </div>
                <div>
                    <input 
                        type='text' 
                        name='email' 
                        value= {email} 
                        onChange= {(event) => handleInputChange(event, 'email')} 
                        className='Login-input' 
                        placeholder="Correo electrónico"
                    />
                </div>
                <div>
                    <input 
                        type='text' 
                        name='emailchecked' 
                        value= {emailchecked} 
                        onChange= {(event) => handleInputChange(event, 'emailchecked')} 
                        className='Login-input' 
                        placeholder="Ingrese correo nuevamente"
                    />
                </div>
                <div>
                    <input 
                        type='text' 
                        name='phone' 
                        value= {phone} 
                        onChange= {(event) => handleInputChange(event, 'phone')} 
                        className='Login-input' 
                        placeholder="Teléfono"
                    />
                </div>
                <div>
                    <button 
                        type="button" 
                        className='Login-buttonEnviar'
                        onClick= {createOrder}
                        disabled= {(inputName === '') || (inputPhone === '') || (inputEmail === '') || (inputEmailChecked === '')}
                    >
                        Enviar
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default Login;