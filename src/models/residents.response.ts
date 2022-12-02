import { Resident } from "./residents.model";

export interface ResidentsResponse {
  planetName: string;
  residents: Resident[];
}
