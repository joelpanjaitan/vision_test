import { Dispatch, SetStateAction } from "react";

export interface ArrayProps {
  [key: string | number]: any;
}

export interface PostsData {
  ID: number;
  Title: string;
  Content: string;
  Category: string;
  Created_date: string;
  Updated_date: string;
  Status: string;
}

export interface paginationProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  limit: number;
  canPrevPage: Boolean;
  canNextPage: Boolean;
  total: number;
}

export interface useCurrentPageDto {
  currentPage: number;
  tempPostsListData: PostsData[];
}

export interface usePublishPageDto {
  currentPage: number;
  publishListData: PostsData[];
}
