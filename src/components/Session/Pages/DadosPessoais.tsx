// pages/DadosPessoais.tsx
import React, { useEffect, useState } from 'react';
import SidebarSession from '../../Session/SidebarSession';
import ProfilePerfilMock from '../../../assets/ProfilePerfilMock2.png';

const DadosPessoais: React.FC = () => {
    //Variavies
    const [nomeUsuario, setNomeUsuario] = useState<string | null>(null);
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nomeEmpresa, setNomeEmpresa] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [cep, setCep] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    //Variavies

    //Não Sei se Vamo suar mas o gpt gerou
    // useEffect para recuperar o nome do usuário do localStorage
    useEffect(() => {
        const nome = localStorage.getItem('nomeUsuario');
        setNomeUsuario(nome || 'Usuário');
    }, []);

    return (
        <div className="flex flex-col md:flex-row w-screen h-screen">
            <SidebarSession />

            <div className="flex-1 p-4 md:p-10 bg-gray-100 overflow-y-auto">
                <div className="bg-white rounded-lg shadow-2xl shadow-gray-400 p-6 md:p-8">
                    <h2 className="text-3xl md:text-5xl text-start font-bold text-black mb-4">Perfil</h2>
                    <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
                        <div className="relative w-48 h-48 md:w-96 md:h-72 mb-4 md:mb-0">
                            <img src={ProfilePerfilMock} alt="Perfil" className="rounded-lg object-cover w-full h-full" />
                            <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 text-white py-1 cursor-pointer">
                                Change Photo
                            </div>
                        </div>
                        <div className="md:ml-8 flex flex-col space-y-4 w-full">
                            <h2 className="text-3xl md:text-5xl text-start font-semibold text-gray-800">Dados Pessoais</h2>
                            <input
                                type="text"
                                placeholder="Nome Completo"
                                value={nomeCompleto}
                                onChange={(e) => setNomeCompleto(e.target.value)}
                                className="bg-gray-100 p-2 rounded-lg w-full text-black"
                            />
                            <input
                                type="email"
                                placeholder="E-Mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-gray-100 p-2 rounded-lg w-full text-black"
                            />
                            <input
                                type="tel"
                                placeholder="Telefone"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                                className="bg-gray-100 p-2 rounded-lg w-full text-black"
                            />
                        </div>
                    </div>
                    
                    <hr className="my-6" />
                    
                    <h2 className="text-3xl md:text-5xl text-start font-semibold text-gray-800 mb-4">Informações Do Negócio</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Nome Da Empresa"
                            value={nomeEmpresa}
                            onChange={(e) => setNomeEmpresa(e.target.value)}
                            className="bg-gray-100 p-2 rounded-lg w-full text-black"
                        />
                        <input
                            type="text"
                            placeholder="CNPJ"
                            value={cnpj}
                            onChange={(e) => setCnpj(e.target.value)}
                            className="bg-gray-100 p-2 rounded-lg w-full text-black"
                        />
                        <input
                            type="text"
                            placeholder="CEP"
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}
                            className="bg-gray-100 p-2 rounded-lg w-full text-black"
                        />
                        <input
                            type="text"
                            placeholder="Cidade"
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                            className="bg-gray-100 p-2 rounded-lg w-full text-black"
                        />
                        <input
                            type="text"
                            placeholder="Estado"
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                            className="bg-gray-100 p-2 rounded-lg w-full text-black"
                        />
                        <input
                            type="text"
                            placeholder="Rua"
                            value={rua}
                            onChange={(e) => setRua(e.target.value)}
                            className="bg-gray-100 p-2 rounded-lg w-full text-black"
                        />
                        <input
                            type="text"
                            placeholder="Bairro"
                            value={bairro}
                            onChange={(e) => setBairro(e.target.value)}
                            className="bg-gray-100 p-2 rounded-lg w-full text-black"
                        />
                    </div>

                    <div className="flex justify-center space-x-4 mt-8">
                        <button className="bg-orange-500 text-white w-48 py-2 rounded-lg font-semibold text-lg">Salvar</button>
                        <button className="bg-gray-400 text-white w-48 py-2 rounded-lg font-semibold text-lg">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DadosPessoais;
