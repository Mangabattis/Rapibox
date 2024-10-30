import React from 'react';
import mapImage from '../assets/UnidadesMapaIMG.png';

export const UnidadesMapa: React.FC = () => {
  return (
    <div className="flex items-center justify-start pl-16 min-h-screen bg-gray-100 p-4">
      {/* Texto à esquerda */}
      <div className="text-left max-w-md space-y-2">
        <h1 className="text-6xl font-bold text-gray-800">Uma Unidade Pertinho de Você!</h1>
        <h2 className="text-4xl text-gray-600">Conveniente e acessível, estamos sempre ao seu lado!</h2>
      </div>

      {/* Imagem à direita com tamanho maior */}
      <div className="ml-8">
        <img 
          src={mapImage} 
          alt="Mapa" 
          className="w-[70rem] h-[45rem] object-cover rounded-lg" 
        />
      </div>
    </div>
  );
};
