// components/Button.tsx
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <button onClick={onClick} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
    {children}
  </button>
);

export default Button;


