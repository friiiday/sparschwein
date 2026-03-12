import { useRoutes } from "react-router-dom";
import OverviewPiggyBanks from "../pages/OverviewPiggyBanks";
import NotFound from "../pages/NotFound";
import AddPiggyBank from "../pages/AddPiggyBank";
import AddParticipants from "../pages/AddParticipants";
import PiggyBankDetailsPage from "../pages/PiggyBankDetailsPage";


export function AppRoutes() {
  return useRoutes([
    { path: "/", element: <OverviewPiggyBanks /> },
    { path: "*", element: <NotFound /> },
    
    // Piggy Banks
    { path: "/piggybanks", element: <OverviewPiggyBanks /> },
    { path: "/piggybanks/add", element: <AddPiggyBank /> },
    { path: "/piggybanks/details/:id", element: <PiggyBankDetailsPage /> },

    // Participants
    { path: "/participants/add", element: <AddParticipants /> },
    { path: "/participants/add", element: <AddParticipants /> },
  ]);
}
