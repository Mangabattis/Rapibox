// pages/DadosPessoais.tsx
import React from 'react';
import SidebarSession from '../../Session/SidebarSession'; // Importando o Sidebar
import InfoPerfil from '../../Session/InfoPerfil';

// Importando uma foto de Perfil Genérica
import ProfilePerfilMock from '../../../assets/ProfilePerfilMock.png';

const DadosPessoais: React.FC = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <SidebarSession /> {/* Removido o setActiveComponent */}

            <div className="flex-1 p-4"> {/* Área do conteúdo principal */}
                <h1 className="text-2xl font-semibold text-black text-center">Dados Pessoais</h1>

                <InfoPerfil 
                    name={'Eduardo'} 
                    cargo={'admin'} 
                    profileImage={ProfilePerfilMock} 
                    onNotificationClick={() => {
                        console.log('Notification clicked');
                    }} 
                /> 

                {/* Conteúdo adicional para editar dados pessoais */}
                <div className="mt-4">
                    {/* Adicione aqui os campos para edição dos dados pessoais */}
                </div>
            </div>
        </div>
    );
};

export default DadosPessoais;
