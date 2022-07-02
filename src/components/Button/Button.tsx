import React from 'react';
import { Button as ButtonMui } from '@mui/material/';

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return <ButtonMui>{label}</ButtonMui>;
};

export default Button;
