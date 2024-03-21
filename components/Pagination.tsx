"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Pagination from "rc-pagination";
import "../node_modules/rc-pagination/assets/index.css";

const PaginationFC = ({ count }: { count: number | undefined }) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("pageNumber") || "1";

  function handlePageClick(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set("pageNumber", page.toString());
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="py-10 px-4 flex justify-center">
      <Pagination
        onChange={handlePageClick}
        className="flex justify-center items-center gap-2"
        showQuickJumper={false}
        showTitle={false}
        total={count}
        current={Number(page)}
      />
    </div>
  );
};

export default PaginationFC;
