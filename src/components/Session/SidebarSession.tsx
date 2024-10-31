// Sidebar.jsx
import React from 'react';
import logo from '../../assets/Logo.png';

function Sidebar({ setActiveComponent }) {
    return (
        <div className="w-64 h-screen bg-orange-500 text-white flex flex-col">
            
            <div className="flex justify-center mt-12">
            <img src={logo} alt="Logo" className="h-20 mb-8 w-40" />
            </div>
            <nav className="flex flex-col gap-4 px-4 mt-8">
                <button onClick={() => setActiveComponent('Dashboard')} className="text-left">Dashboard</button>
                <button onClick={() => setActiveComponent('Produtos')} className="text-left">Produtos</button>
                <button onClick={() => setActiveComponent('Cadastrar')} className="text-left">Cadastrar</button>
                <button onClick={() => setActiveComponent('Entregas')} className="text-left">Entregas</button>
            </nav>
            <div className="mt-auto mb-9 px-4 py-6">
                <button className="w-full py-2 bg-white text-orange-500 font-semibold rounded">Sign Out</button>
            </div>
        </div>
    );
}

export default Sidebar;
