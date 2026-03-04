import { useRoutes } from "react-router-dom";
import OverviewPiggyBanks from "../pages/OverviewPiggyBanks";
import NotFound from "../pages/NotFound";
import AddPiggyBank from "../pages/AddPiggyBank";
import AddParticipants from "../pages/AddParticipants";
import PiggyBankDetailsPage from "../pages/PiggyBankDetailsPage";


export function AppRoutes() {
  return useRoutes([
    { path: "/", element: <OverviewPiggyBanks /> },
    { path: "/piggybanks", element: <OverviewPiggyBanks /> },
    { path: "/piggybanks/add", element: <AddPiggyBank /> },
    { path: "/piggybanks/details/:id", element: <PiggyBankDetailsPage /> },
    { path: "/participants/add", element: <AddParticipants /> },
    { path: "*", element: <NotFound /> },
  ]);
}
