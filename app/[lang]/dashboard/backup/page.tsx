import {
  fetchCompanyServiceBackup,
  fetchCompanyServicesBackupCount,
  fetchMailEnquiryBackup,
  fetchMailEnquiryBackupCount,
  fetchStudentServiceBackup,
  fetchStudentServicesBackupCount,
} from "@/actions/backup";
import PaginationFC from "@/components/Pagination";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Table from "../_components/Table";
import Title from "../_components/Title";
import { Locale } from "@/i18n.config";

const Page = async ({
  searchParams,
  params,
}: {
  searchParams: { service: string; pageNumber: string };
  params: { lang: Locale };
}) => {
  const locale = params.lang;
  const service = searchParams.service || "studentServices";
  const pageNumber = searchParams.pageNumber || "1";

  const tableData = async () => {
    if (service === "studentServices") {
      const headers = [
        "studentName",
        "apprenticeships",
        "email",
        "telephone",
        "intake",
        "notes",
        "remarks",
      ];
      const data = await fetchStudentServiceBackup(Number(pageNumber), 10);
      const count = await fetchStudentServicesBackupCount();

      const editRemark = "editStudentServiceRemark";
      return { headers, data, count, editRemark };
    }
    if (service === "companyServices") {
      const headers = [
        "companyName",
        "contactPerson",
        "apprenticeships",
        "email",
        "telephone",
        "numberOfTrainees",
        "notes",
        "remarks",
      ];
      const data = await fetchCompanyServiceBackup(Number(pageNumber), 10);
      const count = await fetchCompanyServicesBackupCount();

      const editRemark = "editCompanytServiceRemark";
      return { headers, data, count, editRemark };
    }
    if (service === "enquiryMails") {
      const headers = ["name", "email", "telephone", "message", "remarks"];
      const data = await fetchMailEnquiryBackup(Number(pageNumber), 10);
      const count = await fetchMailEnquiryBackupCount();

      const editRemark = "editEnquiryMailRemark";
      return { headers, data, count, editRemark };
    }
  };

  const mainData = await tableData();

  return (
    <div>
      <Title title="Backup" />
      <div className="flex flex-wrap gap-4 px-2 sm:px-6">
        <Link href={`/${locale}/dashboard/backup?service=studentServices`}>
          <Button>Student Services</Button>
        </Link>
        <Link href={`/${locale}/dashboard/backup?service=companyServices`}>
          <Button>Company Services</Button>
        </Link>
        <Link href={`/${locale}/dashboard/backup?service=enquiryMails`}>
          <Button>Enquiry Mails</Button>
        </Link>
      </div>
      <div className="py-4 pr-2">
        <Table
          headers={mainData?.headers}
          data={mainData?.data?.services}
          editRemark={mainData?.editRemark}
        />
        <PaginationFC count={mainData?.count.count} />
      </div>
    </div>
  );
};

export default Page;
