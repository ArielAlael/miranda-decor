import React from 'react'
import Button from '../components/Button'
import { Instagram, Linkedin, MessageCircle } from 'lucide-react'
import logoIntro from "../assets/logo-intro.png"
import tacianeMirandaIntro from "../assets/taciane-miranda-intro.png"

const social = [
    {
        icon: <Instagram />,
        src: "https://www.instagram.com/arq.mirandadecor/"
    },
    {
        icon: <Linkedin />,
        src: "https://br.linkedin.com/in/taciane-fonseca-miranda-690517284?trk=people-guest_people_search-card"
    },
]

export const Intro = () => {
  return (
    <section className='flex justify-center mt-24'>
        <div className='flex justify-between w-[1000px]'>
            <div className='flex flex-col justify-between pb-6'>
                <div className='flex flex-col gap-12'>
                    <img className='w-max' src={logoIntro} alt="Logo Miranda Decor"/>
                    <h1 className='font-medium w-[500px] text-3xl'>Transformando espaços em experiências únicas.</h1>
                </div>
                <div className='flex flex-col gap-12'>
                    <div className='flex items-center gap-6' >
                        <Button icon={<MessageCircle className="size-6 stroke-1" />} text={"Entrar em contato"} type='tertiary'/>
                        {social.map((rede, index) => (
                            <a className='text-zinc-400 stroke-1 hover:text-zinc-950' href={rede.src}>{rede.icon}</a>
                        ))}
                    </div>
                    <div className='flex gap-3'>
                        <span className='text-sm text-zinc-600'>Taciane Miranda</span>
                        <span className='text-sm text-zinc-600'>Arquiteta e Urbanista</span>
                    </div>
                </div>
            </div>
            <img src={tacianeMirandaIntro} alt="" />
        </div>
    </section>
  )
}


export default Intro