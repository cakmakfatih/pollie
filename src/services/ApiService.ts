import axios, { AxiosInstance } from "axios";
import { ICreatePoll, IPoll } from "../shared/interfaces/poll.interface";
import { API_URL } from "../shared/constants";
import { IVote } from "../shared/interfaces/vote.interface";

export interface CreatePollResponse {
  id: string;
  remaining_seconds: number;
  is_votable: boolean;
  title: string;
  duration: string;
  created_at: string;
  votes_visible: boolean;
  votes_changable: boolean;
  is_private: boolean;
}

export interface GetPollDetailsResponse {
  id: string;
  options: {
    id: number;
    value: string;
  }[];
  votes:
    | null
    | {
        option: number;
      }[];
  remaining_seconds: number;
  title: string;
  votes_visible: boolean;
  votes_changable: boolean;
  user_vote: null | { option: number };
  created_at: string;
  is_votable: boolean;
  duration: string;
}

export interface VoteResponse {
  id: number;
  user: number;
  option: number;
  poll: string;
}

export interface GetPollsResponse {
  count: number;
  next?: string;
  previous?: string;
  results: IPoll[];
}

interface IApiService {
  createPoll(createPollData: ICreatePoll): Promise<CreatePollResponse>;
  getPollDetails(pollId: string): Promise<GetPollDetailsResponse>;
  getPolls(): Promise<GetPollsResponse>;
  votePoll(vote: IVote): Promise<VoteResponse>;
}

class ApiService implements IApiService {
  #httpClient: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.#httpClient = httpClient;
  }

  async getPolls(): Promise<GetPollsResponse> {
    const response = await this.#httpClient<GetPollsResponse>({
      url: "/api/polls/",
      method: "GET",
    });

    return response.data;
  }

  async createPoll(createPollData: ICreatePoll): Promise<CreatePollResponse> {
    const response = await this.#httpClient<CreatePollResponse>({
      url: "/api/polls/",
      method: "POST",
      data: createPollData,
    });

    return response.data;
  }

  async getPollDetails(pollId: string): Promise<GetPollDetailsResponse> {
    const response = await this.#httpClient<GetPollDetailsResponse>({
      url: `/api/polls/${pollId}`,
      method: "GET",
    });

    return response.data;
  }

  async votePoll(vote: IVote): Promise<VoteResponse> {
    const response = await this.#httpClient<VoteResponse>({
      url: "/api/votes/",
      method: "POST",
      data: vote,
    });

    return response.data;
  }
}

export const apiService = new ApiService(axios.create({ baseURL: API_URL }));
