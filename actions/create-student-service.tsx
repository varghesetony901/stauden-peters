"use server";

import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { TFormDataTraineeSchema } from "@/schemas";

// 1. create student service
export const CreateStudentService = async (data: TFormDataTraineeSchema) => {
  const email = data.email;
  // check duplicate service request
  const duplicate = await db.studentServices.findUnique({ where: { email } });

  if (duplicate) {
    return { error: "service request already exists" };
  }
  await db.studentServices.create({
    data,
  });
  return { message: "student service created" };
};

// 2. fetch student service
export const fetchStudentService = async (page: number, pageSize: number) => {
  // check user
  const user = await currentUser();
  if (!user) {
    return { error: "Unauthorized" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  const services = await db.studentServices.findMany({
    take: pageSize,
    skip: (page - 1) * pageSize,
  });
  return { services };
};

// 3. fetch student services count
export const fetchStudentServicesCount = async () => {
  const count = await db.studentServices.count();
  return { count };
};
