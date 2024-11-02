// SidebarSession.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo.png';

const SidebarSession: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="w-64 min-h-screen bg-orange-500 text-white flex flex-col overflow-y-auto">
            <div className="flex justify-center mt-12">
                <img src={logo} alt="Logo" className="h-20 mb-8 w-40" />
            </div>
            <nav className="flex flex-col gap-4 px-4 mt-8">
                <button onClick={() => navigate('/SessaoLogada')} className="text-left">Dashboard</button>
                <button onClick={() => navigate('/SessaoLogada/produtos')} className="text-left">Produtos</button>
                <button onClick={() => navigate('/SessaoLogada/cadastrar')} className="text-left">Cadastrar</button>
                <button onClick={() => navigate('/SessaoLogada/entregas')} className="text-left">Entregas</button>
                <button onClick={() => navigate('/dados-pessoais')} className="text-left">Dados Pessoais</button>
            </nav>
            <div className="mt-auto mb-9 px-4 py-6">
                <button className="w-full py-2 bg-white text-orange-500 font-semibold rounded" onClick={() => navigate('/')}>Sign Out</button>
            </div>
        </div>
    );
};

export default SidebarSession;
