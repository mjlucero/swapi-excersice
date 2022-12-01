import { residentsMock } from "@/mocks/residents.mock";
import { Resident } from "@/models/resident.model";
import { getPlanetById } from "./planets.service";

export const getResidentsByUrls = async (
  residentsUrl: string[]
): Promise<Resident[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(residentsMock);
    }, 2000);
  });

  const residentsPromises: Promise<Resident>[] = residentsUrl.map(
    (residentUrl) => fetch(residentUrl).then((res) => res.json())
  );

  return await Promise.all(residentsPromises);
};

export const getResidentsByPlanet = async (
  planetId: string
): Promise<Resident[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(residentsMock);
    }, 2000);
  });

  const planet = await getPlanetById(planetId);

  return getResidentsByUrls(planet.residents);
};
