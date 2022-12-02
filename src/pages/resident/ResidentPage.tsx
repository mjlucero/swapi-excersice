import { useGetResident } from "@/hooks/useGetResident";
import { ResidentDetails } from "./components/ResidentDetails";

export const ResidentPage = () => {
  const { resident } = useGetResident();

  return (
    <>
      {resident && (
        <>
          <h2>{resident.name}</h2>

          <ResidentDetails resident={resident} />
        </>
      )}
    </>
  );
};
