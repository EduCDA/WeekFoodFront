import {Navigate,Outlet} from 'react-router-dom';

 const ProtectedRute = ({isAllowed,children,redirectTo="/"}) => {
  if(!isAllowed){
    return <Navigate to={redirectTo}/>
  }
  return children ? children : <Outlet/>
}
export default ProtectedRute
//Permite tener rutas protegidas.