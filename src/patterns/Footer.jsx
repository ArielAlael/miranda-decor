import React from 'react';
import logoFooter from '../assets/logo-footer.png';
import whatsapp from '../assets/icons/whatsapp.svg';
import instagram from '../assets/icons/instagram.svg';
import linkedin from '../assets/icons/linkedin.svg';
import Title from '../components/Title';

const social = [
  {
    title: 'Whatsapp',
    icon: whatsapp,
    src: 'https://api.whatsapp.com/send?phone=5533984141043&text=me%20mande%20uma%20mensagem',
  },
  {
    title: 'Instagram',
    icon: instagram,
    src: 'https://www.instagram.com/arq.mirandadecor/',
  },
  {
    title: 'Linkedin',
    icon: linkedin,
    src: 'https://www.linkedin.com/in/taciane-fonseca-miranda-690517284/',
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="bg-zinc-300 flex flex-col justify-center items-center gap-12 py-12">
        <Title>Entre em Contato.</Title>
        <img className="w-max" src={logoFooter} alt="Logo Miranda Decor" />
        <p className="w-[600px] text-sm text-center">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem.
        </p>
      </div>
      <div className="flex justify-center py-12 bg-zinc-400">
        <div className="flex gap-3">
          {social.map((rede) => (
            <a
              target="_blank"
              key={rede.title}
              href={rede.src}
              className="bg-zinc-950 block p-2 rounded hover:bg-zinc-900"
              rel="noreferrer"
            >
              <img src={rede.icon} alt={rede.title} />
            </a>
          ))}
        </div>
      </div>
      <div className="bg-zinc-950 flex justify-center py-1">
        <p className="text-zinc-50 text-xs">
          © 2024 Desenvolvido por{' '}
          <a
            target="_blank"
            href="https://github.com/ArielAlael"
            className="text-blue-500"
            rel="noreferrer"
          >
            Ariel
          </a>{' '}
          - Todos os Direitos Reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
