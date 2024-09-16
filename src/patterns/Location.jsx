import React from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import { MessageCircle } from 'lucide-react';

const Location = () => {
  return (
    <section
      id="contato"
      className="flex flex-col items-center py-12 gap-6 bg-zinc-950"
    >
      <div className="flex flex-col gap-6">
        <Title type="secondary">Aonde nos encontrar?</Title>
        <p className="text-zinc-400 text-sm">
          Praça Martins Fraga, 548 A - Bairro: Sagrada Família
        </p>
      </div>
      <iframe
        className="rounded filter brightness-90  hover:brightness-100 lg:w-[1000px] lg:px-0 h-[400px] w-full px-6"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d935.7439550620935!2d-42.04089983041624!3d-20.25983754069182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbb03909eba69a3%3A0xc9122a42bf27ca78!2sMiranda%20Decor!5e0!3m2!1spt-BR!2sbr!4v1716240225711!5m2!1spt-BR!2sbr"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Button
        src={'https://api.whatsapp.com/send?phone=5533998118983&text='}
        text="Entrar em Contato"
        icon={<MessageCircle className="size-6 stroke-1" />}
      />
    </section>
  );
};

export default Location;
