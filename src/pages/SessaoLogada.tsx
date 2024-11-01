// SessaoLogada.tsx
import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Session/SidebarSession.tsx';
import InfoPerfil from '../components/Session/InfoPerfil.tsx';
import ProfilePerfilMock from '../assets/ProfilePerfilMock2.png';

interface SessaoLogadaProps {}

const SessaoLogada: React.FC<SessaoLogadaProps> = () => {
    const [nomeUsuario, setNomeUsuario] = useState<string | null>(null); // Estado para armazenar o nome do usuário

    useEffect(() => {
        const nome = localStorage.getItem('nomeUsuario');
        setNomeUsuario(nome);
    }, []);


    return (
        <div className="flex">
            <Sidebar/>

            <InfoPerfil name={nomeUsuario || 'Usuário'} cargo={'admin'} profileImage={ProfilePerfilMock} onNotificationClick={function (): void {
                throw new Error('Function not implemented.');
            } }/> 

        </div>
    );
};

export default SessaoLogada;
