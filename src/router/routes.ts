import { PlanetsPage, PlanetPage, ResidenPage } from "../pages";
import { Route } from "@/models/route.model";

export const routes: Route[] = [
  {
    Component: PlanetsPage,
    name: "Planets",
    path: "planets",
    to: "/planets",
  },
  {
    Component: PlanetPage,
    name: "Planet",
    path: "planets/:planetId",
    to: "/planets",
  },
  {
    Component: ResidenPage,
    name: "People",
    path: "planets/:planetId/people/:peopleId",
    to: "/people",
  },
];
