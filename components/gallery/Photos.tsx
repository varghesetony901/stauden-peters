"use client";
import { Masonry } from "react-plock";

interface PhotoProps {
  id: string;
  imgUrl: string;
  description: string;
  tagId: string;
}

const Photos = ({ photos }: { photos?: PhotoProps[] }) => {
  const items = photos?.map((item) => item.imgUrl);
  return (
    <div className="mt-10">

      {items && (
        <Masonry
          items={items}
          config={{
            columns: [1, 2, 3],
            gap: [12, 12, 12],
            media: [640, 1024, 1280,],
          }}
          render={(item, idx) => (
            <img
              key={idx}
              src={item}
              style={{ width: "100%", height: "auto"}}
              className="hover:scale-[102%] duration-300"
            />
          )}
        />
      )}
    </div>
  );
};

export default Photos;
