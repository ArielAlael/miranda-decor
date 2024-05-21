import React, { useMemo } from 'react';

const Title = ({ type = 'primary', children }) => {
  const styleTitle = useMemo(() => {
    switch (type) {
      case 'primary':
        return "flex flex-col items-center gap-6 text-zinc-950 text-2xl font-bold after:content-[''] after:block after:w-12 after:h-1 after:bg-zinc-950";
      case 'secondary':
        return "flex flex-col items-center gap-6 text-zinc-50 text-2xl font-bold after:content-[''] after:block after:w-12 after:h-1 after:bg-zinc-50";
      case 'tertiary':
        return "flex flex-col gap-6 text-zinc-950 text-2xl font-bold after:content-[''] after:block after:w-12 after:h-1 after:bg-zinc-950";
      default:
        break;
    }
  }, [type]);

  return <h2 className={styleTitle}>{children}</h2>;
};

export default Title;
