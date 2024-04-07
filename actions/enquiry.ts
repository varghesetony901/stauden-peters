"use server";

import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { EnquiryFormSchema, TEnquiryFormSchema } from "@/schemas";

// 1. create enquiry mail
export const enquiry = async (data: TEnquiryFormSchema) => {
  const validatedFields = EnquiryFormSchema.safeParse(data);

  if (validatedFields.success) {
    data = validatedFields.data;
  } else {
    return { error: "invalid data" };
  }
  const email = data.email;

  try {
    // check count for service request
    const emailCount = await db.enquiryMail.count({
      where: { email },
    });


    if (emailCount > 2) {
      return { error: "You have enquiries pending to be resolved!" };
    }

    await db.enquiryMail.create({
      data,
    });
    return { message: "Message sent successfully!" };
  } catch (error) {
    return { error: "Failed to send message! please try again." };
  }
};

// 1. fetch enquiry mails
export const fetchEnquiries = async (page: number, pageSize: number) => {
  // check user
  const user = await currentUser();
  if (!user) {
    return { error: "Unauthorized" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  const enquiries = await db.enquiryMail.findMany({
    take: pageSize,
    skip: (page - 1) * pageSize,
  });
  return { enquiries };
};


// 2. fetch enquiry mails count
export const fetchEnquiryMailCount = async () => {
  const count = await db.enquiryMail.count();
  return { count };
};
