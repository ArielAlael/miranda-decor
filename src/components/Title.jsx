import React from 'react';

const Title = ({ contentTitle, typeTitle = 'primary' }) => {
  const primary =
    "flex flex-col items-center gap-6 text-zinc-950 text-2xl font-bold after:content-[''] after:block after:w-12 after:h-1 after:bg-zinc-950";

  const secondary =
    "flex flex-col items-center gap-6 text-zinc-50 text-2xl font-bold after:content-[''] after:block after:w-12 after:h-1 after:bg-zinc-50";

  return (
    <h2 className={typeTitle === 'secondary' ? secondary : primary}>
      {contentTitle}
    </h2>
  );
};

export default Title;
