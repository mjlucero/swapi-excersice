import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { BreadcrumbContext } from "@/context/breadcrumb/BreadcrumbContext";
import { IsLoadingContext } from "@/context/isLoading/IsLoadingContext";
import { PlanetsService } from "@/services/planets.service";
import { Resident } from "@/models/residents.model";
import { ResidentsContext } from "@/context/residents/ResidentsContext";
import { ResidentsService } from "@/services/residents.service";

export const useGetResident = () => {
  const planetsService = new PlanetsService();
  const residentsService = new ResidentsService(planetsService);

  const { planetId, peopleId } = useParams();
  const { selectedResident } = useContext(ResidentsContext);
  const { setIsLoading } = useContext(IsLoadingContext);
  const { updateBreadcrumbMap } = useContext(BreadcrumbContext);
  const [resident, setResident] = useState<Resident | null>();

  useEffect(() => {
    if (selectedResident) {
      setResident(selectedResident);
    } else if (planetId && peopleId) {
      setIsLoading(true);
      getPlanetAndResident(planetId, peopleId).then(onGetPlanetAndResident);
    }

    return () => {
      planetsService.abortCalls();
      residentsService.abortCalls();
    };
  }, []);

  const getPlanetAndResident = useCallback(
    async (planetId: string, peopleId: string) => {
      const planet = await planetsService.getPlanetById(planetId);
      const resident = await residentsService.getResidentById(peopleId);

      return {
        planetName: planet?.name || "",
        resident,
      };
    },
    []
  );

  const onGetPlanetAndResident = useCallback(
    ({
      planetName,
      resident,
    }: {
      planetName: string;
      resident: Resident | null;
    }) => {
      updateBreadcrumbMap("planet", planetName);
      updateBreadcrumbMap("resident", resident?.name || "");

      setResident(resident);

      setIsLoading(false);
    },
    []
  );

  return {
    resident,
  };
};
