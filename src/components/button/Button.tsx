interface CustomButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  CustomButtonProps;

import "./button.scss";

export const Button = ({ children, variant, ...rest }: ButtonProps) => {
  return (
    <button className="btn" {...rest}>
      <span>{children}</span>
    </button>
  );
};
