import React, { useMemo } from 'react';

const Button = ({ text, icon, type = 'primary' }) => {
  const styleButton = useMemo(() => {
    switch (type) {
      case 'primary':
        return 'flex flex-row-reverse gap-2 bg-zinc-300 py-3 px-6 rounded-full hover:bg-zinc-400';
      case 'secondary':
        return 'flex flex-row-reverse gap-2 bg-zinc-950 text-zinc-50 py-3 px-6 rounded-full hover:bg-zinc-800 ';
      case 'tertiary':
        return 'flex flex-row-reverse gap-2 bg-zinc-500 text-zinc-50 py-3 px-6 rounded-full hover:bg-zinc-200 ';
      default:
        break;
    }
  }, [type]);

  return (
    <a className={styleButton} href="/">
      {text}
      {icon}
    </a>
  );
};
1;

export default Button;
