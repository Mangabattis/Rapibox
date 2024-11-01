// Dashboard.tsx
import React from 'react';
import  InfoPerfil  from '../Session/InfoPerfil.tsx';

//Importando uma foto de Perfil Generica
import ProfilePerfilMock from '../../assets/ProfilePerfilMock.png';

const Dashboard: React.FC = () => {
    return (
        <div>
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <InfoPerfil name={'Eduardo'} cargo={'admin'} profileImage={ProfilePerfilMock} onNotificationClick={function (): void {
                throw new Error('Function not implemented.');
            } }/> 
            {/* Conteúdo do dashboard aqui */}
        </div>
    );
};

export default Dashboard;
