import { fetchPhotoTagData, fetchPhotoTagsCount } from "@/actions/tags";
import PaginationFC from "@/components/Pagination";
import DeleteButton from "../_components/DeleteButton";
import TagsForm from "../_components/TagsForm";
import Title from "../_components/Title";
import EditButton from "../_components/EditButton";

const Page = async ({
  searchParams,
}: {
  searchParams: { pageNumber: string };
}) => {
  const pageNumber = searchParams.pageNumber || "1";
  const photoTagsData = await fetchPhotoTagData(Number(pageNumber), 10);
  const countData = await fetchPhotoTagsCount();
  const count = countData?.count;
  const data = photoTagsData?.response;
  const headers = ["Tag Name En", "Tag Name De","Edit", "Delete"];

  return (
    <div>
      <Title title="Photo Tags" />
      <div className="max-w-full overflow-x-auto px-2 sm:px-6">
        <table className="table-auto ">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-2 text-left text-sm border-b border-gray-200 bg-gray-200 capitalize"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="px-4 py-2 text-sm text-left border-b border-gray-200 overflow-y-auto">
                  {row.tagNameEn}
                </td>
                <td className="px-4 py-2 text-sm text-left border-b border-gray-200 overflow-y-auto">
                  {row.tagNameDe}
                </td>
                <td className="px-4 py-2 text-sm text-left border-b border-gray-200">
                  <EditButton type="photo-tags" id={row.id} />
                </td>
                <td className="px-4 py-2 text-sm text-left border-b border-gray-200">
                  <DeleteButton type="photo-tags" id={row.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <PaginationFC count={count} />
      </div>
      <div className="px-2 sm:px-6 py-6">
        <TagsForm type="photo" />
      </div>
    </div>
  );
};

export default Page;
