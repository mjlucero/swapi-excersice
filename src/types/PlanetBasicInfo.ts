import { Planet } from "../models/planet.model";

export type PlanetBasicInfo = Omit<
  Planet,
  "films" | "residents" | "url" | "created" | "edited"
>;
