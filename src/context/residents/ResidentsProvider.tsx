import { Resident } from "@/models/residents.model";
import { useState } from "react";
import { ResidentsContext } from "./ResidentsContext";

interface ResidentsContexProviderProps {
  children: React.ReactNode;
}

export function ResidentsContextProvider({
  children,
}: ResidentsContexProviderProps) {
  const [residentsUrls, setResidentsUrls] = useState<string[]>([]);
  const [selectedResident, setSelectedResident] = useState<Resident | null>(
    null
  );

  return (
    <ResidentsContext.Provider
      value={{
        residentsUrls,
        selectedResident,
        setResidentsUrls,
        setSelectedResident,
      }}
    >
      {children}
    </ResidentsContext.Provider>
  );
}
