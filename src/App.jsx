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
import SupportPrint from './components/services/identite_visuel/supportPrint';
import MotionDesign from './components/services/identite_visuel/motionDesign';
import GraphiqueDesign from './components/services/graphique_design/graphiqueDesign';
import CampagneDeComm from './components/services/graphique_design/campagne_de_comm';
import Event from './components/services/graphique_design/event';
import Presentation from './components/services/graphique_design/presentation';
import MiseEnPage from './components/services/graphique_design/miseEnPage';
import WebDesign from './components/services/graphique_design/webDesign';
import Illustation from './components/services/illustation/illustation';
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
                <Route path='supportPrint' element={<SupportPrint/>}/>
                <Route path='motionDesign' element={<MotionDesign/>}/>
              </Route>

              <Route path='graphiqueDesign' element = {<> <Outlet/></>}> 
                <Route index element = {<GraphiqueDesign/>} />
                <Route path='campagnDeComm' element = {<CampagneDeComm/>} />
                <Route path='event' element = {<Event/>} />
                <Route path='presentation' element = {<Presentation/>} />
                <Route path='miseEnPage' element = {<MiseEnPage/>} />
                <Route path='webDesign' element = {<WebDesign/>} />
              </Route>
              
              <Route path='illustration' element={<Outlet/>}>

                <Route index element ={<Illustation/>}/>
              </Route>

            </Route>
            
        </Route>
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App
