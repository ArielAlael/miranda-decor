import React from 'react';
import Button from '../components/Button';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';
import logoIntro from '../assets/logo-intro.png';
import tacianeMirandaIntro from '../assets/taciane-miranda-intro.png';

const social = [
  {
    icon: <Instagram />,
    src: 'https://www.instagram.com/arq.mirandadecor/',
  },
  {
    icon: <Linkedin />,
    src: 'https://www.linkedin.com/in/taciane-fonseca-miranda-690517284/',
  },
];

export const Intro = () => {
  return (
    <section className="flex justify-center mt-24">
      <div className="flex justify-between lg:w-[1000px]">
        <div className="flex flex-col justify-between items-center lg:items-start pb-6">
          <div className="flex items-center lg:items-start lg:flex-col  flex-col gap-12 pb-12 lg:pb-0">
            <img className="w-max" src={logoIntro} alt="Logo Miranda Decor" />
            <h1 className="text-center lg:text-left font-medium w-svw px-6 lg:px-0 lg:w-[500px] text-3xl">
              Transformando espaços em experiências únicas.
            </h1>
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex items-center gap-6">
              <Button
                src={'https://api.whatsapp.com/send?phone=5533998118983&text='}
                icon={<MessageCircle className="size-6 stroke-1" />}
                text={'Entrar em contato'}
                type="tertiary"
              />
              {social.map((rede, index) => (
                <a
                  key={index}
                  className="text-zinc-400 stroke-1 hover:text-zinc-950"
                  href={rede.src}
                  target="_blank"
                  rel="noreferrer"
                >
                  {rede.icon}
                </a>
              ))}
            </div>
            <div className="flex gap-3 justify-center lg:justify-start">
              <span className="text-sm text-zinc-600">Taciane Miranda</span>
              <span className="text-sm text-zinc-600">
                Arquiteta e Urbanista
              </span>
            </div>
          </div>
        </div>
        <img className="hidden lg:block" src={tacianeMirandaIntro} alt="" />
      </div>
    </section>
  );
};

export default Intro;
