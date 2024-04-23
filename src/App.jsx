import './App.css';
import { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SharedNav from './components/navBar/Oulet';
import { Footer } from './components/footer';
const Acceuil = lazy(() => import ('./components/acceuil'));
const Apropos = lazy(() => import ('./components/aPropos'));
const Portfolio = lazy(() => import ('./components/Portfolio/portFolio'));
const Contacts = lazy (() => import ('./components/contact'));
const Publication = lazy (() => import ('./components/publications/publications'));
const Services = lazy (() => import ('./components/services/services'));

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
import Consultance from './components/services/consultance/consultance';
import GalleryArt from './components/Portfolio/gallerie_Art';
import Logofolio from './components/Portfolio/logofolio';
import ImageGraphiqueDesign from './components/Portfolio/graphicDesign';
import MotionDesignPortofolio from './components/Portfolio/motionDesign';
import Mamour from './components/publications/mamour';
import Haut from './components/publications/haut';
import Defi from './components/publications/defi';
import Chute from './components/publications/chute';
import NotFound from './components/notFound';
import { Outlet } from 'react-router-dom';
import FallBack from './components/fallBack';


function App() {

 
  
  return ( 

    <Router>
      
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/' element = {<SharedNav/>}>

            <Route index element={<Suspense fallback={<FallBack/>}> <Acceuil/> </Suspense>} />
            <Route path='aPropos' element= {<Suspense fallback={<FallBack/>}> <Apropos/> </Suspense>}/>
            <Route path='contacts' element= {<Suspense fallback={<FallBack/>}> <Contacts/> </Suspense>}/>
            
            <Route path='portfolio' element={<><Outlet/></>}>
              <Route index element={<Suspense fallback={<FallBack/>}> <Portfolio/> </Suspense>}/>
              <Route path='galleryArt' element={<GalleryArt/>}/>
              <Route path='logofolio' element={<Logofolio/>}/>
              <Route path='graphicDesign' element={<ImageGraphiqueDesign/>}/>
              <Route path='motionDesign' element={<MotionDesignPortofolio/>}/>
            </Route>

            <Route path='publication' element={<><Outlet/></>}>
              <Route index element={<Suspense fallback={<FallBack/>}> <Publication/> </Suspense>}/>
              <Route path='mamour' element={<Mamour/>}/>
              <Route path='haut' element={<Haut/>}/>
              <Route path='defi' element={<Defi/>}/>
              <Route path='chute' element={<Chute/>}/>
            </Route>

            <Route path='services' element={<> <Outlet/></>}>
              <Route index element={<Suspense fallback={<FallBack/>}> <Services/> </Suspense>}/>

              <Route path='idVisuelle' element={<> <Outlet/> </>}>
                <Route index element={<IdentiteVisuel/>}/>
                <Route path='logotype' element={<Logotype/>}/>
                <Route path='charteGraphique' element={<CharteGraphique/>}/>
                <Route path='supportPrint' element={<SupportPrint/>}/>
              </Route>

              <Route path='motionDesign' element={<MotionDesign/>}/>

              <Route path='graphiqueDesign' element = {<> <Outlet/></>}> 
                <Route index element = {<GraphiqueDesign/>} />
                <Route path='campagnDeComm' element = {<CampagneDeComm/>} />
                <Route path='event' element = {<Event/>} />
                <Route path='presentation' element = {<Presentation/>} />
                <Route path='miseEnPage' element = {<MiseEnPage/>} />
                <Route path='webDesign' element = {<WebDesign/>} />
              </Route>
              
              <Route path='illustration' element={<Illustation/>}/>

              <Route path='consultance' element={<Consultance/>} />

            </Route>
            
        </Route>
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App
