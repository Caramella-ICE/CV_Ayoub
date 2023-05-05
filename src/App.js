import React from 'react';
import Header from './components/header';
import Footer from './components/footer' ;
import Main from './components/main' ;
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Main />
        <Footer />
      </header>
    </div>
  );
}

export default App;
