import React, { useState, useEffect } from 'react';
import Sidebar from '../../Session/SidebarSession';
import InfoPerfil from '../../Session/InfoPerfil';
import ProfilePerfilMock from '../../../assets/ProfilePerfilMock2.png';

interface SessaoLogadaProps {}

const Cadastrar: React.FC<SessaoLogadaProps> = () => {
    const [nomeUsuario, setNomeUsuario] = useState<string | null>(null);
    const [nomeProduto, setNomeProduto] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [valor, setValor] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [peso, setPeso] = useState('');
    const [imagem, setImagem] = useState<File | null>(null);
    const imagemInputRef = React.useRef<HTMLInputElement>(null); // Referência para o input de imagem

    useEffect(() => {
        const nome = localStorage.getItem('nomeUsuario');
        setNomeUsuario(nome);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validações para evitar valores zerados ou negativos
        if (parseFloat(valor) <= 0 || parseInt(quantidade) <= 0 || parseFloat(peso) <= 0) {
            alert("Os campos de Valor, Quantidade e Peso devem ser maiores que zero.");
            return;
        }

        console.log({ nomeProduto, descricao, categoria, valor, quantidade, peso, imagem });
    };

    const handleImageClick = () => {
        if (imagemInputRef.current) {
            imagemInputRef.current.click(); // Aciona o clique no input de imagem
        }
    };

    return (
        <div className="flex">
            <Sidebar />
            <InfoPerfil 
                name={nomeUsuario || 'Usuário'} 
                cargo="admin" 
                profileImage={ProfilePerfilMock} 
                onNotificationClick={() => {}} 
            />
            <div className="flex items-center justify-center w-full">
                <div className="bg-white shadow-2xl rounded-lg p-8 "> {/* Definindo largura do cartão */}
                    <h1 className="text-center text-black text-2xl font-bold mb-6">Cadastre Seu Produto</h1>
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <div className="flex flex-col items-center">
                            <div 
                                className="border-2 border-gray-300 rounded-md w-full h-48 flex items-center justify-center mb-4 cursor-pointer"
                                onClick={handleImageClick} // Ao clicar, abre o seletor de arquivos
                            >
                                {imagem ? (
                                    <img 
                                        src={URL.createObjectURL(imagem)} 
                                        alt="Imagem do Produto" 
                                        className="object-cover w-full h-full rounded-md" 
                                    />
                                ) : (
                                    <img 
                                        src="https://icons8.com/icon/24717/add" 
                                        alt="Adicionar Imagem" 
                                        className="w-16 h-16" 
                                    />
                                )}
                                <input 
                                    type="file" 
                                    accept="image/*" 
                                    onChange={(e) => setImagem(e.target.files?.[0] || null)} 
                                    className="hidden" 
                                    ref={imagemInputRef} // Atribui a referência ao input
                                />
                            </div>
                        </div>
                        <input 
                            type="text" 
                            value={nomeProduto} 
                            onChange={(e) => setNomeProduto(e.target.value)} 
                            className="bg-white w-full border border-gray-300 rounded-md p-2 text-gray-500 placeholder-gray-500" 
                            placeholder="Produto"
                            required 
                        />
                        <textarea 
                            value={descricao} 
                            onChange={(e) => setDescricao(e.target.value)} 
                            className="bg-white w-full border border-gray-300 rounded-md p-2 text-gray-500 placeholder-gray-500 resize-none" 
                            placeholder="Descrição"
                            required 
                        />
                        <select 
                            value={categoria} 
                            onChange={(e) => setCategoria(e.target.value)} 
                            className="bg-white w-full border border-gray-300 rounded-md p-2 text-gray-500"
                            required
                        >
                            <option value="" disabled>Selecione a Categoria</option>
                            <option value="Eletrônicos">Eletrônicos</option>
                            <option value="Moda">Moda</option>
                            <option value="Casa e Decoração">Casa e Decoração</option>
                            <option value="Beleza e Cuidados Pessoais">Beleza e Cuidados Pessoais</option>
                            <option value="Esporte e Lazer">Esporte e Lazer</option>
                            <option value="Brinquedos e Jogos">Brinquedos e Jogos</option>
                            <option value="Alimentos e Bebidas">Alimentos e Bebidas</option>
                            <option value="Automotivo">Automotivo</option>
                            <option value="Saúde e Bem-Estar">Saúde e Bem-Estar</option>
                            <option value="Tecnologia e Gadgets">Tecnologia e Gadgets</option>
                        </select>
                        <div className="flex justify-between mt-4 space-x-2"> {/* Usando space-x-2 para espaçamento horizontal */}
                            <input 
                                type="number" 
                                step="0.01" // Permite valores decimais
                                min="0.01" // Não permite valor menor que 0.01
                                value={valor} 
                                onChange={(e) => setValor(e.target.value)} 
                                className="bg-white w-full border border-gray-300 rounded-md p-2 text-gray-500 placeholder-gray-500" 
                                placeholder="Valor (R$)"
                                required 
                                style={{ 
                                    MozAppearance: 'textfield', 
                                    WebkitAppearance: 'none' 
                                }} 
                            />
                            <input 
                                type="number" 
                                min="1" // Não permite valor menor que 1
                                value={quantidade} 
                                onChange={(e) => setQuantidade(e.target.value)} 
                                className="bg-white w-full border border-gray-300 rounded-md p-2 text-gray-500 placeholder-gray-500" 
                                placeholder="Quantidade"
                                required 
                                style={{ 
                                    MozAppearance: 'textfield', 
                                    WebkitAppearance: 'none' 
                                }} 
                            />
                            <input 
                                type="number" 
                                step="0.1" // Permite valores decimais
                                min="0.1" // Não permite valor menor que 0.1
                                value={peso} 
                                onChange={(e) => setPeso(e.target.value)} 
                                className="bg-white w-full border border-gray-300 rounded-md p-2 text-gray-500 placeholder-gray-500" 
                                placeholder="Peso (kg)"
                                required 
                                style={{ 
                                    MozAppearance: 'textfield', 
                                    WebkitAppearance: 'none' 
                                }} 
                            />
                        </div>
                        <div className="mt-4 bg-blue-100 p-4 rounded-md">
                            <p className="font-semibold">Tipo do produto: {categoria || "Não selecionado"}</p>
                            <p className="font-semibold">Meio de pagamento: Na entrega</p>
                        </div>
                        <div className="flex flex-col mt-6">
                            <button 
                                type="submit" 
                                className="bg-[#f0810b] text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600 transition duration-200 mb-2"
                            >
                                Cadastrar
                            </button>
                            <button 
                                type="button" 
                                className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md hover:bg-gray-400 transition duration-200"
                                onClick={() => {}}
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
