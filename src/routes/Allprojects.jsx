import { ArrowLeft } from 'lucide-react';
import React from 'react';
import { useEffect } from 'react';

const Allprojects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header className="p-6 flex justify-center">
        <div className="w-[1000px]">
          <a href="/" className="flex gap-2 hover:text-zinc-600">
            <ArrowLeft />
            Voltar para tela inicial
          </a>
        </div>
      </header>
      <div className="bg-zinc-900 text-zinc-50 py-[250px]">All Projects</div>
    </>
  );
};

export default Allprojects;
