import React from 'react';
import './App.css';

import Header from "./Projects/Header";
import Footer from "./Projects/Footer";
import Navigation from "./Projects/Navigation";
import Main from "./Projects/Main";

function App() {
  console.log("this.props");
  return (
    <div>
      <Navigation />
    <Header />
    <Main />
    <Footer />
    </div>
  );
}
export default App;
