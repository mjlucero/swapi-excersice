import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Card } from "@/components/card/Card";
import { getResourceUrlFromApiUrl } from "@/helpers";
import { Resident } from "@/models/residents.model";
import { ResidentsContext } from "@/context/residents/ResidentsContext";

import "./residents-card-list.scss";
import { BreadcrumbContext } from "@/context/breadcrumb/BreadcrumbContext";

interface ResidentsCardListProps {
  residents: Resident[];
}

export const ResidentsCardList = ({ residents }: ResidentsCardListProps) => {
  const { setSelectedResident } = useContext(ResidentsContext);
  const { updateBreadcrumbMap } = useContext(BreadcrumbContext);
  const { pathname: currentRoute } = useLocation();
  const navigate = useNavigate();

  const handleResidentClick = (resident: Resident) => {
    setSelectedResident(resident);

    const residentUrl = getResourceUrlFromApiUrl(resident.url);

    updateBreadcrumbMap("resident", resident.name);
    navigate(currentRoute + residentUrl);
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
