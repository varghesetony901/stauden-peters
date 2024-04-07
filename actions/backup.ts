"use server";

import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

// 1. Backup Action
export const backupAction = async (
  docId: string,
  type: string,
  remarks: string
) => {
  // check user
  const user = await currentUser();
  if (!user) {
    return { error: "Unauthorized" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  if (!remarks) {
    return { error: "no remarks" };
  }
  if (!type || !docId) {
    return { error: "no type or docId provided" };
  }

  if (type === "studentService") {
    // find student service
    const studentService = await prisma?.studentServices.findFirst({
      where: {
        id: docId,
      },
    });

    if (!studentService) {
      return { error: "no student service found" };
    }

    // backup student service

    // omitting id field
    const { id, ...studentServiceData } = studentService;
    const data = {
      ...studentServiceData,
      remarks: remarks,
    };


    // create backup
    await prisma?.studentServicesBackup.create({
      data: data,
    });

    // delete student service
    await prisma?.studentServices.delete({
      where: {
        id: docId,
      },
    });

    revalidatePath("/dashboard/student-services");

    return { message: "student service backed up successfully" };
  }

  if (type === "companyService") {
    // find company service
    const companyService = await prisma?.companyServices.findFirst({
      where: {
        id: docId,
      },
    });

    if (!companyService) {
      return { error: "no company service found" };
    }

    // backup company service

    // omitting id field
    const { id, ...companyServiceData } = companyService;
    const data = {
      ...companyServiceData,
      remarks: remarks,
    };


    // create backup
    await prisma?.companyServicesBackup.create({
      data: data,
    });

    // delete company service
    await prisma?.companyServices.delete({
      where: {
        id: docId,
      },
    });

    revalidatePath("/dashboard/company-services");

    return { message: "company service backed up successfully" };
  }

  if (type === "enquiryMail") {
    // find enquiry mail
    const enquiryMail = await prisma?.enquiryMail.findFirst({
      where: {
        id: docId,
      },
    });

    if (!enquiryMail) {
      return { error: "no enquiry mail  found" };
    }

    // backup enquiry mail

    // omitting id field
    const { id, ...enquiryMailData } = enquiryMail;
    const data = {
      ...enquiryMailData,
      remarks: remarks,
    };


    // create backup
    await prisma?.enquiryMailBackup.create({
      data: data,
    });

    // delete enquiry mail
    await prisma?.enquiryMail.delete({
      where: {
        id: docId,
      },
    });

    revalidatePath("/dashboard/enquiry-mail");
    return { message: "enquiry mail backed up successfully" };
  }

  // edit remarks

  if (type === "editStudentServiceRemark") {
    // find student service backup
    const studentServiceBackup = await prisma?.studentServicesBackup.findFirst({
      where: {
        id: docId,
      },
    });
    if (!studentServiceBackup) {
      return { error: "no student service backup found" };
    }

    await prisma?.studentServicesBackup.update({
      where: {
        id: docId,
      },
      data: {
        remarks: remarks,
      },
    });
    revalidatePath("/dashboard/backup");
    return { message: "student service remark edited successfully" };
  }

  if (type === "editCompanytServiceRemark") {
    // find student service backup
    const companyServiceBackup = await prisma?.companyServicesBackup.findFirst({
      where: {
        id: docId,
      },
    });
    if (!companyServiceBackup) {
      return { error: "no company service backup found" };
    }

    await prisma?.companyServicesBackup.update({
      where: {
        id: docId,
      },
      data: {
        remarks: remarks,
      },
    });
    revalidatePath("/dashboard/backup");
    return { message: "company service remark edited successfully" };
  }

  if (type === "editEnquiryMailRemark") {
    // find student service backup
    const enquiryMailBackup = await prisma?.enquiryMailBackup.findFirst({
      where: {
        id: docId,
      },
    });
    if (!enquiryMailBackup) {
      return { error: "no enquiry mail backup  found" };
    }

    await prisma?.enquiryMailBackup.update({
      where: {
        id: docId,
      },
      data: {
        remarks: remarks,
      },
    });
    revalidatePath("/dashboard/backup");
    return { message: "enquiry mail remark edited successfully" };
  }
};

// 2. fetch student backup
export const fetchStudentServiceBackup = async (
  page: number,
  pageSize: number
) => {
  // check user
  const user = await currentUser();
  if (!user) {
    return { error: "Unauthorized" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  const services = await db.studentServicesBackup.findMany({
    take: pageSize,
    skip: (page - 1) * pageSize,
  });
  return { services };
};

// 3. fetch Student Services Backup Count
export const fetchStudentServicesBackupCount = async () => {
  const count = await db.studentServicesBackup.count();
  return { count };
};

// 4. fetch company backup
export const fetchCompanyServiceBackup = async (
  page: number,
  pageSize: number
) => {

    // check user
  const user = await currentUser();
  if (!user) {
    return { error: "Unauthorized" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  const services = await db.companyServicesBackup.findMany({
    take: pageSize,
    skip: (page - 1) * pageSize,
  });
  return { services };
};

// 5. fetch company Services Backup Count
export const fetchCompanyServicesBackupCount = async () => {
  const count = await db.companyServicesBackup.count();
  return { count };
};

// 6. fetch enquiry mail backup
export const fetchMailEnquiryBackup = async (
  page: number,
  pageSize: number
) => {
    // check user
  const user = await currentUser();
  if (!user) {
    return { error: "Unauthorized" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  const services = await db.enquiryMailBackup.findMany({
    take: pageSize,
    skip: (page - 1) * pageSize,
  });
  return { services };
};

// 7. fetch enquiry mail backup Count 
export const fetchMailEnquiryBackupCount = async () => {
  const count = await db.enquiryMailBackup.count();
  return { count };
};
