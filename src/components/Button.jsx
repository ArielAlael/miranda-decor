import React from 'react';

const Button = ({ text, icon }) => {
  return (
    <a
      className="flex items-center justify-center gap-3 flex-row-reverse text-zinc-950 rounded-full py-3 px-8 bg-zinc-300 hover:bg-zinc-400"
      href="/"
    >
      {text}
      {icon}
    </a>
  );
};

export default Button;
