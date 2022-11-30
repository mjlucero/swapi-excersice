import { PlanetsResponse } from "../models/planets.response";

export type Pagination = Omit<PlanetsResponse, "results">;
