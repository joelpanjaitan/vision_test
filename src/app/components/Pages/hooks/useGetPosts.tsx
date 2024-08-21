import { getPostData } from "../utils/getPostsData";
import { PostsData } from "@/app/dto/page.dto";
import { useState, useEffect } from "react";
import { PageTab } from "@/app/enum/Tabs";

const useGetPosts = ({ selectedTab }: { selectedTab: string }) => {
  const [postsListData, setPostsListData] = useState<PostsData[]>([]);
  const [tempPostsListData, setTempPostsListData] = useState<PostsData[]>([]);
  const [publishListData, setPublishListData] = useState<PostsData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const fetchPostData = async () => {
    setLoading(true);
    const { result, error } = await getPostData();
    if (result && !error) {
      setPostsListData(result);
      setPublishListData(
        result.filter(
          (item: PostsData) => item.Status.toLowerCase() === "publish"
        )
      );
    }
    setLoading(false);
  };

  const adjustPostData = async (selectedTab: string) => {
    switch (selectedTab) {
      case PageTab.DRAFTS:
        setTempPostsListData(
          postsListData.filter((item) => item.Status.toLowerCase() === "draft")
        );
        break;
      case PageTab.PUBLISHED:
        setTempPostsListData(
          postsListData.filter(
            (item) => item.Status.toLowerCase() === "publish"
          )
        );
        break;
      case PageTab.TRASHED:
        setTempPostsListData(
          postsListData.filter((item) => item.Status.toLowerCase() === "trash")
        );
        break;
    }
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  useEffect(() => {
    adjustPostData(selectedTab);
  }, [selectedTab, postsListData]);

  return {
    setTempPostsListData,
    setPublishListData,
    tempPostsListData,
    setPostsListData,
    publishListData,
    postsListData,
    fetchPostData,
    loading,
  };
};

export default useGetPosts;
