import { useCurrentPageDto } from "@/app/dto/page.dto";
import { useState, useEffect } from "react";

const useCurrentPage = ({
  currentPage,
  tempPostsListData,
}: useCurrentPageDto) => {
  const [startItem, setStartItem] = useState(0);
  const [endItem, setEndItem] = useState(0);
  useEffect(() => {
    if (typeof currentPage === undefined) {
      setStartItem(1);
      setEndItem(5);
    } else if (
      typeof currentPage === "number" ||
      typeof currentPage === "string"
    ) {
      const tempData = Number(currentPage);
      if (tempPostsListData.length < 5) {
        setStartItem(1);
        setEndItem(tempPostsListData.length);
        return;
      }
      if (tempData !== 1) {
        setStartItem((tempData - 1) * 5 + 1);
        setEndItem(tempData * 5);
      } else {
        setStartItem(tempData * 1);
        setEndItem(tempData * 5);
      }
    }
  }, [currentPage, tempPostsListData]);
  useEffect(() => {
    setStartItem(1);
    setEndItem(5);
  }, []);
  return { startItem, endItem };
};

export default useCurrentPage;
