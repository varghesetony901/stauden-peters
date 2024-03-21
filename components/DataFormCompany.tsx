"use client";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";

import { useForm } from "react-hook-form";

import { TFormDataCompanySchema, formDataCompanySchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { CreateCompanyService } from "@/actions/create-company-service";
import { FormSuccess } from "./form-success";
import { FormError } from "./form-error";
import Link from "next/link";

const DataFormCompany = () => {
  const form = useForm<TFormDataCompanySchema>({
    resolver: zodResolver(formDataCompanySchema),
    defaultValues: {
      apprenticeships:"",
      companyName:"",
      contactPerson:"",
      email:"",
      notes:"",
      numberOfTrainees:"",
      telephone:""
    }
  });

  const [isChecked, setIsChecked] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");

  async function handleForm1(data: TFormDataCompanySchema) {
    setIsUploading(true)
    console.log(data);
    const resp = await CreateCompanyService(data);
    console.log(resp.message);
    setSuccess(resp?.message);
    setError(resp?.error)
    setIsUploading(false)
    form.reset()
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleForm1)}>
          <div className="md:w-[600px] flex flex-col gap-4 pb-16 m-auto">
            {/* Company Name */}
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Morris Planet" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Contact Person  */}
            <FormField
              control={form.control}
              name="contactPerson"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Person</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Apprenticeships */}
            <FormField
              control={form.control}
              name="apprenticeships"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Apprenticeships</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nursing specialist, Hotel Management, Food Technology "
                      {...field}
                    />
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
                    Telephone with direct dialing (voluntary information)
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="contact number here" {...field} type="number"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* No of trainees  */}
            <FormField
              control={form.control}
              name="numberOfTrainees"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Please make me an offer for the following number of
                    trainees!
                  </FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of trainees" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="One">One</SelectItem>
                      <SelectItem value="Two">Two</SelectItem>
                      <SelectItem value="Three">Three</SelectItem>
                      <SelectItem value="Four">Four</SelectItem>
                      <SelectItem value="Five">Five</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Notes */}

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="What do you want to tell us in advance?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* data protection */}

            <Link
              href={"/data-protection"}
              target="_blank"
              className="underline cursor-pointer text-blue-800 hover:text-blue-600"
            >
              C @ G Recruiting is committed to protecting and respecting your
              privacy. We will contact you, store and use your data only for the
              purpose of this request. If you agree, agree!
            </Link>
            <div className="flex items-center gap-4">
              <Checkbox onCheckedChange={() => setIsChecked(!isChecked)} />

              <p>
                I agree to be contacted by C@G Recruiting
                <span className="text-red-500"> *</span>
              </p>
            </div>
            <Link
              href={"/data-protection"}
              target="_blank"
              className="underline cursor-pointer text-blue-800 hover:text-blue-600"
            >
              You can object to this consent at any time. Further information
              about our data protection procedures can be found here.
            </Link>

            <Button type="submit" disabled={!isChecked || isUploading}>
              Submit
            </Button>

            <p>Best regards, C@G Recruiting team</p>
            <FormSuccess message={success}/>
            <FormError message={error}/>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DataFormCompany;
