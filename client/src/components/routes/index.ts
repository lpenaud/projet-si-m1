import Trainer from "components/routes/trainer";
import { ComponentType } from "react";
import Lessons from "./lessons";

interface Route {
  path: string;
  component: ComponentType,
  label: string;
}

const routes: Route[] = [
  {
    path: "/",
    component: Lessons,
    label: "Accueil",
  },
  {
    path: "/test",
    component: Trainer,
    label: "Formateur",
  }
];

export default routes;
