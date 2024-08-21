import { putData } from "./apiConfig";
import { PostsData } from "@/app/dto/page.dto";

export async function editPostData(body: PostsData) {
  let finalUrl = `https://4db1-2001-448a-2002-3b6b-50a0-ab48-51df-4d82.ngrok-free.app/article/${body.ID}`;

  const { result, error } = await putData(finalUrl, body);
  return { result, error };
}
