import axios, { AxiosInstance } from "axios";
import { ICreatePoll } from "../types/Poll";

interface CreatePollResponse {
  id: string;
  remaining_seconds: number;
  is_votable: boolean;
  title: string;
  duration: string;
  created_at: string;
}

interface IApiService {}

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
}

export const apiService = new ApiService(
  axios.create({ baseURL: "http://localhost:8000" })
);
