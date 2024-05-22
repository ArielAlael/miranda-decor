import React, { useMemo } from 'react';

const Button = ({ text, src, icon, type = 'primary' }) => {
  const styleButton = useMemo(() => {
    switch (type) {
      case 'primary':
        return 'flex items-center flex-row-reverse gap-2 bg-zinc-300 py-3 px-6 rounded-full hover:bg-zinc-400';
      case 'secondary':
        return 'flex items-center flex-row-reverse gap-2 bg-zinc-950 text-zinc-50 py-3 px-6 rounded-full hover:bg-zinc-800 ';
      case 'tertiary':
        return 'flex items-center flex-row-reverse gap-2 border border-zinc-300 bg-zinc-50 text-zinc-950 py-3 px-6 rounded-full hover:bg-zinc-950 hover:text-zinc-50 ';
      default:
        break;
    }
  }, [type]);

  return (
    <a className={styleButton} target='_blank' href={src}>
      {text}
      {icon}
    </a>
  );
};
1;

export default Button;
