import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Card } from "@/components/card/Card";
import { getResourceUrlFromApiUrl } from "@/helpers";
import { Resident } from "@/models/resident.model";
import { ResidentsContext } from "@/context/ResidentsContext";

import "./residents-card-list.scss";

interface ResidentsCardListProps {
  residents: Resident[];
}

export const ResidentsCardList = ({ residents }: ResidentsCardListProps) => {
  const { pathname: currentRoute } = useLocation();
  const navigate = useNavigate();
  const { setSelectedResident } = useContext(ResidentsContext);

  const handleResidentClick = (resident: Resident) => {
    setSelectedResident(resident);

    const residentUrl = getResourceUrlFromApiUrl(resident.url);

    navigate(currentRoute + residentUrl, { state: resident.name });
  };

  return (
    <>
      {residents.map((resident, index) => (
        <div key={index} onClick={() => handleResidentClick(resident)}>
          <Card title={resident.name}>
            <div>Gender: {resident.gender}</div>
            <div>Birth Year: {resident.birth_year}</div>
          </Card>
        </div>
      ))}
    </>
  );
};
