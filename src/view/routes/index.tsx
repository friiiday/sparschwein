import { useRoutes } from "react-router-dom";
import OverviewPiggyBanks from "../pages/OverviewPiggyBanks";
import NotFound from "../pages/NotFound";
import AddPiggyBank from "../pages/AddPiggyBank";
import AddParticipants from "../pages/AddParticipants";


export function AppRoutes() {
  return useRoutes([
    { path: "/", element: <OverviewPiggyBanks /> },
    { path: "/piggybanks", element: <OverviewPiggyBanks /> },
    { path: "/piggybanks/add", element: <AddPiggyBank /> },
    { path: "/participants/add", element: <AddParticipants /> },
    { path: "*", element: <NotFound /> },
  ]);
}
