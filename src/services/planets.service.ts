import { Planet } from "@/models/planet.model";
import { PLANETS_URL } from "@/constants/api-urls";
import { PlanetsResponse } from "@/models/planets.response";

export const getPlanets = async (
  abortController: AbortController,
  apiUrl?: string
) => {
  try {
    const res = await fetch(apiUrl ? apiUrl : PLANETS_URL, {
      signal: abortController.signal,
    });
    const planetsResponse = await (res.json() as Promise<PlanetsResponse>);
    return planetsResponse;
  } catch (error) {
    return {
      count: 0,
      next: null,
      previous: null,
      results: [],
    };
  }
};

export const getAllPlanets = async (
  abortController: AbortController
): Promise<Planet[]> => {
  let planets: Planet[] = [];
  let nextUrl: string | null = PLANETS_URL;

  while (!!nextUrl) {
    const { next, results }: PlanetsResponse = await getPlanets(
      abortController,
      nextUrl
    );

    planets.push(...results);
    nextUrl = next;
  }

  return planets;
};

export const getPlanetById = async (
  planetId: string,
  abortController: AbortController
): Promise<Planet | null> => {
  try {
    const res = await fetch(`${PLANETS_URL}/${planetId}`, {
      signal: abortController.signal,
    });

    const planetResponse = await (res.json() as Promise<Planet>);

    return planetResponse;
  } catch (error) {
    return null;
  }
};
