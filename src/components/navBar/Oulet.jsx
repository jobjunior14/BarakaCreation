import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
export default function SharedNav() {

    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    );
}