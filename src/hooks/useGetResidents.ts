import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { BreadcrumbContext } from "@/context/breadcrumb/BreadcrumbContext";
import { IsLoadingContext } from "@/context/isLoading/IsLoadingContext";
import { Resident } from "@/models/residents.model";
import { ResidentsContext } from "@/context/residents/ResidentsContext";
import {
  getResidentsByPlanetId,
  getResidentsByUrls,
} from "@/services/residents.service";

export const useGetResidents = () => {
  const abortController = new AbortController();

  const { planetId } = useParams();
  const { residentsUrls } = useContext(ResidentsContext);
  const { setIsLoading } = useContext(IsLoadingContext);
  const { updateBreadcrumbMap } = useContext(BreadcrumbContext);
  const [residents, setResidents] = useState<Resident[]>([]);

  useEffect(() => {
    setIsLoading(true);

    if (residentsUrls && residentsUrls.length > 0) {
      getResidentsByUrls(residentsUrls, abortController).then(onGetResidents);
    } else {
      planetId &&
        getResidentsByPlanetId(planetId, abortController).then(
          ({ planetName, residents }) => {
            updateBreadcrumbMap("planet", planetName);
            onGetResidents(residents);
          }
        );
    }

    return () => {
      abortController.abort();
    };
  }, []);

  const onGetResidents = useCallback((residentsRes: Resident[]) => {
    setResidents(residentsRes);
    setIsLoading(false);
  }, []);

  return {
    residents,
  };
};
