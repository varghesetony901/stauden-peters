import { fetchPhotoData } from "@/actions/photo-data";
import { fetchPhotoTags } from "@/actions/tags";
import PaginationFC from "@/components/Pagination";
import Wrapper from "@/components/animation-wrapper/Wrapper";
import PhotoVideoSwitch from "@/components/gallery/PhotoVideoSwitch";
import Photos from "@/components/gallery/Photos";
import Tags from "@/components/gallery/Tags";
import Videos from "@/components/gallery/Videos";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";

const Page = async ({
  searchParams,
}: {
  searchParams: { pageNumber: string; tag?: string; type: string };
}) => {
  const pageNumber = searchParams.pageNumber || "1";
  const tag = searchParams.tag || "All";
  const type = searchParams.type || "photo";

  const photoData = await fetchPhotoData(Number(pageNumber), 10, tag);
  const photos = photoData?.photos;
  const count = photoData?.count;

  const photoTagsData = await fetchPhotoTags();
  const photoTags = photoTagsData?.response?.map((tag) => tag.tagName);

  return (
    <Wrapper>
    <MaxWidthWrapper className="py-12 ">
      <h1 className="font-bold pb-2 text-center text-3xl">Gallery</h1>
      <div>
        <PhotoVideoSwitch />
        {type === "photo" && (
          <div>
            <Tags photoTags={photoTags} />
            <Photos photos={photos} />
            <PaginationFC count={count} />
          </div>
        )}
        {type === "video" && (
          <Videos />
        )}
      </div>
    </MaxWidthWrapper>
    </Wrapper>
  );
};

export default Page;
