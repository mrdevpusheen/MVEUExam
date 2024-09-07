import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import Main from './pages/Main'

function App() {

  const[page, setPage] = useState('Main')

  const pages = {
    Main: <Main/>
  }

  return (
    <div className="App">
      <Header setPage={ setPage }/>
      {pages[page]}
      <Footer/>
    </div>
  );
}

export default App;
