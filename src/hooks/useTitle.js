import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Eshop`;
  }, [title]);
  return null;
};
