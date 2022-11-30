import "./card.scss";

interface CardProps {
  children?: JSX.Element[];
}

export const Card = ({ children }: CardProps) => {
  return <div className="card">{children}</div>;
};
