import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbard from './componetsComplement/Navbard';
import Footer from './componetsComplement/Footer';
import { createWeek } from './componetsComplement/CreateWeek';
import md5 from 'md5';
const URI = "http://localhost:8000/users/";
function Register() {
    var cond = false;
    const URIFood = 'http://localhost:8000/foods/';
    const URIMenu = `http://localhost:8000/userMenu/`;
    const [users, setUsers] = useState([]);
    const [food, setFood] = useState([]);
    useEffect(() => {
        getFoods();
    }, [])
    const getFoods = async () => {
        const res = await axios.get(URIFood);
        setFood(res.data);
    }
    useEffect(() => {
        getUsers();
    }, [])
    const getUsers = async () => {
        const res = await axios.get(URI);
        setUsers(res.data);
    }
    const navigate = useNavigate();
    //Estos son los campos de mi inpunt donde tengo mis valores.
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passVal: ''
    });

    const [errors, setErrors] = useState({});
    //Validaciones,texto.
    const validateTextName = (textName) => {
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        return regexName.test(textName);
    };
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

        if (name === 'firstName') {
            if (!value) {
                validationErrors.firstName = 'El nombre es obligatorio.';
            } else {
                delete validationErrors.firstName;
            }
        }
        if (name === 'lastName') {
            if (!value) {
                validationErrors.lastName = 'El apellido es obligatorio.';
            } else if (!validateTextName(value)) {
                validationErrors.lastName = 'El campo apellido sólo acepta letras y espacios en blanco';
            } else {
                delete validationErrors.lastName;
            }
        }
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
    //Al pulsar el boton, se ejecuta la funcionalidad de enviar los datos y las validaciones.
    const handleSubmit = async (e) => {
        e.preventDefault();

        let validationErrors = {};

        if (!form.firstName) {
            validationErrors.firstName = 'El nombre es obligatorio.';
        }
        if (!form.lastName) {
            validationErrors.lastName = 'El apellido es obligatorio.';
        }
        else if (!validateTextName(form.lastName)) {
            validationErrors.lastName = 'El campo apellido sólo acepta letras y espacios en blanco';
        }
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
        if (form.passVal !== form.password) {
            validationErrors.passVal = 'Las contraseñas no coinciden';
        }
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        }
        else {
            //Creamos al usuario.
            setErrors({});
            const hashPassword = md5(form.password);
            await axios.post(URI, { nombre: form.firstName, apellidos: form.lastName, correo: form.email, contraseña: hashPassword })
            var maxId = users.reduce((max, users) => (users.id > max ? users.id : max), 0);
            maxId++;
            var i = 0;
            //Insertamos  el menú del usuario.
            while (i < food.length) {
                await axios.post(URIMenu, { id_usuario: maxId, id_plato: food[i].id })
                ++i;
            }
            //Creamos la tabla semanal del usuario.
            createWeek(maxId, food, cond);
            navigate('/');
        }
    };
    //Procedemos a insertar la información en tiempo real a nuestra aplicación React.
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    return (
        <div>
            <Navbard />
            <div id='registerContent' className="container-fluid">
                <h3 className='titleRes'>Registrate</h3><br />
                <form className='formularioRegis' onSubmit={handleSubmit}>
                    <div>
                        <label className='labelRes' htmlFor="firstName">Nombre:</label><br />
                        <input
                            type="text"
                            id="caseInput"
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.firstName && <p className='errors'>{errors.firstName}</p>}
                    </div>
                    <div>
                        <label className='labelRes' htmlFor="lastName">Apellido:</label><br />
                        <input
                            type="text"
                            id="caseInput"
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.lastName && <p className='errors'>{errors.lastName}</p>}
                    </div>
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
                    <div>
                        <label className='labelRes' htmlFor="password">Repite la contraseña:</label><br />
                        <input
                            type="password"
                            id="caseInput"
                            name="passVal"
                            value={form.passVal}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.passVal && <p className='errors'>{errors.passVal}</p>}
                    </div>
                    <button id='buttonRegister' type="submit">Enviar</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Register