import React from 'react';
import Title from '../components/Title';
import Button from './../components/Button';
import { Hammer, MessagesSquare, Pyramid, Sofa } from 'lucide-react';

const defaultStyleIcon = 'stroke-[0.4] stroke-zinc-300 size-28';

const services = [
  {
    title: 'Consultoria Online e Presencial',
    subTitle: '',
    icon: <MessagesSquare className={defaultStyleIcon} />,
  },
  {
    title: 'Projeto Arquitetônico e de Fachada',
    subTitle: '',
    icon: <Pyramid className={defaultStyleIcon} />,
  },
  {
    title: 'Projeto de Interior',
    subTitle: 'Comeciais e Residenciais',
    icon: <Sofa className={defaultStyleIcon} />,
  },
  {
    title: 'Reformas',
    subTitle: '',
    icon: <Hammer className={defaultStyleIcon} />,
  },
];

const Services = () => {
  return (
    <section
      id="serviços"
      className="flex flex-col gap-6 justify-center items-center py-24"
    >
      <div className="flex flex-col gap-12 lg:w-[1000px]">
        <div className="flex flex-col gap-6 justify-center items-center">
          <Title>Conheça nossos serviços</Title>
          <p className="text-sm text-center w-svw px-6 lg:w-[800px]">
            Na Miranda Decor, combinamos inovação, técnica e sensibilidade
            estética para criar ambientes que inspirem e proporcionem bem-estar.
            Estamos prontos para transformar seus espaços em verdadeiras obras
            de arte funcionais, sempre com foco na satisfação e na construção de
            relacionamentos duradouros.
          </p>
        </div>
        <div className="items-center flex-col gap-2 flex lg:flex-row justify-between">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded flex flex-col items-center justify-center border border-zinc-300 h-[244px] w-[244px] lg:h-[400px]"
            >
              <div className="flex flex-col items-center justify-center">
                {service.icon}
                <h3 className="w-[150px] text-center">{service.title}</h3>
                <h4 className="text-xs text-center">{service.subTitle}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        src={'https://api.whatsapp.com/send?phone=5533998118983&text='}
        text="Tire suas Dúvidas ->"
        type="secondary"
      />
    </section>
  );
};

export default Services;
