import { Card } from "../../../../components/card/Card";
import { Planet } from "../../../../models/planet.model";
import { PlanetInfo, PlanetInfoKeys } from "../../../../types/PlanetInfo";

import "./planetCard.scss";
import { PlanetCardDetail } from "./PlanetCardDetail";

interface PlanetCardProps {
  planet: Planet;
  onPlanetClick: () => void;
}

export const PlanetCard = ({ planet, onPlanetClick }: PlanetCardProps) => {
  const { name, films, residents, url, created, edited, ...rest } = planet;
  const planetBasicInfo: PlanetInfo = { ...rest };

  return (
    <div className="planet-card-container" onClick={() => onPlanetClick()}>
      <Card title={name}>
        {Object.keys(planetBasicInfo).map((key) => (
          <PlanetCardDetail
            key={key}
            title={key.replace("_", " ")}
            value={planetBasicInfo[key as PlanetInfoKeys]}
          />
        ))}
      </Card>
    </div>
  );
};
