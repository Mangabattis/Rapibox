// Dashboard.tsx
import React, { useEffect, useState } from 'react';
import  InfoPerfil  from './InfoPerfil.tsx';

//Importando uma foto de Perfil Generica
import ProfilePerfilMock from '../../assets/ProfilePerfilMock2.png';

const Dashboard: React.FC = () => {
    const [nomeUsuario, setNomeUsuario] = useState<string | null>(null); // Estado para armazenar o nome do usuário

    // useEffect para recuperar o nome do usuário do localStorage
    useEffect(() => {
       const nome = localStorage.getItem('nomeUsuario');
       setNomeUsuario(nome);
   }, []);
    return (
        <div>
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <InfoPerfil name={nomeUsuario || 'Usuário'} cargo={'admin'} profileImage={ProfilePerfilMock} onNotificationClick={function (): void {
                throw new Error('Function not implemented.');
            } }/> 
            {/* Conteúdo do dashboard aqui */}
        </div>
    );
};

export default Dashboard;
