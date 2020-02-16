import Root from "components/routes/root";
import Test from "components/routes/test";
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
    component: Test,
    label: "Test",
  }
];

export default routes;
