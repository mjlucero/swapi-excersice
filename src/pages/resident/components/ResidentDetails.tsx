import { genderMap } from "@/constants/gender-map";
import { removeUnderscore } from "@/helpers";
import { Resident } from "@/models/residents.model";
import { ResidentInfo, ResidentInfoKeys } from "@/types/ResidentInfo";

import "./residentDetail.scss";

interface ResidentDetailsProps {
  resident: Resident;
}

export const ResidentDetails = ({ resident }: ResidentDetailsProps) => {
  const {
    name,
    created,
    edited,
    films,
    homeworld,
    species,
    starships,
    url,
    vehicles,
    ...rest
  } = resident as Resident;

  const residentInfo: ResidentInfo = rest;

  return (
    <>
      {Object.keys(residentInfo).map((residentKey) => (
        <div className="resident-detail" key={residentKey}>
          <span>{removeUnderscore(residentKey)}</span> :{" "}
          {genderMap[residentInfo[residentKey as ResidentInfoKeys]] ||
            residentInfo[residentKey as ResidentInfoKeys]}
        </div>
      ))}
    </>
  );
};
