import { Main_PageLayout } from "@/components/layouts";
import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const Home = lazy(() => import("@/pages/home"));
const NotFound = lazy(() => import("@/pages/not-found-page"));

export const useRoutesHandler = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Main_PageLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return routes;
};
