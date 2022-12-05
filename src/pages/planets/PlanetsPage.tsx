import { useContext, useEffect } from "react";

import { ErrorMessage } from "@/components/error-message/ErrorMessage";
import { Input } from "@/components/input/Input";
import { InputChangeEvent } from "@/types/Events";
import { Pagination } from "./components/pagination/Pagination";
import { PlanetCardList } from "./components/planet-card-list/PlanetCardList";
import { ResidentsContext } from "@/context/residents/ResidentsContext";
import { useGetPlanets } from "@/hooks/useGetPlanets";

import "./planetsPage.scss";


export const PlanetsPage = () => {
  const { setResidentsUrls } = useContext(ResidentsContext);
  const {
    planets,
    paginator,
    searchTerm,
    setPlanets,
    setSearchTerm,
    isLoading,
  } = useGetPlanets();

  useEffect(() => {
    setResidentsUrls([]);
  }, []);

  const handleFilterChange = ({ target }: InputChangeEvent) => {
    const { value } = target;

    setSearchTerm(value);
  };

  const handleNext = () => {
    setPlanets(paginator?.next() || []);
  };

  const handlePrevious = () => {
    setPlanets(paginator?.previous() || []);
  };

  const handlePageChange = (pageNumber: number) => {
    setPlanets(paginator?.page(pageNumber) || []);
  };

  return (
    <div className="planets-page">
      <div className="planets-page__filter">
        <Input
          type="text"
          placeholder="Search Planet"
          onChange={handleFilterChange}
          value={searchTerm}
        />
      </div>
      {planets.length === 0 && !isLoading && <ErrorMessage />}
      {planets.length > 0 && (
        <div className="planets-page__cards">
          <PlanetCardList planets={planets} />
        </div>
      )}
      {paginator && (
        <Pagination
          currentPage={paginator.currentPage}
          hasNext={paginator.hasNext()}
          hasPrevious={paginator.hasPrevious()}
          onNext={handleNext}
          onPageChange={handlePageChange}
          onPrevious={handlePrevious}
          totalPages={paginator.totalPages || 0}
        />
      )}
    </div>
  );
};
