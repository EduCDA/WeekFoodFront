import { createContext } from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext();
const userImport = JSON.parse(localStorage.getItem('user'));
const URI = "http://localhost:8000/users/";
export const UserProvider = ({ children }) => {
    const [user, setUsers] = useState(userImport);

    if (user != null) {
        var id = user.id;   
    }
    const getUsers = async () => {
        const res = await axios.get(URI + id);
        setUsers(res.data);
    }
    useEffect(() => {
        getUsers();
        localStorage.setItem("user",null);
        localStorage.setItem("user", JSON.stringify(user));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <UserContext.Provider value={{ user }}>
            {/* Utilizo el children que representa lo que esta dentro de mis llaves */}
            {children}
        </UserContext.Provider>
    );

}
