import React from "react";

import { fetchUsers } from "@/actions/users";
import { fetchAllBlogTags } from "@/actions/tags";
import Title from "../../_components/Title";
import BlogForm from "../../_components/BlogForm";


const Page = async () => {
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

  return (
    <div>
      <Title title="Add Blog" />
      <BlogForm type="add" users={users} tags={tags} />
    </div>
  );
};

export default Page;
