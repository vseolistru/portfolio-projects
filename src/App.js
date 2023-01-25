import './App.css';
import Footer from "./components/Footer";
import {Helmet} from "react-helmet-async";
import {BrowserRouter} from 'react-router-dom'
import Paged from "./components/Paged";
import React from "react";
import Navigation from "./components/Navigation/Navigation";
import {useDimension} from "./components/hook/WindowDimension";
import MobileNavigation from "./components/Navigation/MobileNavigation";


function App() {

    const dimension = useDimension()
     return (
          <div className="App">
              <Helmet><title>Personal Portfolio</title></Helmet>
              <BrowserRouter>
                  { dimension < 702 ? <MobileNavigation/> :<Navigation/>}

                 <header className="portfolio__header"></header>
                 <Paged/>
                 <Footer/>
              </BrowserRouter>
          </div>
     );
}

export default App;
