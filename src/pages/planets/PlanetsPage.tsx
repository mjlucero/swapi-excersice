import { Button } from "../../components/button/Button";
import { useGetPlanets } from "../../hooks/useGetPlanets";
import { PlanetCard } from "./components/planet-card/PlanetCard";

import "./planetsPage.scss";

export const PlanetsPage = () => {
  const { isLoading, pagination, planets, setNextUrl } = useGetPlanets();

  const handlePagination = (nextUrl: string | null) => {
    if (nextUrl) {
      setNextUrl(nextUrl);
    }
  };

  return (
    <div>
      <div className="planets-container">
        {planets.map((planet, index) => (
          <PlanetCard
            key={index}
            planet={planet}
            onPlanetClick={() => console.log("click")}
          />
        ))}
      </div>
      <div className="planets-pagination">
        {pagination.previous && (
          <Button onClick={() => handlePagination(pagination.previous)}>
            {"< Previous"}
          </Button>
        )}
        {pagination.next && (
          <Button onClick={() => handlePagination(pagination.next)}>
            {"Next >"}
          </Button>
        )}
      </div>
    </div>
  );
};
