import { Resident } from "@/models/residents.model";

export type ResidentInfo = Omit<
  Resident,
  | "created"
  | "edited"
  | "films"
  | "homeworld"
  | "species"
  | "starships"
  | "url"
  | "vehicles"
  | "name"
>;

export type ResidentInfoKeys = keyof ResidentInfo;
