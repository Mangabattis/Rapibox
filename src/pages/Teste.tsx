// SessaoLogada.tsx
import React, { useState } from 'react';
import Sidebar from '../components/Session/SidebarSession.tsx';
import Dashboard from '../components/Session/Dashboard';
import Produtos from '../components/Session/Produtos.tsx';
import Cadastrar from '../components/Session/Dashboard';
import Entregas from '../components/Session/Dashboard';

interface SessaoLogadaProps {}

const SessaoLogada: React.FC<SessaoLogadaProps> = () => {
    const [activeComponent, setActiveComponent] = useState<string>('Dashboard');

    const renderContent = () => {
        switch (activeComponent) {
            case 'Dashboard':
                return <Dashboard />;
            case 'Produtos':
                return <Produtos />;
            case 'Cadastrar':
                return <Cadastrar />;
            case 'Entregas':
                return <Entregas />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="flex">
            <Sidebar setActiveComponent={setActiveComponent} />
            <div className="flex-grow p-4">
                {renderContent()}
            </div>
        </div>
    );
};

export default SessaoLogada;
