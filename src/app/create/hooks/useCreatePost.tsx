import { createPostData } from "@/app/components/Pages/utils/createPostsData";
import { CreatePostsDataDto, CreatePostsInput } from "@/app/dto/create.dto";
import { useState } from "react";

const useCreatePost = () => {
  const [postData, setPostData] =
    useState<CreatePostsInput>(CreatePostsDataDto);
  const handleSubmit = async () => {
    if (
      postData.Category.trim() &&
      postData.Content.trim() &&
      postData.Status.trim() &&
      postData.Title.trim()
    ) {
      const { result, error } = await createPostData(postData);
      if (result && !error) {
        window.alert("Create data success");
        setPostData(CreatePostsDataDto);
      } else {
        window.alert("Create data failed");
      }
    }
  };
  return { postData, setPostData, handleSubmit };
};

export default useCreatePost;
