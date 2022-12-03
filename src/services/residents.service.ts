import { AbortService } from "./abort.service";
import { PEOPLE_URL } from "@/constants/api-urls";
import { PlanetsService } from "./planets.service";
import { Resident } from "@/models/residents.model";
import { ResidentsResponse } from "@/models/residents.response";

export class ResidentsService extends AbortService {
  constructor(protected planetsService: PlanetsService) {
    super();
  }

  async getResidentById(residentId: string): Promise<Resident | null> {
    try {
      const res = await fetch(`${PEOPLE_URL}/${residentId}`, {
        signal: this.controllerSignal,
      });

      return (await res.json()) as Promise<Resident>;
    } catch (error) {
      return null;
    }
  }

  async getResidentsByUrls(residentsUrl: string[]): Promise<Resident[]> {
    try {
      const residentsPromises: Promise<Resident>[] = residentsUrl.map(
        (residentUrl) =>
          fetch(residentUrl, { signal: this.controllerSignal })
            .then((res) => res.json())
            .catch((error) => {
              throw error;
            })
      );

      return await Promise.all(residentsPromises);
    } catch (error) {
      return [];
    }
  }

  async getResidentsByPlanetId(planetId: string): Promise<ResidentsResponse> {
    const planet = await this.planetsService.getPlanetById(planetId);

    if (planet) {
      const residents = await this.getResidentsByUrls(planet.residents);

      return {
        planetName: planet.name,
        residents,
      };
    }

    return {
      planetName: "",
      residents: [],
    };
  }
}
