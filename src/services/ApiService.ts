import axios, { AxiosInstance } from "axios";
import { ICreatePoll } from "../shared/interfaces/poll.interface";
import { API_URL } from "../shared/constants";

export interface CreatePollResponse {
  id: string;
  remaining_seconds: number;
  is_votable: boolean;
  title: string;
  duration: string;
  created_at: string;
}

export interface GetPollDetailsResponse {
  id: string;
  options: {
    id: number;
    value: string;
  }[];
  votes?: {
    option: number;
  }[];
  remaining_seconds: number;
  title: string;
  created_at: string;
}

interface IApiService {
  createPoll(createPollData: ICreatePoll): Promise<CreatePollResponse>;
  getPollDetails(pollId: string): Promise<GetPollDetailsResponse>;
}

class ApiService implements IApiService {
  #httpClient: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.#httpClient = httpClient;
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
}

export const apiService = new ApiService(axios.create({ baseURL: API_URL }));
