"use client";
import { createBlog, editBlog } from "@/actions/blog";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { toast } from "sonner";

type CreatedByProps = {
  id: string;
  name: string | null;
};

type TagsProp = {
  id: string;
  tagNameEn: string;
  tagNameDe: string;
};

interface BlogProps {
  type: string;
  blogId?: string;
  users?: CreatedByProps[];
  tags?: TagsProp[];
  mainTitleEn?: string;
  mainTitleDe?: string;
  descriptionEn?: string;
  descriptionDe?: string;
  imgUrl?: string;
  tagId?: string;
  userId?: string;
  subTitleEn1?: string;
  subTitleDe1?: string;
  subTitleEn2?: string;
  subTitleDe2?: string;
  subTitleEn3?: string;
  subTitleDe3?: string;
  subTitleEn4?: string;
  subTitleDe4?: string;
  paragraphEn1?: string;
  paragraphDe1?: string;
  paragraphEn2?: string;
  paragraphDe2?: string;
  paragraphEn3?: string;
  paragraphDe3?: string;
  paragraphEn4?: string;
  paragraphDe4?: string;
}

const BlogForm = ({ ...props }: BlogProps) => {
  const router = useRouter();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [success, setSuccess] = useState<string>();
  const [error, setError] = useState<string>();
  const myRef = useRef<HTMLInputElement>(null);

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create object URL
      setPreviewUrl(imageUrl); // Set preview URL in state
    }
  };

  const users = props.users;
  const tags = props.tags;
  const handleRemove = () => {
    setPreviewUrl(null);
    if (myRef.current) {
      myRef.current.value = ""; // Clear the file input
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    if (props.type === "add") {
      const resp = await createBlog(formData);
      if (resp.message) {
        setSuccess(resp.message);
        toast.success(resp.message);
        router.push("/dashboard/blogs");
      }
      setError(resp.error);
    }
    if (props.type === "edit") {
      const resp = await editBlog(formData, props?.blogId);
      if (resp.message) {
        setSuccess(resp.message);
        toast.success(resp.message);
        router.push("/dashboard/blogs");
      }
      setError(resp.error);
    }
  };
  return (
    <div className="max-w-3xl">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-2 sm:px-6 w-full">
        {/* createdBy */}
        <div>
          <Label>Created by</Label>
          <select
            defaultValue={props.userId}
            className="w-full border h-10 px-3 rounded-md cursor-pointer"
            name="userId"
            required
          >
            <option value="">Select an option</option>
            {users &&
              users.map((user, index) => (
                <option key={index} value={user.id}>
                  {user.name}
                </option>
              ))}
          </select>
        </div>

        {/* Main Title En */}
        <div>
          <Label>Main Title English</Label>
          <Input
            defaultValue={props?.mainTitleEn}
            type="text"
            name="mainTitleEn"
            required
          />
        </div>

        {/* Main Title De */}
        <div>
          <Label>Main Title German</Label>
          <Input
            defaultValue={props?.mainTitleDe}
            type="text"
            name="mainTitleDe"
            required
          />
        </div>

        {/* Description En */}
        <div>
          <Label>Description English</Label>
          <Textarea
            defaultValue={props?.descriptionEn}
            name="descriptionEn"
            required
            className="min-h-24"
          />
        </div>

        {/* Description De */}
        <div>
          <Label>Description German</Label>
          <Textarea
            defaultValue={props?.descriptionDe}
            name="descriptionDe"
            required
            className="min-h-24"
          />
        </div>

        {/*Image*/}

        <div>
          <Label>Image</Label>
          {props?.imgUrl && (
            <div className="flex flex-col gap-2 py-2">
              <div className="max-w-64">
                <Image
                  src={props?.imgUrl}
                  alt="Blog Image"
                  width={100}
                  height={100}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto"
                  }} />
              </div>
              <p className="text-red-700">Existing Image</p>
            </div>
          )}

          <div className="max-w-64">
            <Input
              type="file"
              name="imgUrl"
              accept="image/*"
              onChange={handleFileInputChange}
              required={props.imgUrl === undefined}
              className="cursor-pointer"
              ref={myRef}
            />
            {previewUrl && (
              <div className="flex flex-col gap-2 py-2">
                <div className="max-w-64 flex flex-col gap-2">
                  <Image
                    src={previewUrl}
                    alt="Blog Image"
                    width={100}
                    height={100}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto"
                    }} />
                  <div className="flex flex-col gap-1">
                    <p className="text-red-700">New Image</p>
                    <p
                      onClick={handleRemove}
                      className="cursor-pointer bg-black py-1.5 px-3 text-white rounded-md w-24 text-center"
                    >
                      Remove
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tag En*/}
        <div>
          <Label>Tag</Label>
          <select
            className="w-full border h-10 px-3 rounded-md cursor-pointer"
            name="tagId"
            required
            defaultValue={props.tagId}
          >
            <option value="">Select an option</option>
            {tags &&
              tags.map((tag, index) => (
                <option key={index} value={tag.id}>
                  {tag.tagNameEn}
                </option>
              ))}
          </select>
        </div>
        
        {/* Tag De
        <div>
          <Label>Tag German</Label>
          <select
            className="w-full border h-10 px-3 rounded-md cursor-pointer"
            name="tagId"
            required
            defaultValue={props.tagId}
          >
            <option value="">Select an option</option>
            {tags &&
              tags.map((tag, index) => (
                <option key={index} value={tag.id}>
                  {tag.tagNameDe}
                </option>
              ))}
          </select>
        </div> */}

        {/* Subtitle1 En */}
        <div>
          <Label>Sub Title1 English</Label>
          <Input defaultValue={props.subTitleEn1} type="text" name="subTitleEn1" />
        </div>

        {/* Subtitle1 De*/}
        <div>
          <Label>Sub Title1 German</Label>
          <Input defaultValue={props.subTitleDe1} type="text" name="subTitleDe1" />
        </div>

        {/* Paragraph1 En*/}
        <div>
          <Label>Paragraph 1 English</Label>
          <Textarea
            defaultValue={props.paragraphEn1}
            name="paragraphEn1"
            className="min-h-24"
          />
        </div>


        {/* Paragraph1 De*/}
        <div>
          <Label>Paragraph 1 German</Label>
          <Textarea
            defaultValue={props.paragraphDe1}
            name="paragraphDe1"
            className="min-h-24"
          />
        </div>


        {/* Subtitle2 En*/}
        <div>
          <Label>Sub Title2 English</Label>
          <Input defaultValue={props.subTitleEn2} name="subTitleEn2" />
        </div>

        {/* Subtitle2 De*/}
        <div>
          <Label>Sub Title2 German</Label>
          <Input defaultValue={props.subTitleDe2} name="subTitleDe2" />
        </div>

        {/* Paragraph2 En*/}
        <div>
          <Label>Paragraph 2 English</Label>
          <Textarea
            defaultValue={props.paragraphEn2}
            name="paragraphEn2"
            className="min-h-24"
          />
        </div>

        {/* Paragraph2 De*/}
        <div>
          <Label>Paragraph 2 German</Label>
          <Textarea
            defaultValue={props.paragraphDe2}
            name="paragraphDe2"
            className="min-h-24"
          />
        </div>


        {/* Subtitle3 En*/}
        <div>
          <Label>Sub Title3 English</Label>
          <Input defaultValue={props.subTitleEn3} name="subTitleEn3" />
        </div>

        {/* Subtitle3 De */}
        <div>
          <Label>Sub Title3 German</Label>
          <Input defaultValue={props.subTitleDe3} name="subTitleDe3" />
        </div>


        {/* Paragraph3 En*/}
        <div>
          <Label>Paragraph 3 English</Label>
          <Textarea
            defaultValue={props.paragraphEn3}
            name="paragraphEn3"
            className="min-h-24"
          />
        </div>

        {/* Paragraph3 De*/}
        <div>
          <Label>Paragraph 3 German</Label>
          <Textarea
            defaultValue={props.paragraphDe3}
            name="paragraphDe3"
            className="min-h-24"
          />
        </div>

        {/* Subtitle4 En*/}
        <div>
          <Label>Sub Title4 English</Label>
          <Input defaultValue={props.subTitleEn4} name="subTitleEn4" />
        </div>

        {/* Subtitle4 De*/}
        <div>
          <Label>Sub Title4 German</Label>
          <Input defaultValue={props.subTitleDe4} name="subTitleDe4" />
        </div>

        {/* Paragraph4 En*/}
        <div>
          <Label>Paragraph 4 English</Label>
          <Textarea
            defaultValue={props.paragraphEn4}
            name="paragraphEn4"
            className="min-h-24"
          />
        </div>

        {/* Paragraph4 De*/}
        <div>
          <Label>Paragraph 4 German</Label>
          <Textarea
            defaultValue={props.paragraphDe4}
            name="paragraphDe4"
            className="min-h-24"
          />
        </div>

        <Button type="submit">Save</Button>
        <FormSuccess message={success} />
        <FormError message={error} />
      </form>
    </div>
  );
};

export default BlogForm;
