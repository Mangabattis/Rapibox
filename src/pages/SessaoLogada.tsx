// SessaoLogada.tsx
import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Session/SidebarSession.tsx';
import InfoPerfil from '../components/Session/InfoPerfil.tsx';
import ProfilePerfilMock from '../assets/ProfilePerfilMock2.png';
import Dashboard from '../components/Session/Dashboard.tsx';

interface SessaoLogadaProps {}

const SessaoLogada: React.FC<SessaoLogadaProps> = () => {
    const [nomeUsuario, setNomeUsuario] = useState<string | null>(null);

    useEffect(() => {
        const nome = localStorage.getItem('nomeUsuario');
        setNomeUsuario(nome);
    }, []);

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex flex-col items-center justify-center w-full p-6 bg-white">
                <InfoPerfil
                    name={nomeUsuario || 'Usuário'}
                    cargo="admin"
                    profileImage={ProfilePerfilMock}
                    onNotificationClick={() => {}}
                />
                <div className="w-full flex justify-center">
                    <Dashboard /> {/* Componente de Resumo de Vendas */}
                </div>
            </div>
        </div>
    );
};

export default SessaoLogada;
