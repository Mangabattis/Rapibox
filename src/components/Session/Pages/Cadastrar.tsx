// Cadastrar.tsx
import React, { useState, useEffect } from 'react';
import Sidebar from '../../Session/SidebarSession';
import InfoPerfil from '../../Session/InfoPerfil';
import ProfilePerfilMock from '../../../assets/ProfilePerfilMock2.png';

interface SessaoLogadaProps {}

const Cadastrar: React.FC<SessaoLogadaProps> = () => {
    const [nomeUsuario, setNomeUsuario] = useState<string | null>(null);
    const [nomeProduto, setNomeProduto] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [quantidade, setQuantidade] = useState(1);
    const [peso, setPeso] = useState('');
    const [imagem, setImagem] = useState<File | null>(null);

    useEffect(() => {
        const nome = localStorage.getItem('nomeUsuario');
        setNomeUsuario(nome);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Adicione a lógica para enviar os dados do formulário aqui
        console.log({ nomeProduto, descricao, valor, quantidade, peso, imagem });
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 flex items-center p-6 ">
                <div className="bg-white shadow-md rounded-lg p-8 ">
                    <h1 className='text-center text-black text-2xl font-bold mb-6'>Cadastre Seu Produto</h1>
                    <InfoPerfil 
                        name={nomeUsuario || 'Usuário'} 
                        cargo={'admin'} 
                        profileImage={ProfilePerfilMock} 
                        onNotificationClick={() => { /* implementação de notificações */ }}
                    />
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <div className="flex flex-col items-center ">
                            <div className="border-2 border-gray-300 rounded-md w-full h-48 flex items-center justify-center mb-4 ">
                                {imagem ? (
                                    <img 
                                        src={URL.createObjectURL(imagem)} 
                                        alt="Imagem do Produto" 
                                        className="object-cover w-full h-full rounded-md" 
                                    />
                                ) : (
                                    <span className="text-gray-500">Imagem do Produto</span>
                                )}
                            </div>
                            <label className="cursor-pointer bg-[#f0810b] text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600 transition duration-200 ">
                                Adicionar Imagem
                                <input 
                                    type="file" 
                                    accept="image/*" 
                                    onChange={(e) => setImagem(e.target.files?.[0] || null)} 
                                    className="hidden" 
                                />
                            </label>
                        </div>
                        <div>
                            <label className="block text-gray-700" htmlFor="nomeProduto"></label>
                            <input 
                                type="text" 
                                id="nomeProduto" 
                                value={nomeProduto} 
                                onChange={(e) => setNomeProduto(e.target.value)} 
                                className="bg-white mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 placeholder-gray-500" 
                                placeholder="Digite o nome do produto"
                                required 
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700" htmlFor="descricao"></label>
                            <textarea 
                                id="descricao" 
                                value={descricao} 
                                onChange={(e) => setDescricao(e.target.value)} 
                                className="bg-white mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 placeholder-gray-500" 
                                placeholder="Digite a descrição do produto"
                                required 
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700" htmlFor="valor"></label>
                            <input 
                                type="number" 
                                id="valor" 
                                value={valor} 
                                onChange={(e) => setValor(e.target.value)} 
                                className="bg-white mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 placeholder-gray-500" 
                                placeholder="Digite o valor (R$)"
                                required 
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700" htmlFor="quantidade"></label>
                            <input 
                                type="number" 
                                id="quantidade" 
                                value={quantidade} 
                                onChange={(e) => setQuantidade(parseInt(e.target.value))} 
                                className="bg-white mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 placeholder-gray-500" 
                                placeholder="Digite a quantidade"
                                required 
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700" htmlFor="peso"></label>
                            <input 
                                type="number" 
                                id="peso" 
                                value={peso} 
                                onChange={(e) => setPeso(e.target.value)} 
                                className="bg-white mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-500 placeholder-gray-500" 
                                placeholder="Digite o peso (kg)"
                                required 
                            />
                        </div>
                        <div className="flex justify-between mt-6">
                            <button 
                                type="submit" 
                                className="bg-[#f0810b] text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600 transition duration-200"
                            >
                                Cadastrar
                            </button>
                            <button 
                                type="button" 
                                className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md hover:bg-gray-400 transition duration-200"
                                onClick={() => { /* Implementar lógica de cancelar */ }}
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Cadastrar;
