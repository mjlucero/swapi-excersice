import { PlanetsPage, PlanetPage, ResidentPage } from "../pages";
import { Route } from "@/models/route.model";

export const routes: Route[] = [
  {
    Component: PlanetsPage,
    crumbKey: "All Planets",
    path: "planets",
  },
  {
    Component: PlanetPage,
    crumbKey: "planet",
    path: "planets/:planetId",
  },
  {
    Component: ResidentPage,
    crumbKey: "resident",
    path: "planets/:planetId/people/:peopleId",
  },
];
