"use client";
import useCurrentPage from "./components/Pagination/hooks/useCurrentPage";
import usePagination from "./components/Pagination/hooks/usePagination";
import useGetPosts from "./components/Pages/hooks/useGetPosts";
import useNavbar from "./components/Sidebar/hooks/useNavbar";
import { Sidebar } from "./components/Sidebar/sidebar";
import usePage from "./components/Pages/hooks/usePage";
import Pagination from "./components/Pagination";
import PageTabs from "./components/Tabs";
import Table from "./components/Table";

export default function Home() {
  const { currentPage, setCurrentPage } = usePagination();
  const { isSidebarOpen, setIsSidebarOpen } = useNavbar();
  const { selectedTab, setSelectedTab } = usePage();
  const { tempPostsListData, loading, fetchPostData } = useGetPosts({
    selectedTab,
  });
  const { startItem, endItem } = useCurrentPage({
    currentPage,
    tempPostsListData,
  });
  return (
    <div className="flex">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        handleShowSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
        <div className="absolute top-0 left-24">
          <PageTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </div>
        {!loading && (
          <>
            <Table
              rows={tempPostsListData.slice(startItem - 1, endItem)}
              fetchPostData={fetchPostData}
            />
            <div className="flex flex-row w-2/4 justify-between">
              <div className="pt-4">
                Showing {startItem + "-" + endItem} of{" "}
                {tempPostsListData.length} data
              </div>
              <div>
                <Pagination
                  limit={5}
                  page={currentPage ?? 1}
                  setPage={setCurrentPage}
                  canNextPage={true}
                  canPrevPage={true}
                  total={tempPostsListData?.length ?? 0}
                />
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
