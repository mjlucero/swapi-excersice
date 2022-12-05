import { ErrorMessage } from "@/components/error-message/ErrorMessage";
import { ResidentsCardList } from "./components/ResidentsCardList";
import { useGetResidents } from "@/hooks/useGetResidents";

export const PlanetPage = () => {
  const { residents, isLoading } = useGetResidents();

  return (
    <div className="residents-page">
      {residents.length === 0 && !isLoading && <ErrorMessage />}
      <div className="residents-page__cards">
        <ResidentsCardList residents={residents} />
      </div>
    </div>
  );
};
