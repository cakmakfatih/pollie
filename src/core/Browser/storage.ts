import { IPoll } from "../../shared/interfaces/poll.interface";

const POLLS_KEY = "POLLS_KEY";

interface ILocalStorage {
  savePoll(poll: IPoll): void;
  getPolls(): IPoll[];
}

class LocalStorage implements ILocalStorage {
  constructor() {}

  savePoll(poll: IPoll) {
    const savedPolls = JSON.parse(
      localStorage.getItem(POLLS_KEY) || "[]"
    ) as IPoll[];
    const newPolls = [poll, ...savedPolls];

    localStorage.setItem(POLLS_KEY, JSON.stringify(newPolls));
  }

  getPolls(): IPoll[] {
    const savedPolls = JSON.parse(
      localStorage.getItem(POLLS_KEY) || "[]"
    ) as IPoll[];

    return savedPolls;
  }
}

const storage = new LocalStorage();
export default storage;
