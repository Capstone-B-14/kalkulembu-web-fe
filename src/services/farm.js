import useSWR from "swr";
import fetcher from "../utils/fetcher";

export const useGetFarms = () => {
  return useSWR(`/farms`, fetcher);
};
