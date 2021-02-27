import React, { PureComponent } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/sections/Navbar'; 
import HomePage from './components/HomePage';
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import GalleryPage from "./components/GalleryPage";
import Footer from "./components/sections/Footer";

class App extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/gallery" component={GalleryPage}/>
            <Route path="/contact" component={ContactPage}/>
          </Switch>
          <Footer/>
        </Router>
      </div>
    );
  }
};

export default App;
