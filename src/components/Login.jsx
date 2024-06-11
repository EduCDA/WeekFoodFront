import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbard from './componetsComplement/Navbard';
import Footer from './componetsComplement/Footer';
import md5 from 'md5';

const URI = "http://localhost:8000/users/";
function Login() {

    const navigate = useNavigate();
    //Estos son los campos de mi inpunt donde tengo mis valores.
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, [])
    const getUsers = async () => {
        const res = await axios.get(URI);
        setUsers(res.data);
    }
    //Donde almacenamos y mostramos nuestros errores.
    const [errors, setErrors] = useState({});
    //Validaciones,email.
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    //Validaciones,password.
    const validatePassword = (password) => {
        let errors = [];
        if (password.length < 8) {
            errors.push('La contraseña debe tener al menos 8 caracteres.');
        }
        if (!/[A-Z]/.test(password)) {
            errors.push('Te falta una letra mayúscula.');
        }
        if (!/[a-z]/.test(password)) {
            errors.push('Te falta una letra minúscula.');
        }
        if (!/[0-9]/.test(password)) {
            errors.push("Te falta un número.");
        }
        return errors;
    };
    //Se activa al dejar el foco del raton.
    const handleBlur = (e) => {
        const { name, value } = e.target;
        let validationErrors = { ...errors };
        if (name === 'email') {
            if (!value) {
                validationErrors.email = 'El correo electrónico es obligatorio.';
            } else if (!validateEmail(value)) {
                validationErrors.email = 'El correo electrónico no es válido.';
            } else {
                delete validationErrors.email;
            }
        }

        if (name === 'password') {
            const passwordErrors = validatePassword(value);
            if (passwordErrors.length > 0) {
                validationErrors.password = passwordErrors.join(' ');
            } else {
                delete validationErrors.password;
            }
        }

        setErrors(validationErrors);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Final validation before submit
        let validationErrors = {};

        if (!form.email) {
            validationErrors.email = 'El correo electrónico es obligatorio.';
        }
        else if (!validateEmail(form.email)) {
            validationErrors.email = 'El correo electrónico no es válido.';
        }
        const passwordErrors = validatePassword(form.password);
        if (passwordErrors.length > 0) {
            validationErrors.password = passwordErrors.join(' ');
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        }
        else {
            setErrors({});
            const hash = md5(form.password);
            //Este filter lo que hace es buscar los objetos que cumplen dicha condición.
            var userLogin = users.filter(users => users.correo === form.email && users.contraseña === hash);
            try {
                if (!userLogin[0]) {
                    userLogin = "";
                    validationErrors.password = 'Los campos son incorrectos';
                    setErrors(validationErrors);
                }
                else {
                    //Insertamos en nuestro local storage a nuestro usuario.
                    localStorage.setItem('user', JSON.stringify(userLogin[0]));
                    alert('Usuario logeado correctamente.');
                    //Hace que se refresque la pagina
                    navigate('/');
                    window.location.reload();
                }
            } catch (error) {
                userLogin = "";
                console.log("Ha habido algun error");
            }
        }
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    return (
        <div>
            <Navbard />
            <div id='loginContent' className="container-fluid">
                <h3 className='titleRes'>Login</h3><br />
                <form className='formularioRegis' onSubmit={handleSubmit}>
                    <div>
                        <label className='labelRes' htmlFor="email">Correo Electrónico:</label><br />
                        <input
                            type="email"
                            id="caseInput"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && <p className='errors'>{errors.email}</p>}
                    </div>
                    <div>
                        <label className='labelRes' htmlFor="password">Contraseña:</label><br />
                        <input
                            type="password"
                            id="caseInput"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.password && <p className='errors'>{errors.password}</p>}
                    </div>
                    <button id='buttonRegister' type="submit">Enviar</button>
                </form>
                <a className='enlaceLogin' href="/registro"><p>Si no estás registrado, pulsa en el enlace.</p></a>
            </div>
            <Footer />

        </div>
    );
}

export default Login