import React from 'react';
import Title from './../components/Title';
import { MapPin } from 'lucide-react';
import tacianeMiranda from '../assets/taciane-miranda.jpg';

const experiences = [
  {
    label: '5+ Anos de experiência',
    content: '5+',
    contentTitle: 'anos',
    icon: null,
  },
  {
    label: '50+ Projetos personalizados',
    content: '50+',
    contentTitle: 'projetos',
    icon: null,
  },
  {
    label: 'Manhuaçu MG',
    content: null,
    contentTitle: null,
    icon: <MapPin className="m-auto" />,
  },
];

const About = () => {
  return (
    <section id="sobre" className="flex justify-center items-center py-24">
      <div className="lg:flex items-center gap-12 justify-between">
        <abbr title="Taciane Miranda">
          <div className="pb-12 lg:pb-0 flex items-end center justify-center">
            <img
              src={tacianeMiranda}
              className="rounded w-[327.48px] h-[601px]"
            ></img>
            <h3 className="absolute font-bold rounded m-[-26px] text-lg py-3 px-16 text-zinc-950 bg-zinc-50 border border-zinc-300">
              Taciane Miranda
            </h3>
          </div>
        </abbr>
        <div className="flex flex-col gap-12">
          <div className="flex px-6 lg:px-0 w-svw lg:w-[685px] flex-col gap-6">
            <Title type="primary">Quem somos nós</Title>
            <p className="text-sm text-center lg:text-left">
              A Miranda Decor é uma empresa de arquitetura especializada em
              projetos arquitetônicos, de interiores, fachadas e reformas. Com
              mais de seis anos de experiência no mercado, nos dedicamos a
              transformar espaços com criatividade, funcionalidade e beleza,
              atendendo às necessidades e sonhos de nossos clientes.
            </p>
          </div>
          <div className="flex flex-col gap-12 lg:gap-0 items-center lg:flex-row lg:justify-between">
            {experiences.map((item, index) => (
              <div
                key={index}
                className=" flex items-end center justify-center rounded-full size-[200px] border border-zinc-300"
              >
                {item.icon}
                {!item.icon ? (
                  <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-center italic text-4xl font-bold">
                      {item.content}
                    </h1>
                    <h2 className="font-normal text-2xl">
                      {item.contentTitle}
                    </h2>
                  </div>
                ) : null}

                <div className="m-[-24px] flex items-center justify-center absolute rounded-full h-[48px] w-[185px] bg-zinc-950">
                  <p className="text-sm text-center text-zinc-50">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
