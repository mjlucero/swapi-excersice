type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

import "./input.scss";

export const Input = (props: InputProps) => {
  return (
    <div className="input-container">
      <input {...props} />
    </div>
  );
};
