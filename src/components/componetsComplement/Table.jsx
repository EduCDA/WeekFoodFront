import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { createWeek } from "./CreateWeek"
const Table = () => {
    var { user } = useContext(UserContext);
    var cond = true;
    const URI = "http://localhost:8000/week/convert/";
    const [weekFoods, setWeek] = useState({});
    useEffect(() => {
        getFoodsTable();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //procedimiento para mostrar todas las comidas
    const getFoodsTable = async () => {
        const res = await axios.get(URI + user.id);
        setWeek(res.data);
    }
    //Sacamos los datos para la función createWeek.
    const URITABLEMENU = `http://localhost:8000/userMenu/${user.id}`;//Para obtener los ids de los platos de la tabla menu
    const [menuUser, setMenuUser] = useState([]);
    useEffect(() => {
        getFoods();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //Procedimiento para mostrar todas las comidas.
    const getFoods = async () => {
        const res = await axios.get(URITABLEMENU);
        setMenuUser(res.data);
    }
    const id = user.id
    //Sacamos la fecha de la creación de la tabla.
    const URIWEEK = `http://localhost:8000/week/${id}`;
    const [weekUser, setWeekUser] = useState([]);
    useEffect(() => {
        getWeekUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //Procedimiento para mostrar todas las comidas.
    const getWeekUser = async () => {
        const res = await axios.get(URIWEEK);
        setWeekUser(res.data);
    }
    if (!weekUser || !weekUser.createdAt ) {
        console.log("Missing required data: weekUser");
    }
    else {
        //Obtenemos la hora actual y la de la tabla.
        const givenDate = new Date(weekUser.createdAt);
        const currentDate = new Date();
        const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
        const timeDifference = currentDate - givenDate;
        //Condición, si  el menú semanal lleva creado más de 7 días o en este caso si se pasa del tiempo (son 7 días).
        if (timeDifference > oneWeekInMilliseconds) {
            createWeek(id, menuUser, cond);
        }
    }

    return (
        <div>
            <div className='container-fuid'>
                <div id='rowTable' className='row'>
                    <div id='caseL' className='col'></div>
                    <div className='col'>
                        <h6> Lunes</h6>
                        <div id='caseTable'>
                            <Link to={`/plato/${weekFoods.l1?.id}`}>
                                <button className='buttonTable'>
                                    <p><b>Comida</b><br />
                                        {weekFoods.l1?.nombrePlato}
                                    </p>
                                </button>
                            </Link>
                            <Link to={`/plato/${weekFoods.l2?.id}`}>
                                <button className='buttonTable'>
                                    <p><b>Cena</b><br />
                                        {weekFoods.l2?.nombrePlato}
                                    </p>
                                </button>
                            </Link>
                        </div>

                    </div>
                    <div className='col'>
                        <h6>Martes</h6>
                        <div id='caseTable'>
                            <Link to={`/plato/${weekFoods.m1?.id}`}>
                                <button className='buttonTable'>
                                    <p><b>Comida</b><br />
                                        {weekFoods.m1?.nombrePlato}
                                    </p>
                                </button>
                            </Link>
                            <Link to={`/plato/${weekFoods.m2?.id}`}>
                                <button className='buttonTable'>
                                    <p><b>Cena</b><br />
                                        {weekFoods.m2?.nombrePlato}
                                    </p>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='col'>
                        <h6>Miércoles</h6>
                        <div id='caseTable'>
                            <Link to={`/plato/${weekFoods.x1?.id}`}>
                                <button className='buttonTable'>
                                    <p><b>Comida</b><br />
                                        {weekFoods.x1?.nombrePlato}
                                    </p>
                                </button>
                            </Link>
                            <Link to={`/plato/${weekFoods.x2?.id}`}>
                                <button className='buttonTable'>
                                    <p><b>Cena</b><br />
                                        {weekFoods.x2?.nombrePlato}
                                    </p>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='col'>
                        <h6>Jueves</h6>
                        <div id='caseTable'>
                            <Link to={`/plato/${weekFoods.j1?.id}`}>
                                <button className='buttonTable'>
                                    <p><b>Comida</b><br />
                                        {weekFoods.j1?.nombrePlato}
                                    </p>
                                </button>
                            </Link>
                            <Link to={`/plato/${weekFoods.j2?.id}`}>
                                <button className='buttonTable'>
                                    <p><b>Cena</b><br />
                                        {weekFoods.j2?.nombrePlato}
                                    </p>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='col'>
                        <h6>Viernes</h6>
                        <div id='caseTable'>
                            <Link to={`/plato/${weekFoods.v1?.id}`}>
                                <button className='buttonTable'>
                                    <p><b>Comida</b><br />
                                        {weekFoods.v1?.nombrePlato}
                                    </p>
                                </button>
                            </Link>
                            <Link to={`/plato/${weekFoods.v2?.id}`}>
                                <button className='buttonTable'>
                                    <p><b>Cena</b><br />
                                        {weekFoods.v2?.nombrePlato}
                                    </p>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='col'>
                        <h6>Sábado</h6>
                        <div id='caseTable'>
                            <Link to={`/plato/${weekFoods.s1?.id}`}>
                                <button className='buttonTable'>
                                    <p><b>Comida</b><br />
                                        {weekFoods.s1?.nombrePlato}
                                    </p>
                                </button>
                            </Link>
                            <Link to={`/plato/${weekFoods.s2?.id}`}>
                                <button className='buttonTable'>
                                    <p><b>Cena</b><br />
                                        {weekFoods.s2?.nombrePlato}
                                    </p>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='col'>
                        <h6>Domingo</h6>
                        <div id='caseTable'>
                            <Link to={`/plato/${weekFoods.d1?.id}`}>
                                <button className='buttonTable'>
                                    <p><b>Comida</b><br />
                                        {weekFoods.d1?.nombrePlato}
                                    </p>
                                </button>
                            </Link>
                            <Link to={`/plato/${weekFoods.d2?.id}`}>
                                <button className='buttonTable'>
                                    <p><b>Cena</b><br />
                                        {weekFoods.d2?.nombrePlato}
                                    </p>
                                </button>
                            </Link>
                        </div>
                        <button className='buttonChange' onClick={() => createWeek(user.id, menuUser, cond)}>Cambiar menu</button>
                    </div>
                    <div id='caseL' className='col'></div>
                </div>
            </div>
        </div>
    );
}
export default Table;