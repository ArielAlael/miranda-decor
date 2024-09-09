import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col w-full h-dvh justify-center items-center gap-6">
      <h3 className="font-bold text-4xl">Página não encontrada!</h3>
      <Link
        to="/"
        className="cursor-pointer flex items-center flex-row-reverse gap-2 bg-zinc-950 text-zinc-50 py-3 px-6 rounded-full hover:bg-zinc-800 "
      >
        Voltar para tela inicial
      </Link>
    </div>
  );
};

export default ErrorPage;
