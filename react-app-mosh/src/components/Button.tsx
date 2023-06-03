import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;

  // The '?:' means that the value is optional
  // The '|' means union
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";

  onClickButton: (item: any) => void;
}

const Button = ({ children, onClickButton, color = "dark" }: ButtonProps) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={() => {
        onClickButton({ children });
      }}
    >
      {children}
    </button>
  );
};

export default Button;
