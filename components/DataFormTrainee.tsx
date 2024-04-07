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
import { useParams } from "next/navigation";

const defaultValues = {
  studentName: "",
  intake: "April 2025",
  apprenticeships: "",
  email: "",
  notes: "",
  telephone: "",
};

const DataFormTrainee = () => {
  const params = useParams();
  const locale = params?.lang;
  const form = useForm<TFormDataTraineeSchema>({
    resolver: zodResolver(formDataTraineeSchema),
    defaultValues: {
      studentName: "",
      intake: "April 2025",
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

    const resp = await CreateStudentService(data);
    if (resp.message && locale === "en") {
      setSuccess(resp?.message);
    } else if (resp.message && locale === "de") {
      setSuccess("Studierendenservice erstellt");
    } else if (resp.error && locale === "en") {
      setError(resp?.error);
    } else if (resp.error && locale === "de") {
      setError("Serviceanfrage bereits vorhanden");
    }
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
                  <FormLabel>
                    {locale === "en"
                      ? "Applicant Name"
                      : "Name des Antragstellers"}
                  </FormLabel>
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
                  <FormLabel>
                    {locale === "en"
                      ? "Apprenticeships"
                      : "Lehrlingsausbildung"}
                  </FormLabel>
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
                  <FormLabel>{locale === "en" ? "Email" : "E-Mail"}</FormLabel>
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
                    {locale === "en"
                      ? "Telephone with direct dialing (voluntary information)"
                      : "Telefon mit Direktwahl (freiwillige Information)"}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={
                        locale === "en"
                          ? "contact number here"
                          : "Kontaktnummer hier"
                      }
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
                  <FormLabel>
                    {locale === "en"
                      ? "Which intake are you looking for?"
                      : "Nach welchem Einlass suchen Sie?"}
                  </FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          defaultValue={""}
                          placeholder={
                            locale === "en"
                              ? "Select intake here"
                              : "Hier Einlass auswählen"
                          }
                        />
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
                  <FormLabel>
                    {locale === "en" ? "Notes" : "Anmerkungen"}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={
                        locale === "en"
                          ? "What do you want to tell us in advance?"
                          : "Was möchten Sie uns im Voraus mitteilen?"
                      }
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
              {locale === "en"
                ? "C @ G Recruiting is committed to protecting and respecting your  privacy. We will contact you, store and use your data only for the purpose of this request. If you agree, agree!"
                : "C @ G Recruiting verpflichtet sich, Ihre Privatsphäre zu schützen und zu respektieren. Wir werden Sie kontaktieren, Ihre Daten speichern und nur für den Zweck dieser Anfrage verwenden. Wenn Sie einverstanden sind, stimmen Sie zu!"}
            </Link>
            <div className="flex items-center gap-4">
              <Checkbox onCheckedChange={() => setIsChecked(!isChecked)} />

              <p>
                {locale === "en"
                  ? "I agree to be contacted by C@G Recruiting"
                  : "Ich bin damit einverstanden, von C@G Recruiting kontaktiert zu werden."}

                <span className="text-red-500"> *</span>
              </p>
            </div>
            <Link
              href={"/data-protection"}
              target="_blank"
              className="underline cursor-pointer text-blue-800 hover:text-blue-600"
            >
              {locale === "en"
                ? "You can object to this consent at any time. Further information about our data protection procedures can be found here."
                : "Sie können dieser Einwilligung jederzeit widersprechen. Weitere Informationen über unsere Datenschutzverfahren finden Sie hier."}
            </Link>

            <Button type="submit" disabled={!isChecked || isUploading}>
              {locale === "en" ? "Submit" : "Einreichen"}
            </Button>

            <p>
              {locale === "en"
                ? "Best regards, C@G Recruiting team"
                : "Mit freundlichen Grüßen, C@G Recruiting Team"}
            </p>

            <FormSuccess message={success} />
            <FormError message={error} />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DataFormTrainee;
