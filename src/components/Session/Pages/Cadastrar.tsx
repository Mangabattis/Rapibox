// Cadastrar.tsx
import React, { useState, useEffect} from 'react';
import Sidebar from '../../Session/SidebarSession';
import  InfoPerfil  from '../../Session/InfoPerfil';

import ProfilePerfilMock from '../../../assets/ProfilePerfilMock2.png';

interface SessaoLogadaProps {}

const Cadastrar: React.FC<SessaoLogadaProps> = () => {
    // const [activeComponent, setActiveComponent] = useState<string>('Dashboard');

    const [nomeUsuario, setNomeUsuario] = useState<string | null>(null); // Estado para armazenar o nome do usuário

    useEffect(() => {
        const nome = localStorage.getItem('nomeUsuario');
        setNomeUsuario(nome);
    }, []);



    return (
        <div className="flex">
            <Sidebar/>
            <h1 className='text-center  text-black'>Cadastrar</h1>
            <InfoPerfil name={nomeUsuario || 'Usuário'} cargo={'admin'} profileImage={ProfilePerfilMock} onNotificationClick={function (): void {
                throw new Error('Function not implemented.');
            } }/> 
        </div>
    );
};

export default Cadastrar;
