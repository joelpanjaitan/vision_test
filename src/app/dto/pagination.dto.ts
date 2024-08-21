import { Dispatch, SetStateAction } from "react";

export interface PageTabsDto {
  setSelectedTab: Dispatch<SetStateAction<string>>;
  selectedTab: string;
}
