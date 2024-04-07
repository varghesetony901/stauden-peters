"use server";

import axios from "axios";

export const videoData = async () => {
  const query = process.env.YOUTUBE_API as string;

  const res = await axios.get(query).then((result) => {
    return result.data;
  });

  return { res };
};
