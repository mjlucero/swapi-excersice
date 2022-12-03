import { getPlanetById } from "./planets.service";
import { PEOPLE_URL } from "@/constants/api-urls";
import { Resident } from "@/models/residents.model";
import { ResidentsResponse } from "@/models/residents.response";

export const getResidentsByUrls = async (
  residentsUrl: string[],
  abortController: AbortController
): Promise<Resident[]> => {
  try {
    const residentsPromises: Promise<Resident>[] = residentsUrl.map(
      (residentUrl) =>
        fetch(residentUrl, { signal: abortController.signal })
          .then((res) => res.json())
          .catch((error) => {
            throw error;
          })
    );

    return await Promise.all(residentsPromises);
  } catch (error) {
    return [];
  }
};

export const getResidentsByPlanetId = async (
  planetId: string,
  abortController: AbortController
): Promise<ResidentsResponse> => {
  const planet = await getPlanetById(planetId, abortController);

  if (planet) {
    const residents = await getResidentsByUrls(
      planet.residents,
      abortController
    );

    return {
      planetName: planet.name,
      residents,
    };
  }

  return {
    planetName: "",
    residents: [],
  };
};

export const getResidentById = async (
  residentId: string,
  abortController: AbortController
): Promise<Resident | null> => {
  try {
    const res = await fetch(`${PEOPLE_URL}/${residentId}`, {
      signal: abortController.signal,
    });
    const resident = (await res.json()) as Promise<Resident>;

    return resident;
  } catch (error) {
    return null;
  }
};
