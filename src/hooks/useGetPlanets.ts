import { useCallback, useContext, useEffect, useState, useRef } from "react";

import { getAllPlanets } from "@/services/planets.service";
import { IsLoadingContext } from "@/context/isLoading/IsLoadingContext";
import { ITEMS_PER_PAGE } from "@/constants/pagination";
import { Paginator } from "@/helpers/Paginator";
import { Planet } from "@/models/planet.model";

export const useGetPlanets = () => {
  const abortController = new AbortController();
  
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [paginator, setPaginator] = useState<Paginator<Planet>>();
  const [searchTerm, setSearchTerm] = useState("");

  const { setIsLoading } = useContext(IsLoadingContext);

  const orignalPlanetsRef = useRef<Planet[]>([]);

  useEffect(() => {
    setIsLoading(true);
    getAllPlanets(abortController).then(onGetPlanets);

    return () => {
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    const searchValue = searchTerm.toLowerCase();

    const filteredPlanets = orignalPlanetsRef.current.filter((planet) =>
      planet.name.toLowerCase().includes(searchValue)
    );

    const filteredPaginator = new Paginator(filteredPlanets, ITEMS_PER_PAGE);

    setPaginator(filteredPaginator);
    setPlanets(filteredPaginator.page(1) || []);
  }, [searchTerm]);

  const onGetPlanets = useCallback((planets: Planet[]) => {
    const newPaginator = new Paginator(planets, ITEMS_PER_PAGE);

    orignalPlanetsRef.current = planets;

    setPaginator(newPaginator);
    setPlanets(newPaginator.page(1) || []);
    setIsLoading(false);
  }, []);

  return {
    paginator,
    planets,
    searchTerm,
    setPlanets,
    setSearchTerm,
  };
};
