import { apiClient } from "../xhr/apiClient.ts";
import type {AxiosResponse} from "axios";

export const fetchUsers = (): Promise<AxiosResponse> => {
  return apiClient.get('?results=30');
};
