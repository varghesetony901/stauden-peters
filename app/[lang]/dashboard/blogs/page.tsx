import { fetchBlogPosts } from "@/actions/blog";
import { Button } from "@/components/ui/button";
import { headers } from "next/headers";
import Link from "next/link";
import BlogsTable from "../_components/BlogsTable";
import Title from "../_components/Title";
import PaginationFC from "@/components/Pagination";
import { Locale } from "@/i18n.config";

const Page = async ({
  searchParams, params
}: {
  searchParams: { pageNumber: string; modal: string }, params : {lang : Locale}
}) => {
  const headersList = headers();
  const url = headersList.get("next-url");
  const param = new URLSearchParams();
  param.set("modal", "true");

  const pageNumber = searchParams?.pageNumber || "1";
  const showModal = searchParams?.modal === "true" && param.has("id");

  const blogsData = await fetchBlogPosts(Number(pageNumber), 10);
  const count = blogsData.count;

  const data = blogsData?.blogPosts;

  return (
    <div className="max-w-3xl">
      <Title title="Blogs" />
      <Link href={"/dashboard/blogs/add"} className="px-2 sm:px-6">
        <Button>Add Blog</Button>
      </Link>
      <BlogsTable data={data} locale = {params.lang}/>
      <div>
        <PaginationFC count={count} />
      </div>
    </div>
  );
};

export default Page;
