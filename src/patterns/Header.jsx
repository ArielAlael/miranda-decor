import React from 'react';
import logo from '../assets/logo-header.png';
import { Instagram, MessageCircle } from 'lucide-react';

const defaultStyleIcon = 'size-4 stroke-1';
const sectionsPage = ['Projetos', 'Sobre', 'Serviços', 'Contato'];
const social = [
  {
    title: '@arq.mirandadecor',
    src: 'https://www.instagram.com/arq.mirandadecor/',
    icon: <Instagram className={defaultStyleIcon} />,
  },
  {
    title: '+55 (33) 98414-1043',
    src: 'https://api.whatsapp.com/send?phone=5533984141043&text=me%20mande%20%20uma%20mensagem',
    icon: <MessageCircle className={defaultStyleIcon} />,
  },
];

const handleScroll = (event, id) => {
  event.preventDefault();
  const section = document.getElementById(id);
  const headerOffset = 70;
  const elementPosition = section.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

const Header = () => {
  return (
    <header className="z-50 fixed w-full bg-background py-3 border-zinc-200 border-b flex justify-center">
      <div className="w-[1000px] flex justify-between">
        <nav className="flex items-center gap-12">
          <a href="/">
            <img src={logo} alt="Logo de Miranda Decor" />
          </a>
          <ul className="flex gap-6">
            {sectionsPage.map((section) => (
              <li key={section}>
                <a
                  className="text-sm text-zinc-400 hover:text-zinc-950"
                  href={'#' + section.toLowerCase()}
                  onClick={(e) => handleScroll(e, section.toLowerCase())}
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-2 flex-col justify-center">
          {social.map((rede) => (
            <div key={rede.title}>
              <a
                target="_blank"
                className="text-zinc-400 flex gap-2 items-center justify-end text-xs hover:text-zinc-950"
                href={rede.src}
                rel="noreferrer"
              >
                {rede.title}
                {rede.icon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
