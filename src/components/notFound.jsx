import { Link } from "react-router-dom";

export default function NotFound () {

    return (<div className="bg-white h-[100vh] flex flex-col justify-center items-center">

        <p className=" text-3xl text-gray-800">404 bad request</p>
        <p className="text-xl text-gray-800">Retourner à la page d'<Link className=" underline" to={'/'}>acceuil</Link></p>
    </div>)
}