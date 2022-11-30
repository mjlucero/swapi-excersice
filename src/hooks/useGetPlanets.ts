import { useCallback, useEffect, useState } from "react";
import { Planet } from "../models/planet.model";
import { PlanetsResponse } from "../models/planets.response";
import { getPlanets } from "../services/planets.service";
import { Pagination } from "../types/pagination";

export const useGetPlanets = () => {
  const [nextUrl, setNextUrl] = useState<string>("");
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    count: 0,
    next: null,
    previous: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPlanets().then(onGetPlanets);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlanets(nextUrl).then(onGetPlanets);
  }, [nextUrl]);

  const onGetPlanets = ({
    count,
    next,
    previous,
    results,
  }: PlanetsResponse) => {
    setPlanets(results);
    setPagination({
      count,
      next,
      previous,
    });
    setIsLoading(false);
  };

  return {
    isLoading,
    pagination,
    planets,
    setNextUrl,
  };
};
