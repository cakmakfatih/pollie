import { HomePage } from "./pages/Home/HomePage";
import NewPollPage from "./pages/NewPoll";
import PollPage from "./pages/Poll";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/new-poll",
    element: <NewPollPage />,
  },
  {
    path: "/polls/:pollId",
    element: <PollPage />,
  },
];
