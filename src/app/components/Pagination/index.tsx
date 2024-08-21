"use client";
import { paginationProps } from "@/app/dto/page.dto";

const Pagination = ({
  page = 1,
  limit = 10,
  total = 0,
  canNextPage,
  setPage,
  canPrevPage,
}: paginationProps) => {
  const totalPage = Math.ceil(total / limit);

  function createPageOption(activePage: number, totalPage: number): number[] {
    if (activePage < 3) {
      const defaultOption = [1, 2, 3, 4, 5].filter((item) => item <= totalPage);
      return defaultOption.length > 0 ? defaultOption : [1];
    }

    const output: number[] = [];
    const maxPage = activePage + 2 <= totalPage ? activePage + 2 : totalPage;
    const minPage =
      activePage + 2 <= totalPage
        ? activePage - 2
        : activePage - (4 - (totalPage - activePage));
    for (let i = minPage; i <= maxPage; i++) {
      output.push(i);
    }
    return output.filter((item) => item > 0);
  }

  return (
    <div className="flex items-center gap-2 pt-4 w-fit ml-auto">
      <button
        onClick={() => {
          setPage(1);
        }}
        disabled={!canPrevPage || page === 1}
        className="disabled:text-disabled disabled:border-disabled rounded text-primary/20 hover:text-brand/75 border border-subdued hover:border-brand/75 inline-flex items-center justify-center w-7 h-7"
      >
        <i className="ri-arrow-left-double-line text-xl leading-none"></i>
      </button>
      <button
        onClick={() => {
          setPage(page - 1);
        }}
        disabled={!canPrevPage || page === 1}
        className="disabled:text-disabled disabled:border-disabled rounded text-primary/20 hover:text-brand/75 border border-subdued hover:border-brand/75 inline-flex items-center justify-center w-7 h-7"
      >
        <i className="ri-arrow-left-line text-xl leading-none"></i>
      </button>
      <div className="flex items-center border box-content border-border rounded">
        {createPageOption(page, totalPage).map((item, index, array) => {
          return (
            <button
              className={`${
                page === item
                  ? "border-focused border bg-surface-brand font-semibold text-brand"
                  : "text-primary hover:text-brand"
              } w-7 h-7 hover:bg-surface-brand rounded -m-[1px] flex items-center justify-center`}
              key={item}
              onClick={() => {
                setPage(item);
              }}
            >
              {item}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => {
          setPage(page + 1);
        }}
        disabled={!canNextPage || page === totalPage}
        className="disabled:text-disabled disabled:border-disabled rounded text-primary/20 hover:text-brand/75 border border-subdued hover:border-brand/75 inline-flex items-center justify-center w-7 h-7"
      >
        <i className="ri-arrow-right-line text-xl leading-none"></i>
      </button>
      <button
        onClick={() => {
          setPage(totalPage);
        }}
        disabled={!canNextPage || page === totalPage}
        className="disabled:text-disabled disabled:border-disabled rounded text-primary/20 hover:text-brand/75 border border-subdued hover:border-brand/75 inline-flex items-center justify-center w-7 h-7"
      >
        <i className="ri-arrow-right-double-line text-xl leading-none"></i>
      </button>
    </div>
  );
};

export default Pagination;
