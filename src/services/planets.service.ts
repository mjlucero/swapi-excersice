import { AbortService } from "./abort.service";
import { Planet } from "@/models/planet.model";
import { PLANETS_URL } from "@/constants/api-urls";
import { PlanetsResponse } from "@/models/planets.response";

export class PlanetsService extends AbortService {
  constructor() {
    super();
  }

  async getPlanets(apiUrl?: string) {
    try {
      const res = await fetch(apiUrl ? apiUrl : PLANETS_URL, {
        signal: this.controllerSignal,
      });

      return await (res.json() as Promise<PlanetsResponse>);
    } catch (error) {
      return {
        count: 0,
        next: null,
        previous: null,
        results: [],
      };
    }
  }

  async getAllPlanets(): Promise<Planet[]> {
    let planets: Planet[] = [];
    let nextUrl: string | null = PLANETS_URL;

    while (!!nextUrl) {
      const { next, results }: PlanetsResponse = await this.getPlanets(nextUrl);

      planets.push(...results);
      nextUrl = next;
    }

    return planets;
  }

  async getPlanetById(planetId: string): Promise<Planet | null> {
    try {
      const res = await fetch(`${PLANETS_URL}/${planetId}`, {
        signal: this.controllerSignal,
      });

      return await (res.json() as Promise<Planet>);
    } catch (error) {
      return null;
    }
  }
}
