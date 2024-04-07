import React from 'react'
import Title from '../_components/Title'
import { Label } from '@/components/ui/label'
import ImageUploader from '../_components/ImageUploader'
import { fetchPhotoData } from '@/actions/photo-data'
import Photos from '@/components/gallery/Photos'
import PaginationFC from '@/components/Pagination'
import Tags from '@/components/gallery/Tags'
import { fetchPhotoTags } from '@/actions/tags'

const Page = async ({
  searchParams,
}: {
  searchParams: { pageNumber: string; tag?: string;};
}) => {
  const tag = searchParams.tag || "All";
  const pageNumber = searchParams.pageNumber || "1";
  const photoData = await fetchPhotoData(Number(pageNumber), 10, tag);
  const photos = photoData?.photos;
  const count = photoData?.count;
  const photoTagsData = await fetchPhotoTags();
  const photoTagsEn = photoTagsData?.response?.map((tag) => tag.tagNameEn);

  return (
    <div className='flex flex-col gap-2'>
      <Title title='Photos' />
      <Label className='px-2 sm:px-6'>Add New Photos</Label>
      <ImageUploader/>
      <div className='max-w-7xl px-2 sm:px-6'>
      <Tags photoTags={photoTagsEn} />
      <Photos photos={photos} showDelete = {true}/>
      </div>
      <PaginationFC count={count} />
      
    </div>
  )
}

export default Page