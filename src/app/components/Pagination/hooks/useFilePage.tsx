import { usePublishPageDto } from "@/app/dto/page.dto";
import { useState, useEffect } from "react";

const useCurrentPage = ({
  currentPage,
  publishListData,
}: usePublishPageDto) => {
  const [startItem, setStartItem] = useState(0);
  const [endItem, setEndItem] = useState(0);
  useEffect(() => {
    if (typeof currentPage === undefined) {
      setStartItem(0);
      setEndItem(1);
    } else if (
      typeof currentPage === "number" ||
      typeof currentPage === "string"
    ) {
      const tempData = Number(currentPage);
      if (publishListData.length < 1) {
        setStartItem(0);
        setEndItem(publishListData?.length);
        return;
      }
      if (tempData !== 1) {
        setStartItem((tempData - 1) * 1 + 1);
        setEndItem(tempData * 1);
      } else {
        setStartItem(tempData * 1);
        setEndItem(tempData * 1);
      }
    }
  }, [currentPage, publishListData]);
  useEffect(() => {
    setStartItem(0);
    setEndItem(1);
  }, []);
  return { startItem, endItem };
};

export default useCurrentPage;
