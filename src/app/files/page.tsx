"use client";
import { Sidebar } from "../components/Sidebar/sidebar";
import useNavbar from "../components/Sidebar/hooks/useNavbar";
import Image from "next/image";
import Blog from "../components/Blog";
import usePagination from "../components/Pagination/hooks/usePagination";
import useGetPosts from "../components/Pages/hooks/useGetPosts";
import usePage from "../components/Pages/hooks/usePage";
import useCurrentPage from "../components/Pagination/hooks/useFilePage";
import Pagination from "../components/Pagination";
const PreviewPage = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useNavbar();
  const { currentPage, setCurrentPage } = usePagination();
  const { selectedTab, setSelectedTab } = usePage();
  const { publishListData, loading } = useGetPosts({ selectedTab });
  const { startItem, endItem } = useCurrentPage({
    currentPage,
    publishListData,
  });
  return (
    <>
      <div className="flex">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          handleShowSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
          <div className="w-full rounded-[20px] border border-subdued bg-background mb-6 p-4 flex flex-col gap-2">
            <Blog data={publishListData.slice(startItem - 1, endItem)} />
            <Pagination
              limit={1}
              page={currentPage ?? 1}
              setPage={setCurrentPage}
              canNextPage={true}
              canPrevPage={true}
              total={publishListData?.length ?? 0}
            />
          </div>
        </main>
      </div>
    </>
  );
};
export default PreviewPage;
