import type React from 'react';

type ButtonProperties = {
  title: string;
  children?: React.ReactNode;
};

export const Button: React.FC<ButtonProperties> = ({ children }) => {
  return <button>{children}</button>;
};
