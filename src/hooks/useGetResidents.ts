import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { BreadcrumbContext } from "@/context/breadcrumb/BreadcrumbContext";
import { IsLoadingContext } from "@/context/isLoading/IsLoadingContext";
import { Resident } from "@/models/residents.model";
import { ResidentsContext } from "@/context/residents/ResidentsContext";
import { ResidentsService } from "@/services/residents.service";
import { PlanetsService } from "@/services/planets.service";
import { ResidentsResponse } from "@/models/residents.response";

export const useGetResidents = () => {
  const residentsService = new ResidentsService(new PlanetsService());

  const { planetId } = useParams();
  const { residentsUrls } = useContext(ResidentsContext);
  const { isLoading, setIsLoading } = useContext(IsLoadingContext);
  const { updateBreadcrumbMap } = useContext(BreadcrumbContext);
  const [residents, setResidents] = useState<Resident[]>([]);

  useEffect(() => {
    setIsLoading(true);

    if (residentsUrls && residentsUrls.length > 0) {
      residentsService.getResidentsByUrls(residentsUrls).then(onGetResidents);
    } else {
      planetId &&
        residentsService
          .getResidentsByPlanetId(planetId)
          .then(onGetResidentsByPlanet);
    }

    return () => {
      residentsService.abortCalls();
    };
  }, []);

  const onGetResidentsByPlanet = useCallback(
    ({ planetName, residents }: ResidentsResponse) => {
      updateBreadcrumbMap("planet", planetName);
      setResidents(residents);
      setIsLoading(false);
    },
    []
  );

  const onGetResidents = useCallback((residentRes: Resident[]) => {
    setResidents(residentRes);
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    residents,
  };
};
