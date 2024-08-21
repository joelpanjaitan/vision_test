"use client";
import useNavbar from "../components/Sidebar/hooks/useNavbar";
import { Sidebar } from "../components/Sidebar/sidebar";
import classNames from "classnames";
import useCreatePost from "./hooks/useCreatePost";
const CreatePage = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useNavbar();
  const { setPostData, postData, handleSubmit } = useCreatePost();
  return (
    <>
      <div className="flex">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          handleShowSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
          <div className="w-full rounded-[20px] border border-subdued bg-background mb-6 p-4 flex flex-col gap-2">
            <div>
              <label
                className={classNames(
                  "inline-block text-sm font-medium mb-1",
                  "text-primary"
                )}
                htmlFor={"id"}
              >
                Title <span className="text-critical"> *</span>
              </label>
              <input
                className={classNames(
                  "w-full py-2 px-4 inner-border placeholder:text-subdued focus:outline-none text-primary text-sm rounded-[32px] min-h-[40px] focus-visible:outline-none",
                  "pr-9",
                  "inner-border-subdued hover:inner-border-focused focus:inner-border-focused"
                )}
                value={postData.Title}
                onChange={(event) =>
                  setPostData({ ...postData, Title: event.currentTarget.value })
                }
              />
            </div>
            <div>
              <label
                className={classNames(
                  "inline-block text-sm font-medium mb-1",
                  "text-primary"
                )}
                htmlFor={"id"}
              >
                Content<span className="text-critical"> *</span>
              </label>
              <input
                className={classNames(
                  "w-full py-2 px-4 inner-border placeholder:text-subdued focus:outline-none text-primary text-sm rounded-[32px] min-h-[40px] focus-visible:outline-none",
                  "pr-9",
                  "inner-border-subdued hover:inner-border-focused focus:inner-border-focused"
                )}
                value={postData.Content}
                onChange={(event) =>
                  setPostData({
                    ...postData,
                    Content: event.currentTarget.value,
                  })
                }
              />
            </div>
            <div>
              <label
                className={classNames(
                  "inline-block text-sm font-medium mb-1",
                  "text-primary"
                )}
                htmlFor={"id"}
              >
                Category<span className="text-critical"> *</span>
              </label>
              <input
                className={classNames(
                  "w-full py-2 px-4 inner-border placeholder:text-subdued focus:outline-none text-primary text-sm rounded-[32px] min-h-[40px] focus-visible:outline-none",
                  "pr-9",
                  "inner-border-subdued hover:inner-border-focused focus:inner-border-focused"
                )}
                value={postData.Category}
                onChange={(event) =>
                  setPostData({
                    ...postData,
                    Category: event.currentTarget.value,
                  })
                }
              />
            </div>
            <div className="flex flex-row justify-end gap-2 px-4 pt-2">
              <button
                className="rounded-[20px] bg-white inner-border inner-border-blue-500 px-4 py-2 disabled:bg-surface-disabled disabled:inner-border-disabled text-primary"
                onClick={() => {
                  setPostData({ ...postData, Status: "Publish" });
                  handleSubmit();
                }}
                disabled={
                  !postData.Category.trim() ||
                  !postData.Content.trim() ||
                  !postData.Title.trim()
                }
              >
                Publish
              </button>
              <button
                className="rounded-[20px] bg-white inner-border inner-border-blue-500 px-4 py-2 disabled:bg-surface-disabled disabled:inner-border-disabled text-primary"
                onClick={() => {
                  setPostData({ ...postData, Status: "Draft" });
                  handleSubmit();
                }}
                disabled={
                  !postData.Category.trim() ||
                  !postData.Content.trim() ||
                  !postData.Title.trim()
                }
              >
                Draft
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default CreatePage;
