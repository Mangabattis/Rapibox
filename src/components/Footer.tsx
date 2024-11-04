import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png'; // Ajuste o caminho se necessário

const Footer: React.FC = () => {
    const navigate = useNavigate();
  return (
    <div className='bg-orange-500 text-white py-20 flex items-center justify-center flex-col'>
        <div className='flex flex-row justify-between gap-x-20'>
            
                    <div className="cursor-pointer flex justify-start">
                        <img src={logo} alt="logo-rapibox" className="h-10 w-auto"/>
                    </div>
                        <div className="px-14 text-left text-2xl font-jost">
                            <h6>123 Brotas. #22B</h6>
                            <h6>Rua Chile, Brotas 446350-565</h6>
                        </div>
                
                
                        <div className='text-left text-1xl font-jost'>
                            <ul className='text-white font-thin text-opacity-90'>
                                <li>Sobre</li>
                                <li>Mercado</li>
                                <li>Parceiros</li>
                                <li>Contato</li>
                            </ul>
                        </div>
                        <div className='text-left text-1xl font-jost flex flex-row gap-x-20'>
                            <ul className=''>
                                <li><a href="https://facebook.com" target='_blank'>Facebook</a></li>
                                <li><a href="https://google.com" target='_blank'>Twitter</a></li>
                                <li><a href="https://linkedin.com" target='_blank'>LinkedIn</a></li>
                                <li><a href="https://instagram.com" target='_blank'>Instagram</a></li>
                            </ul>
                
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-up-circle-fill cursor-pointer" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
                                </svg>
                        </div>
            
        </div>

         <div className='flex flex-row pt-20 gap-x-40'>
                 <div className='space-y-2 text-left'>
                        <p className='cursor-pointer text-white font-light text-opacity-85 relative group inline-block'>
                                (71) 3356-84321
                                <span className='absolute left-0 -bottom-1 w-full h-px bg-white opacity-70 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out'></span>
                            </p>
                        <p className='cursor-pointer text-white font-light text-opacity-85 relative group'>
                            contatoRapibox@email.com
                            <span className='absolute left-0 -bottom-1 w-full h-px bg-white opacity-70 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out'></span>
                        </p>
                 </div>

                <p className='text-xs text-white font-light text-opacity-75 flex items-end pb-1'>© 2020 Rapibox media. All rights reserved.</p>
         </div>
    </div>

  ); 
};

export default Footer;
