import React from "react";

type InputProps = {
  name: string;
  label_className?: string;
  required: boolean;
  input_className?: string;
};

export interface TextInputProps extends InputProps {
  type: "email" | "password" | "text";
  parent_div_className?: string;
  placeholder?: string;
  label: string;
}

export interface CheckboxProps extends InputProps {
  type: "checkbox";
  parent_div_className: string;
  input_div_className: string;
  label_div_className: string;
  label: React.ReactNode;
}

export interface ButtonProps {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    label: string;
}