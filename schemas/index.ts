import * as z from "zod";
import { UserRole } from "@prisma/client";

// auth schemas
export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "New password is required!",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "Password is required!",
      path: ["password"],
    }
  );

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

// content schemas

export const formDataTraineeSchema = z.object({
  studentName: z.string().min(1, { message: "name is required" }),
  apprenticeships: z.string().min(1, { message: "this field is required" }),
  email: z.string().email({ message: "invalid email address" }),
  telephone: z.string().refine((value) => /^\d{10,11}$/.test(value), {
    message: "please check the contact number entered",
  }),
  intake: z.string().min(1, { message: "this field is required" }),
  notes: z.string().optional(),
});

export type TFormDataTraineeSchema = z.infer<typeof formDataTraineeSchema>;

export const formDataCompanySchema = z.object({
  companyName: z.string().min(1, { message: "name is required" }),
  contactPerson: z.string().min(1, { message: "name is required" }),
  apprenticeships: z.string().min(1, { message: "this field is required" }),
  email: z.string().email({ message: "invalid email address" }),
  telephone: z.string().refine((value) => /^\d{10,11}$/.test(value), {
    message: "please check the contact number entered",
  }),

  numberOfTrainees: z.string().refine((value) => value !== "undefined", {
    message: "Value cannot be the string 'undefined'",
  }),
  notes: z.string().optional(),
});

export type TFormDataCompanySchema = z.infer<typeof formDataCompanySchema>;

export const SignUpFormSchema = z
  .object({
    name: z.string().min(1, { message: "name is required" }),
    email: z.string().email({ message: "invalid email address" }),
    password: z
      .string()
      .min(1, { message: "this field is required" })
      .max(15, { message: "exceeded maximum characters" }),
    confirmPassword: z
      .string()
      .min(1, { message: "this field is required" })
      .max(15, { message: "exceeded maximum characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type TSignUpFormSchema = z.infer<typeof SignUpFormSchema>;

export const LoginFormSchema = z
  .object({
    email: z.string().email({ message: "invalid email address" }),
    password: z
      .string()
      .min(1, { message: "this field is required" })
      .max(15, { message: "exceeded maximum characters" }),
    confirmPassword: z
      .string()
      .min(1, { message: "this field is required" })
      .max(15, { message: "exceeded maximum characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type TLoginFormSchema = z.infer<typeof LoginFormSchema>;

// export const BlogSchema = z.object({
//   user: z.string().min(1, { message: "this field is required" }),
//   mainTitle: z.string().min(1, { message: "this field is required" }),
//   tag: z
//     .string()
//     .min(1, { message: "this field is required" })
//     .max(20, { message: "exceeded maximum characters" }),
//   imgUrl: z.string().min(1, { message: "this field is required" }),
//   description: z
//     .string()
//     .min(1, { message: "this field is required" })
//     .max(150, { message: "exceeded maximum characters" }),
//   section: z.string().min(1, { message: "this field is required" }),
// });

const imageSchema = z
  .instanceof(File)
  .refine((file) => {
    return file instanceof File;
  }, "* No file selected")
  .refine((file) => {
    return file instanceof File && file.type.startsWith("image/");
  }, "* Must be an image file")
  .refine((file) => {
    return file?.size < 1024 * 1024 * 2;
  }, "* File must be less than 2MB")
  .optional();

export const BlogSchema = z.object({
  mainTitleEn: z.string().min(1, "Title is required"),
  mainTitleDe: z.string().min(1, "Title is required"),
  descriptionEn: z.string().min(1, "Description is required"),
  descriptionDe: z.string().min(1, "Description is required"),
  imgUrl: imageSchema,
  tagId: z.string().min(1, "Tag is required"),
  userId: z.string().min(1, "User is required"),
  subTitleEn1: z.string().optional(),
  subTitleEn2: z.string().optional(),
  subTitleEn3: z.string().optional(),
  subTitleEn4: z.string().optional(),
  subTitleDe1: z.string().optional(),
  subTitleDe2: z.string().optional(),
  subTitleDe3: z.string().optional(),
  subTitleDe4: z.string().optional(),
  paragraphEn1: z.string().optional(),
  paragraphEn2: z.string().optional(),
  paragraphEn3: z.string().optional(),
  paragraphEn4: z.string().optional(),
  paragraphDe1: z.string().optional(),
  paragraphDe2: z.string().optional(),
  paragraphDe3: z.string().optional(),
  paragraphDe4: z.string().optional(),
});

const ParagraphSchema = z.object({
  paragraph: z.string(),
});

const SubSectionSchema = z.object({
  subTitle: z.string(),
  paragraphs: z.array(ParagraphSchema),
});

// Define a schema for the main blog post
export const BlogPostSchema = z.object({
  user: z.string().min(1, { message: "this field is required" }),
  mainTitle: z.string().min(1, { message: "this field is required" }),
  tag: z
    .string()
    .min(1, { message: "this field is required" })
    .max(20, { message: "exceeded maximum characters" }),
  description: z
    .string()
    .min(1, { message: "this field is required" })
    .max(150, { message: "exceeded maximum characters" }),
  section: z.array(SubSectionSchema),
});

export type TBlogPostSchema = z.infer<typeof BlogPostSchema>;

// Define a schema for the EnquiryFormSchema 
export const EnquiryFormSchema = z.object({
  name: z.string().min(1, { message: "this field is required" }),
  email: z.string().email().min(1, { message: "this field is required" }),
  message : z.string().min(1, { message: "this field is required" }).max(300,{message:"you have reached characters limit."}),
  telephone: z.string().refine((value) => /^\d{10,11}$/.test(value), {
    message: "please check the contact number entered",
  }),

});

export type TEnquiryFormSchema = z.infer<typeof EnquiryFormSchema>;
