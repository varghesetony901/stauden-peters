"use server";

import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { TFormDataCompanySchema } from "@/schemas";

// 1. Create Company Service
export const CreateCompanyService = async (data: TFormDataCompanySchema) => {
  const email = data.email;
  // check duplicate service request
  const duplicate = await db.companyServices.findUnique({
    where: { email },
  });
  if (duplicate) {
    return { error: "service request already exists" };
  }

  await db.companyServices.create({
    data,
  });
  return { message: "company service created" };
};

// 2. fetch Company Services
export const fetchCompanyService = async (page: number, pageSize: number) => {
  // check user
  const user = await currentUser();
  if (!user) {
    return { error: "Unauthorized" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  const services = await db.companyServices.findMany({
    take: pageSize,
    skip: (page - 1) * pageSize,
  });
  return { services };
};


// 3. fetch Company Services count
export const fetchCompanyServicesCount = async () => {
  const count = await db.companyServices.count();
  return { count };
};
