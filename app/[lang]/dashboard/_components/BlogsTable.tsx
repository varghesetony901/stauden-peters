"use client";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n.config";
import { Blogs } from "@prisma/client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import DeleteModal from "./DeleteModal";

const BlogsTable = ({
  data,
  locale
  
}: {
  data: Blogs[] | undefined;
  locale: Locale;
}) => {
  const tableHeaders = ["Main Title En", "Edit", "Delete"];
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const showModal = searchParams?.get("modal") === "true" && searchParams.has("id");
  const params = new URLSearchParams(searchParams);
  
  return (
    <div>
      <div className="max-w-full overflow-x-auto px-2 sm:px-6 pt-4">
        <table className=" table-auto ">
          <thead>
            <tr>
              {tableHeaders.map((header, index) => (
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
                <td className="px-4 py-2 text-sm text-left border-b border-gray-200  ">
                  <div className="max-h-20 overflow-y-auto">
                    {row.mainTitleEn}
                  </div>
                </td>

                <td className="px-4 py-2 text-sm text-left border-b border-gray-200">
                  <Link href={`/dashboard/blogs/edit/${row.id}`}>
                    <Button className="w-20">Edit</Button>
                  </Link>
                </td>
                <td className="px-4 py-2 text-sm text-left border-b border-gray-200">
                  <Link href={`/${locale}/dashboard/blogs?modal=true&id=${row.id}`}>
                    <Button>Delete</Button>
                  </Link>
                  {showModal && (
                    <DeleteModal isOpen={showModal} collectionName="blogs" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </div>
  );
};

export default BlogsTable;
