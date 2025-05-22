import { useLocation } from "react-router-dom";

export const useQueryParameter = (paramName) => {
  const location = useLocation();
  return new URLSearchParams(location.search).get(paramName);
};
