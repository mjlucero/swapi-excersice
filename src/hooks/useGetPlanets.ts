import { useCallback, useContext, useEffect, useState } from "react";

import { getPlanets } from "@/services/planets.service";
import { Pagination } from "@/types/Pagination";
import { Planet } from "@/models/planet.model";
import { PlanetsResponse } from "@/models/planets.response";
import { IsLoadingContext } from "@/context/isLoading/IsLoadingContext";

export const useGetPlanets = () => {
  const { setIsLoading } = useContext(IsLoadingContext);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    count: 0,
    next: null,
    previous: null,
  });

  useEffect(() => {
    getPlanets().then(onGetPlanets);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlanets(nextUrl).then(onGetPlanets);
  }, [nextUrl]);

  const onGetPlanets = useCallback(
    ({ count, next, previous, results }: PlanetsResponse) => {
      setPlanets(results);
      setPagination({
        count,
        next,
        previous,
      });

      setIsLoading(false);
    },
    []
  );

  return {
    pagination,
    planets,
    setNextUrl,
  };
};
