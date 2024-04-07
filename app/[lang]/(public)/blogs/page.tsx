import { fetchBlogPosts } from "@/actions/blog";
import BlogCard from "@/components/BlogCard";
import PaginationFC from "@/components/Pagination";
import Wrapper from "@/components/animation-wrapper/Wrapper";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { Locale } from "@/i18n.config";

const Page = async ({
  searchParams,
  params,
}: {
  searchParams: { pageNumber: string };
  params: { lang: Locale };
}) => {
  const pageNumber = searchParams?.pageNumber || "1";
  const resp = await fetchBlogPosts(parseInt(pageNumber), 10);
  const posts = resp?.blogPosts;
  const count = resp?.count;
  const locale = params.lang;

  return (
    <Wrapper>
      <MaxWidthWrapper className="pt-10 lg:pt-24 ">
        <h1 className="font-bold  pb-6 lg:pb-0 text-center text-3xl">Blogs</h1>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 lg:mt-6  gap-6">
          {posts &&
            posts.map((post) => (
              <BlogCard
                key={post?.id}
                tagEn={post.tag?.tagNameEn}
                tagDe={post.tag?.tagNameDe}
                mainTitleEn={post.mainTitleEn}
                mainTitleDe={post.mainTitleDe}
                user={post.createdBy.name}
                createdAt={post.createdAt}
                id={post.id}
                imgUrl={post.imgUrl}
                descriptionEn={post.descriptionEn}
                descriptionDe={post.descriptionDe}
                locale={locale}
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
