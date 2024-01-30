import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SharedNav from './components/navBar/Oulet';
import Acceuil from './components/acceuil';
import { Footer } from './components/footer';
function App() {
  
  return ( 
    <Router>
      <Routes>
        <Route path='/' element = {<SharedNav/>}>
            <Route index element={<Acceuil/>} />
        </Route>
      </Routes>
        <Footer/>
    </Router>

  );
}

export default App
