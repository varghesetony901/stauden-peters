"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import RemarksModal from "./RemarksModal";

const ActionButton = ({ id, type }: { id: string; type: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = async () => {
    setIsOpen(true)
  };
  return (
    <div>
      <Button onClick={handleClick}>Resolve</Button>
      {isOpen && <div>
        <RemarksModal isOpen={isOpen} setIsOpen= {setIsOpen} id = {id}  type = {type} modalType = "remark"/>
        </div>}
    </div>
  );
};

export default ActionButton;
