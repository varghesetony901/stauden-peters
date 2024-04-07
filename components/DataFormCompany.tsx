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

import { CreateCompanyService } from "@/actions/create-company-service";
import Link from "next/link";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useParams } from "next/navigation";

const DataFormCompany = () => {
  const params = useParams();
  const locale = params?.lang;
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

    const resp = await CreateCompanyService(data);

    if (resp.message && locale === "en") {
      setSuccess(resp?.message);
    } else if (resp.message && locale === "de") {
      setSuccess("Firmenservice erstellt");
    } else if (resp.error && locale === "en") {
      setError(resp?.error);
    } else if (resp.error && locale === "de") {
      setError("Serviceanfrage bereits vorhanden");
    }

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
                  <FormLabel>
                  {locale === "en" ? "Company Name" : "Name des Unternehmens"}
                    </FormLabel>
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
                  <FormLabel>
                  {locale === "en" ? " Contact Person" : " Kontaktperson"}
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
                  <FormLabel>{locale === "en" ? "Apprenticeships" : "Lehrlingsausbildung"}</FormLabel>
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
                  {locale === "en" ? "Telephone with direct dialing (voluntary information)" : "Telefon mit Direktwahl (freiwillige Information)"}
                    
                  </FormLabel>
                  <FormControl>
                  <Input
                      placeholder={locale === "en" ? "contact number here" : "Kontaktnummer hier"}
                      {...field}
                      type="number"
                    />
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
                  {locale === "en" ? "Please make me an offer for the following number of trainees!" : "Bitte machen Sie mir ein Angebot für die folgende Anzahl von Praktikanten!"}
                    
                  </FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder= {locale === "en" ? "Select number of trainees" : "Anzahl der Auszubildenden auswählen"} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="One">{locale === "en" ? "One" : "Eine"}</SelectItem>
                      <SelectItem value="Two">{locale === "en" ? "Two" : "Zwei"}</SelectItem>
                      <SelectItem value="Three">{locale === "en" ? "Three" : "Drei"}</SelectItem>
                      <SelectItem value="Four">{locale === "en" ? "Four" : "Vier"}</SelectItem>
                      <SelectItem value="Five">{locale === "en" ? "Five" : "Fünf"}</SelectItem>
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
                  <FormLabel>{locale === "en" ? "Notes" : "Anmerkungen"}</FormLabel>
                  <FormControl>
                  <Input
                      placeholder= {locale === "en" ? "What do you want to tell us in advance?" : "Was möchten Sie uns im Voraus mitteilen?"}
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
               
              {locale === "en" ? "C @ G Recruiting is committed to protecting and respecting your  privacy. We will contact you, store and use your data only for the purpose of this request. If you agree, agree!" : "C @ G Recruiting verpflichtet sich, Ihre Privatsphäre zu schützen und zu respektieren. Wir werden Sie kontaktieren, Ihre Daten speichern und nur für den Zweck dieser Anfrage verwenden. Wenn Sie einverstanden sind, stimmen Sie zu!"}
              
            </Link>
            <div className="flex items-center gap-4">
              <Checkbox onCheckedChange={() => setIsChecked(!isChecked)} />

              <p>
              {locale === "en" ? "I agree to be contacted by C@G Recruiting" : "Ich bin damit einverstanden, von C@G Recruiting kontaktiert zu werden."}
                
                <span className="text-red-500"> *</span>
              </p>
            </div>
            <Link
              href={"/data-protection"}
              target="_blank"
              className="underline cursor-pointer text-blue-800 hover:text-blue-600"
            >
              {locale === "en" ? "You can object to this consent at any time. Further information about our data protection procedures can be found here." : "Sie können dieser Einwilligung jederzeit widersprechen. Weitere Informationen über unsere Datenschutzverfahren finden Sie hier."}
              
            </Link>

            <Button type="submit" disabled={!isChecked || isUploading}>
            {locale === "en" ? "Submit" : "Einreichen"}
              
            </Button>

            <p>
            {locale === "en" ? "Best regards, C@G Recruiting team" : "Mit freundlichen Grüßen, C@G Recruiting Team"}
              </p>

            <FormSuccess message={success} />
            <FormError message={error} />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DataFormCompany;
