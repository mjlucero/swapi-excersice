import { useContext, useEffect, useState } from "react";

import { Button } from "@/components/button/Button";
import { Input } from "@/components/input/Input";
import { InputChangeEvent } from "@/types/Events";
import { Planet } from "@/models/planet.model";
import { PlanetCardList } from "./components/planet-card-list/PlanetCardList";
import { ResidentsContext } from "@/context/ResidentsContext";
import { Spinner } from "@/components/spinner/Spinner";
import { useGetPlanets } from "@/hooks/useGetPlanets";

import "./planetsPage.scss";

export const PlanetsPage = () => {
  const { setResidentsUrls } = useContext(ResidentsContext);
  const { isLoading, pagination, planets, setNextUrl } = useGetPlanets();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPlanets, setFilteredPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    setResidentsUrls([]);
  }, []);

  const handlePagination = (nextUrl: string | null) => {
    if (nextUrl) {
      setSearchTerm("");
      setNextUrl(nextUrl);
    }
  };

  const handleFilterChange = ({ target }: InputChangeEvent) => {
    const { value } = target;

    const searchValue = value.toLowerCase();

    setSearchTerm(value);

    setFilteredPlanets(
      planets.filter((planet) =>
        planet.name.toLowerCase().includes(searchValue)
      )
    );
  };

  return (
    <div className="planets-page">
      {isLoading && (
        <div className="planets-page__spinner-container">
          <Spinner />
        </div>
      )}
      {!isLoading && (
        <>
          <div className="planets-page__filter">
            <Input
              type="text"
              placeholder="Search Planet"
              onChange={handleFilterChange}
              value={searchTerm}
            />
          </div>
          <div className="planets-page__cards">
            <PlanetCardList planets={searchTerm ? filteredPlanets : planets} />
          </div>
          <div className="planets-page__pagination">
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
        </>
      )}
    </div>
  );
};
