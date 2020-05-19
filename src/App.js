import React from "react";
import "foundation-sites/dist/css/foundation.min.css";
import "./assets/css/main.min.css";
import './App.css';
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

function App() {
 
    return (
        <React.Fragment>
            <MainContent />
            <Footer />
        </React.Fragment>
    );
}

export default App;