export type Duration = "EM" | "1M" | "5M" | "10M";

export interface ICreatePoll {
  title: string;
  options: { value: string }[];
  duration: Duration;
}
