import { useCallback, useContext, useEffect, useState, useRef } from "react";

import { IsLoadingContext } from "@/context/isLoading/IsLoadingContext";
import { ITEMS_PER_PAGE } from "@/constants/pagination";
import { Paginator } from "@/helpers/Paginator";
import { Planet } from "@/models/planet.model";
import { PlanetsService } from "@/services/planets.service";

export const useGetPlanets = () => {
  const planetService = new PlanetsService();

  const [planets, setPlanets] = useState<Planet[]>([]);
  const [paginator, setPaginator] = useState<Paginator<Planet>>();
  const [searchTerm, setSearchTerm] = useState("");

  const { isLoading, setIsLoading } = useContext(IsLoadingContext);

  const orignalPlanetsRef = useRef<Planet[]>([]);

  useEffect(() => {
    setIsLoading(true);
    planetService.getAllPlanets().then(onGetPlanets);

    return () => {
      planetService.abortCalls();
    };
  }, []);

  useEffect(() => {
    const searchValue = searchTerm.toLowerCase();

    const filteredPlanets = orignalPlanetsRef.current.filter((planet) =>
      planet.name.toLowerCase().includes(searchValue)
    );

    const filteredPlanetsPaginator = new Paginator(
      filteredPlanets,
      ITEMS_PER_PAGE
    );

    setPaginator(filteredPlanetsPaginator);
    setPlanets(filteredPlanetsPaginator.page(1) || []);
  }, [searchTerm]);

  const onGetPlanets = useCallback((planets: Planet[]) => {
    const newPaginator = new Paginator(planets, ITEMS_PER_PAGE);

    orignalPlanetsRef.current = planets;

    setPaginator(newPaginator);
    setPlanets(newPaginator.page(1) || []);
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    paginator,
    planets,
    searchTerm,
    setPlanets,
    setSearchTerm,
  };
};
