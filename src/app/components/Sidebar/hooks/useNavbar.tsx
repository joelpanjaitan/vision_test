import { useState } from "react";
const useNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return { isSidebarOpen, setIsSidebarOpen };
};

export default useNavbar;
