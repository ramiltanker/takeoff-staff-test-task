import React, { FC } from "react";
import "./Button.scss";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button: FC<ButtonProps> = ({ children, className, ...buttonProps }) => {
  return (
    <button {...buttonProps} className={`button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
