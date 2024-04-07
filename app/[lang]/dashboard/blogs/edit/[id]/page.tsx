import { fetchBlogPostById } from "@/actions/blog";
import { fetchAllBlogTags } from "@/actions/tags";
import { fetchUsers } from "@/actions/users";

import React from "react";
import Title from "../../../_components/Title";
import BlogForm from "../../../_components/BlogForm";

const page = async ({ params }: { params: { id: string } }) => {
  const usersData = await fetchUsers();

  const usersList = () => {
    if (usersData.users) {
      const users = usersData?.users.map((user) => {
        return { id: user.id, name: user.name };
      });
      return users;
    }
  };

  const users = usersList();

  const blogTags = await fetchAllBlogTags();

  const tags = blogTags.response;
  const blogId = params.id;
  const blogData = await fetchBlogPostById(blogId);
  const blog = blogData.blogPost;

  return (
    <div>
      <Title title="Edit Blog" />

      <BlogForm
        blogId={blogId}
        type="edit"
        users={users}
        tags={tags}
        userId={blog?.userId}
        mainTitleEn={blog?.mainTitleEn}
        mainTitleDe={blog?.mainTitleDe}
        descriptionEn={blog?.descriptionEn}
        descriptionDe={blog?.descriptionDe}
        imgUrl={blog?.imgUrl}
        tagId={blog?.tagId}
        subTitleEn1={blog?.subTitleEn1 ?? ""}
        subTitleDe1={blog?.subTitleDe1 ?? ""}
        subTitleEn2={blog?.subTitleEn2 ?? ""}
        subTitleDe2={blog?.subTitleDe2 ?? ""}
        subTitleEn3={blog?.subTitleEn3 ?? ""}
        subTitleDe3={blog?.subTitleDe3 ?? ""}
        subTitleEn4={blog?.subTitleEn4 ?? ""}
        subTitleDe4={blog?.subTitleDe4 ?? ""}
        paragraphEn1={blog?.paragraphEn1 ?? ""}
        paragraphDe1={blog?.paragraphDe1 ?? ""}
        paragraphEn2={blog?.paragraphEn2 ?? ""}
        paragraphDe2={blog?.paragraphDe2 ?? ""}
        paragraphEn3={blog?.paragraphEn3 ?? ""}
        paragraphDe3={blog?.paragraphDe3 ?? ""}
        paragraphEn4={blog?.paragraphEn4 ?? ""}
        paragraphDe4={blog?.paragraphDe4 ?? ""}
      />
    </div>
  );
};

export default page;
