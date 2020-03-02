import Root from "components/routes/root";
import Trainer from "components/routes/trainer";
import { ComponentType } from "react";

interface Route {
  path: string;
  component: ComponentType,
  label: string;
}

const routes: Route[] = [
  {
    path: "/",
    component: Root,
    label: "Accueil",
  },
  {
    path: "/test",
    component: Trainer,
    label: "Formateur",
  }
];

export default routes;
