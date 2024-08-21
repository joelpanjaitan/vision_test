import { postData } from "./apiConfig";

export async function createPostData(body: Object) {
  let finalUrl = `https://4db1-2001-448a-2002-3b6b-50a0-ab48-51df-4d82.ngrok-free.app/article`;

  const { result, error } = await postData(finalUrl, body);
  return { result, error };
}
