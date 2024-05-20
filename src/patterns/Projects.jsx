import React from 'react';
import Button from '../components/Button';

const imagesPath = [
  'project-1.jpg',
  'project-2.jpg',
  'project-3.jpg',
  'project-4.jpg',
];

const Projects = () => {
  return (
    <section className="flex flex-col items-center bg-zinc-950 pt-24 after:content-[''] after:bg-zinc-300 after:w-full after:h-24 after:mt-24">
      <div className="flex justify-center">
        <div className="flex gap-2 w-[1000px]">
          {imagesPath.map((path, index) => (
            <a key={index} className="w-full" href="/">
              <img
                className="rounded h-[400px] object-cover filter brightness-75 hover:brightness-100"
                src={'src/assets/projects/' + path}
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
