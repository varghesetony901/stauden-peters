"use client";
import { deleteTag } from "@/actions/delete";
import { Button } from "@/components/ui/button";
import React from "react";
import { toast } from "sonner";

const DeleteButton = ({ id, type }: { id: string; type: string }) => {

  
  const handleClick = async () => {
    if(type === "blog-tags"){
      const resp = await deleteTag(id, type);
      if (resp.message) return toast.success(resp.message);
      if (resp.error) return toast.error(resp.error);
    }
    if(type === "photo-tags"){
      const resp = await deleteTag(id, type);
      if (resp.message) return toast.success(resp.message);
      if (resp.error) return toast.error(resp.error);
    }

  };

 
  return <Button onClick={handleClick}>Delete</Button>;
};

export default DeleteButton;
