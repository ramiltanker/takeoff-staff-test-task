import { FC } from "react";
import "./Input.scss";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input: FC<InputProps> = ({
  children,
  className,
  type,
  id,
  name,
  ...inputProps
}) => {
  return (
    <input className={`input ${className}`} {...inputProps}>
      {children}
    </input>
  );
};

export default Input;
