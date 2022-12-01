import { PLANETS_URL } from "@/constants/api-urls";
import { planetsMock } from "@/mocks/planets.mock";
import { Planet } from "@/models/planet.model";
import { PlanetsResponse } from "@/models/planets.response";

export const getPlanets: (apiUrl?: string) => Promise<PlanetsResponse> = async (
  apiUrl
) => {
  // const res = await fetch(apiUrl ? apiUrl : PLANETS_URL);
  // const planetsResponse = await (res.json() as Promise<PlanetsResponse>);
  // return planetsResponse;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(planetsMock);
    }, 2000);
  });
};

export const getPlanetById = async (planetId: string) => {
  const res = await fetch(`${PLANETS_URL}/${planetId}`);
  const planetResponse = await (res.json() as Promise<Planet>);

  return planetResponse;
};
