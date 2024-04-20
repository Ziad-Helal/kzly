import { useRoutesHandler } from "@/hooks";

export default function App() {
  const routes = useRoutesHandler();

  return routes;
}
