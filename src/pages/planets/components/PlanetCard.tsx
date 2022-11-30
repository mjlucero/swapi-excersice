import { Card } from "../../../components/card/Card";
import { Planet } from "../../../models/planet.model";
import { PlanetBasicInfo } from "../../../types/PlanetBasicInfo";

import "./planetCard.scss";

interface PlanetCardProps {
  planet: Planet;
  onPlanetClick: () => void;
}

export const PlanetCard = ({ planet, onPlanetClick }: PlanetCardProps) => {
  const { films, residents, url, created, edited, ...rest } = planet;
  const planetBasicInfo: PlanetBasicInfo = { ...rest };

  return (
    <div className="planet-card-container" onClick={() => onPlanetClick()}>
      <Card>
        {Object.keys(planetBasicInfo).map((key) => (
          <div key={key} className="planet-card-container__detail">
            <span className="planet-card-container__detail-title">
              {key.replace("_", " ")}
            </span>
            : <span>{planetBasicInfo[key as keyof PlanetBasicInfo]}</span>
          </div>
        ))}
      </Card>
    </div>
  );
};
