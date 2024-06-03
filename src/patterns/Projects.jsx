import React from 'react';
import Button from '../components/Button';

import project1 from '../assets/projects/project-1.jpg';
import project2 from '../assets/projects/project-2.jpg';
import project3 from '../assets/projects/project-3.jpg';
import project4 from '../assets/projects/project-4.jpg';

const images = [
  { path: project1, label: 'Sala de Jantar / Sala de Estar' },
  { path: project2, label: 'Banheiro Social' },
  { path: project3, label: 'Titulo do Projeto' },
  { path: project4, label: 'Titulo do Projeto' },
];

const Projects = () => {
  return (
    <section
      id="projetos"
      className="flex flex-col items-center bg-zinc-950 pt-24 after:content-[''] after:bg-zinc-300 after:w-full after:h-24 after:mt-24"
    >
      <div className="flex justify-center">
        <div className="flex gap-2 w-[1000px]">
          {images.map((project, index) => (
            <a
              key={index}
              // eslint-disable-next-line react/no-unknown-property
              afterLabel={project.label}
              className="w-full after:content-[attr(afterLabel)] after:block after:mt-2 text-zinc-700 text-sm hover:after:text-zinc-400"
              href="/"
            >
              <img
                className="rounded h-[400px] object-cover filter brightness-75 hover:brightness-100"
                src={project.path}
                alt="Imagem de Projeto"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <Button text={'Mais Projetos ->'} />
      </div>
    </section>
  );
};

export default Projects;
