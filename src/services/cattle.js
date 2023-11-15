import useSWR from "swr";
import fetcher from "../utils/fetcher";

export const useGetAllCattle = () => {
  return useSWR(`/cattle`, fetcher);
};

export const useGetCattleData = ({ id = 0, withStats = false }) => {
  return useSWR(`/farms/${id}/cattle/${withStats ? "/latest" : ""}`, fetcher);
};

export const useGetCattleImages = ({ id = 0 }) => {
  return useSWR(`/cattle/${id}/images`, fetcher);
};

export const useGetCattleStats = ({ id = 0 }) => {
  return useSWR(`/cattle/${id}/stats`, fetcher);
};

export const useGetCattleStatsLatest = ({ id = 0 }) => {
  return useSWR(`/cattle/${id}/stats/latest`, fetcher);
};
