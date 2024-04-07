"use client";

import { useForm } from "react-hook-form";

import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { createBlogTag, createPhotoTag } from "@/actions/tags";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const TagsFileSchema = z.object({
  tagNameEn: z.string().min(1, { message: "this field is required" }),
  tagNameDe: z.string().min(1, { message: "this field is required" }),
});

export type TTagsFileSchema = z.infer<typeof TagsFileSchema>;

const TagsForm = ({type}: {type :string}) => {
  const form = useForm<TTagsFileSchema>({
    resolver: zodResolver(TagsFileSchema),
    defaultValues: {
      tagNameEn: "",
      tagNameDe: "",
    },
  });

  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");

  async function handleForm(data: any) {
    setIsUploading(true);
    console.log(data);
    if(type === "blog"){
      const resp = await createBlogTag(data);
      console.log(resp.message);
      setSuccess(resp?.message);
      setError(resp?.error);
      setIsUploading(false);
      form.reset();
    }else{
      const resp = await createPhotoTag(data);
      console.log(resp.message);
      setSuccess(resp?.message);
      setError(resp?.error);
      setIsUploading(false);
      form.reset();
    }
   
  }

  return (
   
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleForm)}>
          <div className="flex flex-col gap-4 max-w-96">
            {/* Tag Name */}
            <FormField
              control={form.control}
              name="tagNameEn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>add new English tag </FormLabel>
                  <FormControl>
                    <Input placeholder="medical" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tagNameDe"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>add new German tag </FormLabel>
                  <FormControl>
                    <Input placeholder="medizinisch" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-32" type="submit" disabled={isUploading}>
              Submit
            </Button>
            <FormSuccess message={success} />
            <FormError message={error} />
          </div>
        </form>
      </Form>

  );
};

export default TagsForm;
