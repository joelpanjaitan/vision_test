import { PageTab } from "@/app/enum/Tabs";
import { useState } from "react";

const usePage = () => {
  const [selectedTab, setSelectedTab] = useState<string>(PageTab.PUBLISHED);

  return {
    setSelectedTab,
    selectedTab,
  };
};

export default usePage;
