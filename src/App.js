import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';



const App = (props) => {

  return (
      <div className="App">
          <Header nav_services={props.state.nav_services}/>        
          <Main nav_services={props.state.nav_services} nav_product={props.state.nav_product}/>          
          <Footer />
      </div>
  );
}

export default App;
