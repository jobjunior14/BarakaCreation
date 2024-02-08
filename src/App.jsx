import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SharedNav from './components/navBar/Oulet';
import Acceuil from './components/acceuil';
import { Footer } from './components/footer';
import Apropos from './components/aPropos';
import Portfolio from './components/Portfolio/portFolio';
import Publication from './components/publications/publications';
import Services from './components/services/services';
import IdentiteVisuel from './components/services/identite_visuel/identiteVisuel';
import Logotype from './components/services/identite_visuel/LogoType';
import CharteGraphique from './components/services/identite_visuel/charteGraphique';
import { Outlet } from 'react-router-dom';
function App() {
  
  return ( 
    <Router>
      <Routes>
        <Route path='/' element = {<SharedNav/>}>
            <Route index element={<Acceuil/>} />
            <Route path='aPropos' element= {<Apropos/>}/>
            <Route path='portfolio' element={<Portfolio/>}/>
            <Route path='publication' element={<Publication/>}/>

            <Route path='services' element={<> <Outlet/></>}>
              <Route index element={<Services/>}/>

              <Route path='idVisuelle' element={<> <Outlet/> </>}>
                <Route index element={<IdentiteVisuel/>}/>
                <Route path='logotype' element={<Logotype/>}/>
                <Route path='charteGraphique' element={<CharteGraphique/>}/>
              </Route>
            </Route>
            
        </Route>
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App
