import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import SharedNav from './components/navBar/Oulet';
import Acceuil from './components/acceuil';
function App() {

  const router = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element = {<SharedNav/>}>
        <Route index element={<Acceuil/>} />
    </Route>

  ));
  
  return ( 
    <div className='w-full'>
     <RouterProvider router={router}/>
    </div>

  );
}

export default App
