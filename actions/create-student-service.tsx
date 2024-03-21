"use server";

import { db } from "@/lib/db";
import { TFormDataTraineeSchema } from "@/schemas";
export const CreateStudentService = async (data: TFormDataTraineeSchema) => {
  const email = data.email;
  // check duplicate service request
  const duplicate = await db.studentServices.findUnique({ where: { email } });
                   
  if (duplicate) {
    return { error: "service request already exists"}
  }
   await db.studentServices.create({
    data,
  });
  return { message: "student service created" };
};
