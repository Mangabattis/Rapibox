import React, { useState } from 'react';
import banner2 from '../assets/banner02.png';
import logo from '../assets/Logo.png';
import logo2 from '../assets/Logo2.png';

function Login() {
  const [usuarioData, setUsuarioData] = useState({
    nomeCompleto: '',
    email: '',
    nomeUsuario: '',
    senha: '',
    confirmeSenha: '',
  });

  const [erro, setErro] = useState(''); // Estado para armazenar a mensagem de erro

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuarioData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuarioData),
      });
      console.log(usuarioData)

      if (!response.ok) {
        const text = await response.text();
        console.log(text);
        try {
            const errorData = JSON.parse(text);
            setErro(errorData.mensagem || 'Erro ao cadastrar');
        } catch (e) {
            console.error('Erro ao interpretar a resposta:', e);
            setErro('Ocorreu um erro inesperado.');
        }
        setTimeout(() => setErro(''), 5000);
    } else {
        console.log('Cadastro realizado com sucesso!');
        //Aqui ficará o redirecionamento
    }
    } catch (error) {
      console.error('Erro de rede:', error);
      setErro('Erro de rede, tente novamente.'); // Defina a mensagem de erro para falhas de rede
      setTimeout(() => setErro(''), 5000); // Limpa a mensagem após 5 segundos
    }
  };

  return (
    <div className="flex min-h-screen w-screen overflow-hidden bg-white shadow-lg">
      {/* Seção com imagem de fundo */}
      <div 
        className="hidden md:flex w-2/5 h-screen pl-12 contrast-125 hover:contrast-150 cursor-pointer"
        style={{ backgroundImage: `url(${banner2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      > 
        <div className="flex flex-col justify-center items-start w-full h-full p-7 p-8">
          <img src={logo} alt="Logo" className="h-18 mb-8 w-auto" />
          <h1 className="text-6xl text-start font-bold text-white">
            Descubra como a Rapibox pode transformar a gestão do seu estoque e a entrega de produtos!
          </h1>
          <h2 className="text-4xl mt-4 text-white text-start mt-2">
            Venha experimentar a facilidade de gerenciar seu inventário e garantir entregas rápidas e seguras.
          </h2>
        </div>
      </div>

      {/* Caixa de Login */}
      <div className="flex flex-col justify-center items-center w-full md:w-3/5 mt-10 p-8">
        <div className="w-full max-w-md space-y-4 bg-white p-6 border border-gray-300 rounded-lg shadow-lg">
          <img src={logo2} alt="Logo" className="h-18 mb-8 w-auto" />
          <h1 className="text-4xl font-bold text-black">Cadastre sua conta</h1>

          {/* Exibir mensagem de erro se houver */}
          {erro && (
            <div className="bg-red-500 text-white p-2 rounded mb-4">
              {erro}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nomeCompleto"
              placeholder="Nome Completo"
              onChange={handleChange}
              className="w-full p-2 border bg-stone-100 border-gray-300 rounded-lg mb-4 text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={handleChange}
              className="w-full p-2 border bg-stone-100 border-gray-300 rounded-lg mb-4 text-black"
            />
            <input
              type="text"
              name="nomeUsuario"
              placeholder="Nome do Usuário"
              onChange={handleChange}
              className="w-full p-2 border bg-stone-100 border-gray-300 rounded-lg mb-4 text-black"
            />
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              onChange={handleChange}
              className="w-full p-2 border bg-stone-100 border-gray-300 rounded-lg mb-4 text-black"
            />
            <input
              type="password"
              name="confirmeSenha"
              placeholder="Confirme A Senha"
              onChange={handleChange}
              className="w-full p-2 border bg-stone-100 border-gray-300 rounded-lg mb-4 text-black"
            />

            <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-700">
              Cadastrar
            </button>
          </form>
        </div>
        <h3 className="text-gray-500 text-left block mt-6">
          Já tenho uma conta! <a href="/login" className="text-orange-600 hover:underline">Acessar</a>
        </h3>
      </div>
    </div>
  );
}

export default Login;
