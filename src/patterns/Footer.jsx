import React from 'react';
import logoFooter from '../assets/logo-footer.png';
import whatsapp from '../assets/icons/whatsapp.svg';
import instagram from '../assets/icons/instagram.svg';
import linkedin from '../assets/icons/linkedin.svg';

const social = [
  {
    title: 'Whatsapp',
    icon: whatsapp,
    src: '/',
  },
  {
    title: 'Instagram',
    icon: instagram,
    src: '/',
  },
  {
    title: 'Linkedin',
    icon: linkedin,
    src: '/',
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="bg-zinc-300 flex flex-col">
        <h2 className="text-2xl">Entre em Contato</h2>
        <img className="w-max" src={logoFooter} alt="Logo Miranda Decor" />
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem.
        </p>
      </div>
      <div className="flex justify-center py-12 bg-zinc-400">
        <div className="flex gap-3">
          {social.map((rede) => (
            <a
              href={rede.src}
              className="bg-zinc-900 block p-1 rounded hover:bg-zinc-700"
            >
              <img src={rede.icon} alt={rede.title} />
            </a>
          ))}
        </div>
      </div>
      <div className="bg-zinc-900 flex justify-center py-1">
        <p className="text-zinc-50 text-xs">
          © 2024 Desenvolvido por{' '}
          <a href="/" className="text-blue-400">
            Ariel
          </a>{' '}
          - Todos os Direitos Reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
