import { PLANETS_URL } from "@/constants/api-urls";
import { planetsMock } from "@/mocks/planets.mock";
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
