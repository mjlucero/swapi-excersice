import { useEffect, useState } from "react";
import { Planet } from "../../models/planet.model";
import { getPlanets } from "../../services/planets.service";
import { Pagination } from "../../types/pagination";
import { PlanetCard } from "./components/PlanetCard";

import "./planetsPage.scss";

export const PlanetsPage = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    count: 0,
    next: null,
    previous: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPlanets().then(({ count, next, previous, results }) => {
      console.log({ results });
      setPlanets(results);
      setPagination({
        count,
        next,
        previous,
      });
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="planets-container">
      {planets.map((planet, index) => (
        <PlanetCard
          key={index}
          planet={planet}
          onPlanetClick={() => console.log("click")}
        />
      ))}
    </div>
  );
};
