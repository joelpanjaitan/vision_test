import { PostsData } from "./page.dto";

export interface TableDto {
  rows: PostsData[];
  fetchPostData?: () => void;
}
