import { createContext } from "react";
import { SetState } from "@/types/SetState";
import { Resident } from "@/models/residents.model";

type ResidentsContextType = {
  residentsUrls: string[];
  selectedResident: Resident | null;
  setResidentsUrls: SetState<string[]>;
  setSelectedResident: SetState<Resident | null>;
};

export const ResidentsContext = createContext<ResidentsContextType>(
  {} as ResidentsContextType
);
