import { PLANETS_URL } from "@/constants/api-urls";
import { planetsMock } from "@/mocks/planets.mock";
import { Planet } from "@/models/planet.model";
import { PlanetsResponse } from "@/models/planets.response";

export const getPlanets: (apiUrl?: string) => Promise<PlanetsResponse> = async (
  apiUrl
) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(planetsMock);
    }, 2000);
  });

  // const res = await fetch(apiUrl ? apiUrl : PLANETS_URL);
  // const planetsResponse = await (res.json() as Promise<PlanetsResponse>);
  // return planetsResponse;
};

export const getPlanetById = async (planetId: string): Promise<Planet> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(planetsMock.results[0]);
    }, 2000);
  });

  const res = await fetch(`${PLANETS_URL}/${planetId}`);
  const planetResponse = await (res.json() as Promise<Planet>);

  return planetResponse;
};
