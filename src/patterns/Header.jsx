import React from 'react';
import logo from '../assets/logo-header.png';
import { Instagram, MessageCircle } from 'lucide-react';

const defaultStyleIcon = 'size-4';
const sectionsPage = ['Projetos', 'Sobre', 'Serviços', 'Contato'];
const social = [
  {
    title: '@arq.mirandadecor',
    src: '/',
    icon: <Instagram className={defaultStyleIcon} />,
  },
  {
    title: '+55 (33) 98414-1043',
    src: '/',
    icon: <MessageCircle className={defaultStyleIcon} />,
  },
];

const Header = () => {
  return (
    <header className="bg-background py-3 border-zinc-200 border-b flex justify-center">
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
                className="text-zinc-400 flex gap-2 items-center justify-end text-xs hover:text-zinc-950"
                href={rede.src}
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
