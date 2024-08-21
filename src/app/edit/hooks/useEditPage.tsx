import { getPostDetailData } from "@/app/components/Pages/utils/getPostsData";
import { CreatePostsDataDto, CreatePostsInput } from "@/app/dto/create.dto";
import { editPostData } from "@/app/components/Pages/utils/editPostsData";
import { useState, useEffect } from "react";

const useEditPost = ({ id }: { id: string | string[] }) => {
  const [postData, setPostData] =
    useState<CreatePostsInput>(CreatePostsDataDto);

  const fetchPostData = async () => {
    const { result, error } = await getPostDetailData(id);
    if (result && !error) setPostData(result);
  };

  const handleEdit = async () => {
    if (
      postData.Category.trim() &&
      postData.Content.trim() &&
      postData.Status.trim() &&
      postData.Title.trim()
    ) {
      const { result, error } = await editPostData(postData);
      if (result && !error) {
        window.alert("Edit data success");
        setPostData(CreatePostsDataDto);
        window.location.href = "/";
      } else {
        window.alert("Edit data failed");
      }
    }
  };

  useEffect(() => {
    if (id) fetchPostData();
  }, [id]);

  return { postData, setPostData, handleEdit };
};

export default useEditPost;
