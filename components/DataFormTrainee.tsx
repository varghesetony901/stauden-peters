"use client";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";

import { useForm } from "react-hook-form";

import { TFormDataTraineeSchema, formDataTraineeSchema } from "@/schemas";
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
import { CreateStudentService } from "@/actions/create-student-service";
import { FormSuccess } from "./form-success";
import { FormError } from "./form-error";
import Link from "next/link";

const defaultValues = {
  studentName: "",
  intake : "April 2025",
  apprenticeships: "",
  email: "",
  notes: "",
  telephone: "",
}

const DataFormTrainee = () => {
  const form = useForm<TFormDataTraineeSchema>({
    resolver: zodResolver(formDataTraineeSchema),
    defaultValues: {
      studentName: "",
      intake : "April 2025",
      apprenticeships: "",
      email: "",
      notes: "",
      telephone: "",
    },
  });

  const [isChecked, setIsChecked] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");

  async function handleForm(data: TFormDataTraineeSchema) {
    setIsUploading(true);
    console.log(data);
    const resp = await CreateStudentService(data);
    console.log(resp.message);
    setSuccess(resp?.message);
    setError(resp?.error);
    setIsUploading(false);
    form.reset();
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleForm)}>
          <div className="md:w-[600px] flex flex-col gap-4 pb-16 m-auto">
            {/* Trainee Name */}
            <FormField
              control={form.control}
              name="studentName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Applicant Name</FormLabel>
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
                      placeholder="Nursing specialist, Hotel Management, Food Technology"
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
                    <Input
                      placeholder="contact number here"
                      {...field}
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Intake */}
            <FormField
              control={form.control}
              name="intake"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Which intake are you looking for?</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue defaultValue={""} placeholder="Select intake here" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="September 2024">
                        September 2024
                      </SelectItem>
                      <SelectItem value="April 2025">April 2025</SelectItem>
                      <SelectItem value="September 2025">
                        September 2025
                      </SelectItem>
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

            <FormSuccess message={success} />
            <FormError message={error} />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DataFormTrainee;
