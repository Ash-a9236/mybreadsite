import Home from "./Home";
import Gallery from "./Gallery";
import Nav from "./Nav";
import Footer from "./Footer";


import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


const App = () => {
  return (
    <Router>
    <Nav />
      <Routes>
        <Route path="/Home" Component={Home}>
        </Route>
        <Route path="/Gallery" Component={Gallery}>
        </Route>
      </Routes>
    <Footer />
    </Router>
  );
}

export default App;
