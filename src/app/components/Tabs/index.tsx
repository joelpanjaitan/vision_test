import { PageTab } from "../../enum/Tabs";
import { PageTabsDto } from "@/app/dto/pagination.dto";

const PageTabs = ({ setSelectedTab, selectedTab }: PageTabsDto) => {
  return (
    <ul className="flex flex-wrap sm:text-sm xxs:text-base text-[10px] font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 mt-4">
      <li className="mr-2">
        <a
          className={
            "cursor-pointer " +
            (selectedTab === PageTab.PUBLISHED
              ? "inline-block sm:p-4 p-1 text-action-secondary-default bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
              : "inline-block sm:p-4 p-1 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300")
          }
          onClick={() => setSelectedTab(PageTab.PUBLISHED)}
        >
          Published
        </a>
      </li>
      <li className="mr-2" onClick={() => setSelectedTab(PageTab.DRAFTS)}>
        <a
          aria-current="page"
          className={
            "cursor-pointer " +
            (selectedTab === PageTab.DRAFTS
              ? "inline-block sm:p-4 p-1 text-action-secondary-default bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
              : "inline-block sm:p-4 p-1 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300")
          }
        >
          Drafts
        </a>
      </li>
      <li className="mr-2" onClick={() => setSelectedTab(PageTab.TRASHED)}>
        <a
          aria-current="page"
          className={
            "cursor-pointer " +
            (selectedTab === PageTab.TRASHED
              ? "inline-block sm:p-4 p-1 text-action-secondary-default bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
              : "inline-block sm:p-4 p-1 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300")
          }
        >
          Trashed
        </a>
      </li>
    </ul>
  );
};

export default PageTabs;
