import { ErrorMessage } from "@/components/error-message/ErrorMessage";
import { ResidentDetails } from "./components/ResidentDetails";
import { useGetResident } from "@/hooks/useGetResident";

export const ResidentPage = () => {
  const { resident, isLoading } = useGetResident();

  return (
    <>
      {!resident && !isLoading && <ErrorMessage />}
      {resident && (
        <>
          <h2>{resident.name}</h2>
          <ResidentDetails resident={resident} />
        </>
      )}
    </>
  );
};
