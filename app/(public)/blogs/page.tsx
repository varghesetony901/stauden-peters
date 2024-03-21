import { fetchBlogPosts } from "@/actions/blog";
import BlogCard from "@/components/BlogCard";
import PaginationFC from "@/components/Pagination";
import Wrapper from "@/components/animation-wrapper/Wrapper";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";

const Page = async ({ searchParams }: { searchParams: { pageNumber: string } }) => {

  const pageNumber = searchParams?.pageNumber || "1";
  const resp = await fetchBlogPosts(parseInt(pageNumber), 10);
  const posts = resp?.blogPosts;
  const count = resp?.count;

  return (
    <Wrapper>
    <MaxWidthWrapper className="py-12">
      <h1 className="font-bold  pb-6 lg:pb-0 text-center text-3xl">Blogs</h1>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 lg:mt-6 place-items-center gap-6">
        {posts &&
          posts.map((post) => (
            <BlogCard
              key={post?.id}
              tag={post.tag?.tagName}
              mainTitle={post.mainTitle}
              user={post.createdBy.name}
              createdAt={post.createdAt}
              id={post.id}
              imgUrl={post.imgUrl}
              description={post.description}
            />
          ))}
      </div>
      <div className="mt-6">
        <PaginationFC key={count} count={count} />
      </div>
    </MaxWidthWrapper>
    </Wrapper>
  );
};

export default Page;
