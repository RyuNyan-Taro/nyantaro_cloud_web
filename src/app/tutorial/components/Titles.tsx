import React from 'react';

interface TitleProps {
  children: React.ReactNode;
}

export const MainTitle = ({ children }: TitleProps) => {
  return (
    <h1 className="text-3xl font-bold mb-8">{children}</h1>
  );
};

export const SubTitle = ({ children }: TitleProps) => {
  return (
    <h2 className="text-2xl font-bold mb-8">{children}</h2>
  );
};