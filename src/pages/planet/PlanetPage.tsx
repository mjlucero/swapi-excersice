import { ResidentsCardList } from "./components/ResidentsCardList";
import { Spinner } from "@/components/spinner/Spinner";
import { useGetResidents } from "@/hooks/useGetResidents";

export const PlanetPage = () => {
  const { residents, isLoading } = useGetResidents();

  return (
    <div className="residents-page">
      {isLoading && (
        <div className="residents-page__spinner-container">
          <Spinner />
        </div>
      )}
      {!isLoading && (
        <div className="residents-page__cards">
          <ResidentsCardList residents={residents} />
        </div>
      )}
    </div>
  );
};
