import axios from 'axios';
export const createWeek = async (id,menuUser,cond) => {
    //Cambio de tabla
    const URIWEEK = "http://localhost:8000/week/";//Uri para acceder a las funciones de la tablaWeek
    const idFoodMenu = [];
    
    var menuUserIds;
    if(cond  === true){//Cuando se accede de forma normal
        menuUserIds = menuUser.map(item => item.id_plato); // Array de todos los IDs disponibles
        await axios.delete(URIWEEK + id);
    }
    else{//se ejecuta cuando nos registramos
        menuUserIds = menuUser.map(item => item.id); 
    }
    const selectedIds = {
        l: new Set(),
        m: new Set(),
        x: new Set(),
        j: new Set(),
        v: new Set(),
        s: new Set(),
        d: new Set()
    };

    const getRandomId = (day) => {
        let randomIndex, randomId;
        do {
            randomIndex = Math.floor(Math.random() * menuUserIds.length);
            randomId = menuUserIds[randomIndex];
            console.log(randomId);
        } while (randomId === 0 || selectedIds[day].has(randomId)); // Verifica si ya ha sido seleccionado para el mismo día
        selectedIds[day].add(randomId); // Añade el ID seleccionado al conjunto del día
        return randomId;
    };

    // Llenar la semana de menú con IDs aleatorios
    idFoodMenu.push(getRandomId('l')); // l1
    idFoodMenu.push(getRandomId('l')); // l2
    idFoodMenu.push(getRandomId('m')); // m1
    idFoodMenu.push(getRandomId('m')); // m2
    idFoodMenu.push(getRandomId('x')); // x1
    idFoodMenu.push(getRandomId('x')); // x2
    idFoodMenu.push(getRandomId('j')); // j1
    idFoodMenu.push(getRandomId('j')); // j2
    idFoodMenu.push(getRandomId('v')); // v1
    idFoodMenu.push(getRandomId('v')); // v2
    idFoodMenu.push(getRandomId('s')); // s1
    idFoodMenu.push(getRandomId('s')); // s2
    idFoodMenu.push(getRandomId('d')); // d1
    idFoodMenu.push(getRandomId('d')); // d2

    // Realizar la solicitud POST con la semana de menú creada
    await axios.post(URIWEEK, {
        l1: idFoodMenu[0],
        l2: idFoodMenu[1],
        m1: idFoodMenu[2],
        m2: idFoodMenu[3],
        x1: idFoodMenu[4],
        x2: idFoodMenu[5],
        j1: idFoodMenu[6],
        j2: idFoodMenu[7],
        v1: idFoodMenu[8],
        v2: idFoodMenu[9],
        s1: idFoodMenu[10],
        s2: idFoodMenu[11],
        d1: idFoodMenu[12],
        d2: idFoodMenu[13],
        id_usuario: id
    });
    window.location.reload();
};