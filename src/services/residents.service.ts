import { PEOPLE_URL } from "@/constants/api-urls";
import { residentsMock, residentsResponseMock } from "@/mocks/residents.mock";
import { Resident } from "@/models/residents.model";
import { ResidentsResponse } from "@/models/residents.response";
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

export const getResidentsByPlanetId = async (
  planetId: string
): Promise<ResidentsResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(residentsResponseMock);
    }, 2000);
  });

  const planet = await getPlanetById(planetId);
  const residents = await getResidentsByUrls(planet.residents);

  return {
    planetName: planet.name,
    residents,
  };
};

export const getResidentById = async (
  residentId: string
): Promise<Resident> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(residentsResponseMock.residents[0]);
    }, 2000);
  });

  const res = await fetch(`${PEOPLE_URL}/${residentId}`);
  const resident = (await res.json()) as Promise<Resident>;

  return resident;
};
