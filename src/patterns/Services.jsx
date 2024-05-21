import React from 'react';
import Title from '../components/Title';
import Button from './../components/Button';
import { Hammer, MessagesSquare, Pyramid, Sofa } from 'lucide-react';

const defaultStyleIcon = 'stroke-[0.4] stroke-zinc-300 size-28';

const services = [
  {
    title: 'Consultoria Presencial e Online',
    subTitle: '',
    icon: <MessagesSquare className={defaultStyleIcon} />,
  },
  {
    title: 'Projeto Arquitetônico',
    subTitle: '',
    icon: <Pyramid className={defaultStyleIcon} />,
  },
  {
    title: 'Projeto de Interior',
    subTitle: 'Residencial, Comercial e de Fachada',
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
      <div className="flex flex-col gap-12 w-[1000px]">
        <div className="flex flex-col gap-6 justify-center items-center">
          <Title>Conheça nossos serviços</Title>
          <p className="w-[600px] text-sm text-center">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem.
          </p>
        </div>
        <div className="flex justify-between">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded flex flex-col items-center justify-center border border-zinc-300 w-[244px] h-[400px]"
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
      <Button text="Tire suas Dúvidas ->" type="secondary" />
    </section>
  );
};

export default Services;
