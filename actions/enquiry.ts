"use server";

import { db } from "@/lib/db";
import { EnquiryFormSchema, TEnquiryFormSchema } from "@/schemas";

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
console.log(emailCount);

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
