import { HomePage } from "./pages/Home/HomePage";
import NewPollPage from "./pages/NewPoll";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/new-poll",
    element: <NewPollPage />,
  },
];
