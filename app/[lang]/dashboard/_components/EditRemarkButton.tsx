"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import RemarksModal from "./RemarksModal";

const EditRemarkButton = ({ id, type }: { id: string; type: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = async () => {
    setIsOpen(true);
  };
  return (
    <div>
      <Button onClick={handleClick}>Edit Remark</Button>
      {isOpen && <div>
        <RemarksModal isOpen={isOpen} setIsOpen= {setIsOpen} id = {id}  type = {type} modalType = "editRemark"/>
        </div>}
    </div>
  );
};
export default EditRemarkButton;
