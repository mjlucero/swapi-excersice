import "./card.scss";

interface CardProps {
  children?: React.ReactNode;
  title?: string;
}

export const Card = ({ title, children }: CardProps) => {
  return (
    <div className="card">
      {title && <h3 className="card__title">{title}</h3>}
      {children}
    </div>
  );
};
