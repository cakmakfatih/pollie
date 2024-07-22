export type Duration = "EM" | "1M" | "5M" | "10M";

export interface ICreatePoll {
  title: string;
  options: { value: string }[];
  duration: Duration;
  votes_visible: boolean;
  votes_changable: boolean;
  is_private: boolean;
}

export interface IPoll {
  id: string;
  remaining_seconds: number;
  is_votable: boolean;
  title: string;
  duration: string;
  votes_visible: boolean;
  votes_changable: boolean;
  is_private: boolean;
  created_at: string;
}
