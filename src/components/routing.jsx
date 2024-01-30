import { Outlet } from 'react-router-dom';
import { NavBar } from './navBar';


export function Shared ()
{
    return (
        <>
        <NavBar/>
        <Outlet/>
        </>
    )
}