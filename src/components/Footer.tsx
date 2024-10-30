import React from 'react';
import logo from '../assets/Logo.png'; // Ajuste o caminho se necessário

const Footer: React.FC = () => {
  return (
    <div className='bg-orange-500 text-white py-10 flex items-center'>

        <div className="cursor-pointer px-14 flex items-center">
            <img src={logo} alt="logo-rapibox" className="h-10 w-auto"/>
        </div>
        <div className="px-14 text-left text-2xl font-jost">
            <p>123 Brotas. #22B</p>
            <p>Rua Chile, Brotas 446350-565</p>
        </div>

        <div className='text-left text-1xl font-jost'>
            <p>Sobre</p>
            <p>Mercado</p>
            <p>Parceiros</p>
            <p>Contatos</p>
        </div>
        <div className='text-left text-1xl font-jost'>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
            <p>Instagram</p>
        </div>

    </div>

  );
};

export default Footer;
