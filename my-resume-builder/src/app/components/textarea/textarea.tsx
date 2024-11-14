// components/Textarea.tsx
import React from 'react';

interface TextareaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

const Textarea: React.FC<TextareaProps> = ({ value, onChange, placeholder }) => (
  <textarea
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="border rounded px-3 py-2 w-full"
  />
);

export default Textarea;


  