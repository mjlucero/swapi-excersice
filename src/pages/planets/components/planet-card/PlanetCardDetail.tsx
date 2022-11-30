interface PlanetCardDetailProps {
  title: string;
  value: string;
}

export const PlanetCardDetail = ({ title, value }: PlanetCardDetailProps) => {
  return (
    <div className="planet-card-container__detail">
      <span className="planet-card-container__detail-title">{title}</span>:{" "}
      <span>{value}</span>
    </div>
  );
};
