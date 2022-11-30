import { Planet } from "../models/planet.model";

export type PlanetInfo = Omit<
  Planet,
  "name" | "films" | "residents" | "url" | "created" | "edited"
>;

export type PlanetInfoKeys = keyof PlanetInfo;
