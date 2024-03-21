"use server";

import { db } from "@/lib/db";
import { TFormDataCompanySchema } from "@/schemas";
export const CreateCompanyService = async (data: TFormDataCompanySchema) => {
  const email = data.email;
  // check duplicate service request
  const duplicate = await db.companyServices.findUnique({
    where: {email}
  })
  if (duplicate) {
    return { error: "service request already exists"}
  }
  
await db.companyServices.create({
    data,
  });
  return { message: "company service created"};
};
