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
    path: "planet/:id",
    to: "/planet/",
  },
  {
    Component: ResidenPage,
    name: "Residents",
    path: "resident/:id",
    to: "/resident/",
  },
];
