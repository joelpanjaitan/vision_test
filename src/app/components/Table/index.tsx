import { editPostData } from "../Pages/utils/editPostsData";
import { TableDto } from "@/app/dto/table.dto";

const Table = ({ rows, fetchPostData }: TableDto) => {
  return (
    <div className="overflow-x-auto">
      <table
        className="min-w-full rounded-lg border-separate border-spacing-0 relative"
        id={"id"}
      >
        <thead>
          <tr className="bg-white border-b">
            <th
              className="w-auto font-medium px-4 py-2 rounded-tl-lg border-l border-l-subdued border-t border-t-subdued"
              scope="col"
            >
              Title
            </th>
            <th className="w-auto font-medium px-4 py-2" scope="col">
              Category
            </th>
            <th
              className="w-[14px] font-medium px-4 py-2 rounded-tr-lg border-t border-t-subdued"
              scope="col"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="w-full">
          {rows?.map((row, rowIndex) => (
            <tr key={rowIndex} className="bg-gray-50">
              <td
                className="w-auto px-4 py-4 border-t border-t-gray-200 border-l border-l-gray-50"
                colSpan={1}
              >
                {row.Title}
              </td>
              <td className="w-auto text-center px-4 py-4 border-t border-t-gray-200 border-l border-l-gray-50">
                {row.Category}
              </td>
              <td className="w-[14px] px-4 py-4 border-t border-t-gray-200 border-r border-r-gray-50">
                <div className="flex gap-2">
                  <button>
                    <a href={`/edit/${row.ID}`}>
                      <i className="ri-pencil-line text-blue-400" />
                    </a>
                  </button>
                  <button
                    onClick={() => {
                      editPostData({ ...row, Status: "Trash" });
                      window.alert(
                        `Post with id:${row.ID} titled: ${row.Title} successfully moved to Trash`
                      );
                      fetchPostData?.();
                    }}
                  >
                    <i className="ri-delete-bin-line text-blue-400" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
