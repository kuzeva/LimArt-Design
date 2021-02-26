import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router';
import './App.css';
import Navbar from './components/sections/Navbar'; 
import HomePage from './components/HomePage';
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/sections/Footer";

class App extends Component {
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
