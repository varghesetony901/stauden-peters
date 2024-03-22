"use client";

import { EnquiryFormSchema, TEnquiryFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
import { FormSuccess } from "./form-success";
import { FormError } from "./form-error";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { enquiry } from "@/actions/enquiry";
import { Textarea } from "./ui/textarea";

const EnquiryForm = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");

  const form = useForm<TEnquiryFormSchema>({
    resolver: zodResolver(EnquiryFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      telephone: "",
    },
  });


  async function handleForm(data: TEnquiryFormSchema) {
    setIsUploading(true)
    console.log(data);
    const resp = await enquiry(data);
    console.log(resp.message);
    setSuccess(resp?.message);
    setError(resp?.error)
    setIsUploading(false)
    form.reset()
  }

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleForm)}>
          <div className=" flex flex-col gap-4  m-auto">
            {/*  Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="hello@world.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Telephone */}
            <FormField
              control={form.control}
              name="telephone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Telephone
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="contact number here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message */}

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Feel free to write your comments, doubts, suggestions etc."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isUploading}>
              Submit
            </Button>

            <FormSuccess message={success} />
            <FormError message={error} />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EnquiryForm;
