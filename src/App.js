import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import 'Navbar.css';
import Navigation from "./components/Navbar";
import Cards from "./components/Cards";
import Home from "./components/home";
import Product from "./components/Products";
import OneProduct from "./components/OneproductCard";
// import BreadCrumbs from "./components/breadcrumbs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/footer';
import Grid from './components/grid'
import Instagram from './components/Instagram';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="All-pages">
          <Switch>
<<<<<<< HEAD
          <Route exact path='/home'>
          <Home />
          <Navigation Nav="Navigation" />
          <Cards />
          <Grid/>
          <Instagram/>
          
=======
            <Route exact path='/home'>
              <Home />
              <Navigation Nav="Navigation" />
              <Cards />
            </Route>
            <Route exact path='/products/:id'>
              <Navigation Nav="Navigation" />
              <Product />
>>>>>>> 0846800a825599f9a30c98dd0d255dacdfc9b2c3
            </Route>
            <Route exact path='/product/:id'>
              <Navigation Nav="Navigation" />
              <OneProduct />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
