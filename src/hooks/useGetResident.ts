import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { BreadcrumbContext } from "@/context/breadcrumb/BreadcrumbContext";
import { getPlanetById } from "@/services/planets.service";
import { getResidentById } from "@/services/residents.service";
import { IsLoadingContext } from "@/context/isLoading/IsLoadingContext";
import { Resident } from "@/models/residents.model";
import { ResidentsContext } from "@/context/residents/ResidentsContext";

export const useGetResident = () => {
  const abortController = new AbortController();
  
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
      abortController.abort();
    };
  }, []);

  const getPlanetAndResident = useCallback(
    async (planetId: string, peopleId: string) => {
      const planet = await getPlanetById(planetId, abortController);
      const resident = await getResidentById(peopleId, abortController);

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
