import React from 'react';
import Title from './../components/Title';
import { MapPin } from 'lucide-react';
import tacianeMiranda from "../assets/taciane-miranda.jpg"

const experiences = [
  {
    label: '5+ Anos de experiência',
    content: '5+',
    contentTitle: 'anos',
    icon: null,
  },
  {
    label: '25+ Projetos realizados',
    content: '25+',
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
      <div className="flex items-center gap-12 w-[1000px]">
        <abbr title="Taciane Miranda">
          <div className="flex items-end center justify-center">
            <img src={tacianeMiranda} className="rounded w-[327.48px] h-[601px]"></img>
            <h3 className="absolute font-bold rounded m-[-26px] text-lg py-3 px-16 text-zinc-950 bg-zinc-50 border border-zinc-300">
              Taciane Miranda
            </h3>
          </div>
        </abbr>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <Title type="tertiary">Quem nos somos?</Title>
            <p className="w-[625px]  text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English...
            </p>
          </div>
          <div className="flex justify-between">
            {experiences.map((item, index) => (
              <div
                key={index}
                className=" flex items-end center justify-center rounded-full size-[200px] border border-zinc-300"
              >
                {item.icon}
                {!item.icon ? (
                  <h1 className="text-center italic m-auto text-4xl font-bold">
                    {item.content}
                    <h2 className="font-normal not-italic text-2xl">
                      {item.contentTitle}
                    </h2>
                  </h1>
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
