import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ResidentsContext } from "@/context/ResidentsContext";
import {
  getResidentsByPlanet,
  getResidentsByUrls,
} from "@/services/residents.service";
import { Resident } from "@/models/resident.model";

export const useGetResidents = () => {
  const { planetId } = useParams();
  const { residentsUrls } = useContext(ResidentsContext);
  const [residents, setResidents] = useState<Resident[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (residentsUrls && residentsUrls.length > 0) {
      getResidentsByUrls(residentsUrls).then(onGetResidents);
    } else {
      planetId && getResidentsByPlanet(planetId).then(onGetResidents);
    }
  }, []);

  const onGetResidents = useCallback((residentsResponse: Resident[]) => {
    setResidents(residentsResponse);
    setIsLoading(false);
  }, []);

  return {
    residents,
    isLoading,
  };
};
