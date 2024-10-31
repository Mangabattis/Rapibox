import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { ResponsiveNavbar } from './components/ResponsiveNavbar';
import { HomeBanner } from './components/HomeBanner.tsx';
import { UtilitiesBanner } from './components/UtilidadesBanner.tsx';
import { Divider } from './components/Divider.tsx';
import { InfoSection } from './components/InfoSection.tsx';
import { UnidadesMapa } from './components/UnidadesMapa.tsx';
import { Faq } from './components/Faq.tsx';

import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import Footer from './components/Footer.tsx';
import Teste from './pages/Teste.tsx' //Problema

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@400;600&display=swap"
        rel="stylesheet"
      />
      
      <ResponsiveNavbar />    
      
      <Routes>
        <Route path="/" element={
          <>
       
          <HomeBanner/>
          <UtilitiesBanner/>
          <Divider/>
          <InfoSection/>
          <UnidadesMapa/>
          <Faq/>
          <Footer/>
            <div>
              <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.jsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
            <h1 className="text-2xl text-white font-bold text-center">Tailwind Test</h1>
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/teste" element={<Teste />} /> {/*Problema*/}
      </Routes>
    </Router>
  );
}

export default App;
