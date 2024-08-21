export interface CreatePostsInput {
  ID: number;
  Title: string;
  Content: string;
  Category: string;
  Created_date: string;
  Updated_date: string;
  Status: string;
}

export const CreatePostsDataDto = {
  ID: 0,
  Title: "",
  Content: "",
  Category: "",
  Created_date: "",
  Updated_date: "",
  Status: "",
};
