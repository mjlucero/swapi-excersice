import { ResidentsCardList } from "./components/ResidentsCardList";
import { useGetResidents } from "@/hooks/useGetResidents";

export const PlanetPage = () => {
  const { residents } = useGetResidents();

  return (
    <div className="residents-page">
      <div className="residents-page__cards">
        <ResidentsCardList residents={residents} />
      </div>
    </div>
  );
};
