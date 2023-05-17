import React from 'react';
import Header from './components/header';
import Footer from './components/footer' ;
import Main from './components/main' ;
import './style/App.css';
import './style/App_responsive.css';


function App() {
  return (
    <div className="App">
      
        <Header />
        <Main />
        <Footer />
      
    </div>
  );
}

export default App;
