import React from "react";
// import { Switch, Route } from "react-router-dom";
import "foundation-sites/dist/css/foundation.min.css";
// import {Switch, Route} from 'react-router-dom'
import "./assets/css/main.min.css";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

function App() {
 
    return (
        <React.Fragment>
            {/* <Header /> */}
            <MainContent />
            <Footer />
        </React.Fragment>
    );
}

export default App;