"use client";

import DeleteModal from "@/app/[lang]/dashboard/_components/DeleteModal";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdDeleteOutline } from "react-icons/md";
import { Masonry } from "react-plock";

interface PhotoProps {
  id: string;
  imgUrl: string;
  tagId: string;
}

const Photos = ({
  photos,
  showDelete,
}: {
  photos?: PhotoProps[];
  showDelete?: boolean;
}) => {
  const items = photos;
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const showModal = searchParams?.get("modal") === "true" && searchParams.has("id");
  const params = new URLSearchParams(searchParams);

  const handleModal = (photoId : string) => {
    params.set("modal", "true");
    params.set("id", photoId);
    replace(`${pathname}?${params.toString()}`);
  }
  

  
  return (
    <div className="mt-10">
      {items && (
        <Masonry
          items={items}
          config={{
            columns: [1, 2, 3],
            gap: [12, 12, 12],
            media: [640, 1024, 1280],
          }}
          render={(item, idx) => (
            <>
              <DeleteModal
                collectionName="photos"
                isOpen={showModal}   
              />

              <div className="relative">
                {showDelete && (
                  <div
                   onClick={()=>handleModal(item.id)}
                    className="absolute top-4 right-2 z-20 hover:scale-[105%] duration-200 bg-white rounded-full p-1 cursor-pointer"
                  >
                    <MdDeleteOutline size={25} />
                  </div>
                )}
              </div>
              <img
                key={idx}
                src={item.imgUrl}
                style={{ width: "100%", height: "auto" }}
                className="hover:scale-[102%] duration-300 relative z-10 hover:brightness-75"
              />
            </>
          )}
        />
      )}
    </div>
  );
};

export default Photos;
