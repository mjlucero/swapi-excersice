import { Planet } from "@/models/planet.model";
import { PlanetCard } from "../planet-card/PlanetCard";

interface PlanetCardListProps {
  planets: Planet[];
}

export const PlanetCardList = ({ planets }: PlanetCardListProps) => {
  return (
    <>
      {planets.map((planet, index) => (
        <PlanetCard
          key={index}
          planet={planet}
          onPlanetClick={() => console.log("click")}
        />
      ))}
    </>
  );
};
