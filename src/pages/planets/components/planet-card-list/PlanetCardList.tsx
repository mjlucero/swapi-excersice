import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { getResourceUrlFromApiUrl } from "@/helpers";
import { Planet } from "@/models/planet.model";
import { PlanetCard } from "../planet-card/PlanetCard";
import { ResidentsContext } from "@/context/ResidentsContext";

interface PlanetCardListProps {
  planets: Planet[];
}

export const PlanetCardList = ({ planets }: PlanetCardListProps) => {
  const { setResidentsUrls } = useContext(ResidentsContext);
  const navigate = useNavigate();

  const handlePlanetClick = (planet: Planet) => {
    setResidentsUrls(planet.residents);

    const planetUrl = getResourceUrlFromApiUrl(planet.url);

    navigate(planetUrl);
  };

  return (
    <>
      {planets.map((planet, index) => (
        <PlanetCard
          key={index}
          planet={planet}
          onPlanetClick={() => handlePlanetClick(planet)}
        />
      ))}
    </>
  );
};
