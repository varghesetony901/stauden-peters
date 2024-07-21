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
import { useParams } from "next/navigation";

const EnquiryForm = () => {
  const params = useParams();
  const locale = params?.lang; 
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
    // setIsUploading(true)

    // const resp = await enquiry(data);
    // if (resp.message && locale === "en") {
    //   setSuccess(resp?.message);
    // } else if (resp.message && locale === "de") {
    //   setSuccess("Nachricht erfolgreich gesendet!");
    // } else if (resp.error && locale === "en") {
    //   setError(resp?.error);
    // } else if (resp.error && locale === "de") {
    //   setError("Sie haben Anfragen, die noch zu klären sind!");
    // }

    // setIsUploading(false)
    // form.reset()
    alert("form submitted!")
  }

  return (
    <div className="px-1">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleForm)}>
          <div className=" flex flex-col gap-4 m-auto">
            {/*  Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                  {locale === "en" ? "Full Name" : "Vollständiger Name"}
                    </FormLabel>
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
                  <FormLabel>
                  {locale === "en" ? "Email" : "E-mail"}
                    </FormLabel>
                  <FormControl>
                    <Input placeholder="hello@123.com" {...field} />
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
                  {locale === "en" ? "Telephone" : "Telefon"}
                    
                  </FormLabel>
                  <FormControl>
                    <Input placeholder= 
                    {locale === "en" ? "contact number here" : "Kontaktnummer hier"}
                    type="number"
                    {...field} />
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
                  <FormLabel>
                  {locale === "en" ? "Message" : "Nachricht"}
                    </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder=
                      {locale === "en" ? "Feel free to write your comments, doubts, suggestions etc." : "Sie können uns gerne Ihre Kommentare, Zweifel, Vorschläge usw. mitteilen."}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isUploading}>
              
              {locale === "en" ? "Submit" : "Einreichen"}
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
