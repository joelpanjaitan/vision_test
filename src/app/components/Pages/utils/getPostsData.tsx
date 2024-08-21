import { getData } from "./apiConfig";

export async function getPostData(page?: number) {
  let finalUrl = `https://4db1-2001-448a-2002-3b6b-50a0-ab48-51df-4d82.ngrok-free.app/article/list`;
  if (page) finalUrl += `?limit=5&offset=${page}`;

  const { result, error } = await getData(finalUrl);
  return { result, error };
}

export async function getPostDetailData(id: string | string[]) {
  let finalUrl = `https://4db1-2001-448a-2002-3b6b-50a0-ab48-51df-4d82.ngrok-free.app/article`;
  if (id) finalUrl += `/${id}`;

  const { result, error } = await getData(finalUrl);
  return { result, error };
}
