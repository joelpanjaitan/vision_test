import { PostsData } from "@/app/dto/page.dto";

const Blog = ({ data }: { data: PostsData[] }) => {
  return (
    data &&
    data.map((item) => (
      <>
        <div className="head text-3xl font-bold mb-4 border-solid">
          {item.Title}
        </div>
        <div className="flex gap-3">
          <div className="long-text text-lg">{item.Content}</div>
          <div className="long-text text-lg">{item.Category}</div>
        </div>
      </>
    ))
  );
};

export default Blog;
