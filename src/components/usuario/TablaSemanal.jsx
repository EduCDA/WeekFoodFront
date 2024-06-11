import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import Table from '../componetsComplement/Table';
import NavUser from '../componetsComplement/NavUser';
import Footer from '../componetsComplement/Footer';
const TablaSemanal = () => {
    var { user } = useContext(UserContext);
    return (
        <div>
            <NavUser element={user} />
            <div className='container-fuid'>
                <div id='rowTable' className='row'>
                    <h3 className='titleUser'>Menú semanal de {user.nombre}</h3>
                </div>
            </div>
            {/* Tabla semanal donde tenemos la funcionalidad y el diseño en este componente */}
            <Table/>
            <Footer />
        </div>
    )
}

export default TablaSemanal