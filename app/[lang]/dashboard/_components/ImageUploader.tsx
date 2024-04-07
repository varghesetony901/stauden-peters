"use client";
import { fetchPhotoTags } from "@/actions/tags";
import { UploadPhotos } from "@/actions/uploadPhoto";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

type Props = {
  id: string;
  tagNameEn: string;
  tagNameDe: string;
};

const Page = () => {
  const [options, setOptions] = useState<Props[]>();
  const [tagEn, setTagEn] = useState<string>("");

  const [data, setData] = useState<FormData>();
  const [error, setError] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClearClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the file input
    }
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const formData = new FormData();
    if (files) {
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }
      setData(formData);
    }
    if (files) {
      setError("");
    }
  };


  const handleClick = async () => {
    if (!data || !tagEn ) {
      setError("please fill all fields");
      return;
    }
    setIsLoading(true);
    const resp = await UploadPhotos(data, tagEn);

    if (resp.message) {
      toast.success(resp.message);
      setError("");
    }
    if (resp.error) {
      toast.error(resp.error);
    }

    setTagEn("");

    handleClearClick();
    setIsLoading(false);
  };

  async function fetchOptions() {
    const resp = await fetchPhotoTags();
    setOptions(resp.response);
  }

  useEffect(() => {
    fetchOptions();
  }, []);
  return (
    <div className=" max-w-96 px-2 sm:px-6 flex flex-col gap-3">
      <Input
        type="file"
        multiple
        onChange={changeHandler}
        ref={fileInputRef}
        className="cursor-pointer"
      />
      <div>
        <Label>Select Tag</Label>
        <select
          value={tagEn}
          onChange={(e) => setTagEn(e.target.value)}
          className="w-full border h-10 px-3 rounded-md cursor-pointer"
        >
          <option value="" disabled={tagEn !== ""}>
            Select an option
          </option>
          {options &&
            options.map((option, index) => (
              <option key={index} value={option.id}>
                {option.tagNameEn}
              </option>
            ))}
        </select>
      </div>
    
      {error && <p className="text-red-500">{error}</p>}
      <Button disabled={isLoading} onClick={handleClick}>
        Upload
      </Button>
    </div>
  );
};

export default Page;
