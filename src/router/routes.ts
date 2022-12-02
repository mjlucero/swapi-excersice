import { PlanetsPage, PlanetPage, ResidenPage } from "../pages";
import { Route } from "@/models/route.model";

export const routes: Route[] = [
  {
    Component: PlanetsPage,
    name: "All Planets",
    path: "planets",
  },
  {
    Component: PlanetPage,
    name: "Planet",
    path: "planets/:planetId",
  },
  {
    Component: ResidenPage,
    name: "Resident",
    path: "planets/:planetId/people/:peopleId",
  },
];
