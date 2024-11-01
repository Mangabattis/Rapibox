// App.tsx
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
import Teste from './pages/Teste.tsx'; // Problema
import Dashboard from './components/Session/Dashboard.tsx'; // Componente do painel
import DadosPessoais from './components/Session/Pages/DadosPessoais.tsx'; // Página de dados pessoais

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@400;600&display=swap"
        rel="stylesheet"
      />
      
      <Routes>
        <Route path="/" element={
          <>
            <ResponsiveNavbar />    
            <HomeBanner/>
            <UtilitiesBanner/>
            <Divider/>
            <InfoSection/>
            <UnidadesMapa/>
            <Faq/>
            <Footer/>
          </>
        } />
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/teste" element={<Teste />} /> {/* Problema */}
        
        {/* Adicione as rotas do dashboard */}
        <Route path="/dashboard/*" element={<Dashboard />} /> 
        <Route path="/dados-pessoais" element={<DadosPessoais />} /> {/* Página de dados pessoais */}
      </Routes>
    </Router>
  );
}

export default App;
