"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import EditModal from "./EditModal";

const EditButton = ({ id, type }: { type: string; id: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    
    <Button className="w-20" onClick={() => setIsOpen(true)}>
      Edit
    </Button>
    {isOpen && 
    
    <EditModal isOpen={isOpen} setIsOpen={setIsOpen} id={id} type={type} />
    }

    </>
  );
};

export default EditButton;
