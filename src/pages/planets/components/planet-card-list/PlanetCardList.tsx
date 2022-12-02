import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { getResourceUrlFromApiUrl } from "@/helpers";
import { Planet } from "@/models/planet.model";
import { PlanetCard } from "../planet-card/PlanetCard";
import { ResidentsContext } from "@/context/residents/ResidentsContext";
import { BreadcrumbContext } from "@/context/breadcrumb/BreadcrumbContext";

interface PlanetCardListProps {
  planets: Planet[];
}

export const PlanetCardList = ({ planets }: PlanetCardListProps) => {
  const { updateBreadcrumbMap } = useContext(BreadcrumbContext);
  const { setResidentsUrls } = useContext(ResidentsContext);
  const navigate = useNavigate();

  const handlePlanetClick = (planet: Planet) => {
    setResidentsUrls(planet.residents);

    const planetUrl = getResourceUrlFromApiUrl(planet.url);

    updateBreadcrumbMap("planet", planet.name);
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
