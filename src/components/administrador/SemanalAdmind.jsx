import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import NavAdmin from '../componetsComplement/NavAdmin';
import Footer from '../componetsComplement/Footer';
const SemanalAdmind = () => {

    const URI = "http://localhost:8000/week/";
    const [week, setWeek] = useState([]);
    useEffect(() => {
        getWeek();
    }, [])
    const getWeek = async () => {
        const res = await axios.get(URI);
        setWeek(res.data);
    }
    return (
        <div>
            <NavAdmin/>
            <div id='containerWeek' className='container-fluid'>
                {/* Tabla Semanal */}
                <div className='row'>
                    <div id='cols' className='col-1'></div>
                    <div className='col'>
                        <h3 className='titleUser'>Tablas semanales</h3>
                    </div>
                    <div id='cols' className='col-1'></div>
                </div>
                <div className='row'>
                    <div id='cols' className='col-1'></div>
                    <div className='col'>
                        <h4 className='userTable'>NºTablas: {week.length}</h4>
                    </div>
                    <div id='cols' className='col-1'></div>
                </div>
                <div className='row'>
                    
                    <div className='col'>
                        <div className='adminTableContainer'>
                            <table className='tablaAdmind'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Lunes Comida</th>
                                        <th>Lunes Cena</th>
                                        <th>Martes Comida</th>
                                        <th>Martes Cena</th>
                                        <th>Miercoles Comida</th>
                                        <th>Miercoles Cena</th>
                                        <th>Jueves Comida</th>
                                        <th>Jueves Cena</th>
                                        <th>Viernes Comida</th>
                                        <th>Viernes Cena</th>
                                        <th>Sabado Comida</th>
                                        <th>Sabado Cena</th>
                                        <th>Domingo Comida</th>
                                        <th>Domingo Cena</th>
                                        <th>Usuario</th>
                                        <th>Fecha de creación</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {week.map(week => (
                                        <tr key={week.id}>
                                            <td>{week.id}</td>
                                            <td>{week.l1}</td>
                                            <td>{week.l2}</td>
                                            <td>{week.m1}</td>
                                            <td>{week.m2}</td>
                                            <td>{week.x1}</td>
                                            <td>{week.x2}</td>
                                            <td>{week.j1}</td>
                                            <td>{week.j2}</td>
                                            <td>{week.v1}</td>
                                            <td>{week.v2}</td>
                                            <td>{week.s1}</td>
                                            <td>{week.s2}</td>
                                            <td>{week.d1}</td>
                                            <td>{week.d2}</td>
                                            <td>{week.id_usuario}</td>
                                            <td>{week.createdAt}</td>
                                        
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            <Footer />
            
        </div>
    )
}

export default SemanalAdmind