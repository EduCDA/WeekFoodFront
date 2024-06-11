import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext';
import NavUser from '../componetsComplement/NavUser';
import Footer from '../componetsComplement/Footer';
import axios from 'axios';
import md5 from 'md5';
const EditarUser = () => {

    const URI = "http://localhost:8000/users/";
    var { user } = useContext(UserContext);
    const id = user.id;
    const [form, setForm] = useState({
        firstName: user.nombre,
        lastName: user.apellidos,
        email: user.correo,
        password: user.password,
        passVal: user.password
    });
    const [errors, setErrors] = useState({});
    const validateTextName = (textName) => {
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        return regexName.test(textName);
    };
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

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

    console.log(form)
    //Función que envia los datos a la base de datos. 
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
        const passwordErrors = validatePassword(form.password);//MIRAR
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
            setErrors({});
            //Enviamos los datos a la base de datos.
            var newPassword;
            if (user.password !== form.password) {
                newPassword = md5(form.password);

            } else {
                newPassword = user.password;
            }
            await axios.put(URI + id, { nombre: form.firstName, apellidos: form.lastName, correo: form.email, contraseña: newPassword })
            alert('Se han modificado correctamente los datos');
            window.location.reload();

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
            <NavUser />

            <div id='registerContent' className="container-fluid">
                <h3 className='titleUser'>Edita tu usuario {user.nombre}</h3>
                <form className='formularioRegis' onSubmit={handleSubmit}>
                    <div>
                        <label className='labelRes' htmlFor="firstName">Nombre:</label><br />
                        <input
                            type="text"
                            id="caseInput"
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            placeholder={user.nombre}
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
                            placeholder={user.apellidos}
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
                            placeholder={user.correo}
                        />
                        {errors.email && <p className='errors'>{errors.email}</p>}
                    </div>
                    <div>
                        <label className='labelRes' htmlFor="password">Nueva Contraseña:</label><br />
                        <input
                            type="password"
                            id="caseInput"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
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
                        />
                        {errors.passVal && <p className='errors'>{errors.passVal}</p>}
                    </div>
                    <button id='buttonRegister' type="submit">Enviar</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}
export default EditarUser
