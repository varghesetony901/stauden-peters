import { fetchEnquiries, fetchEnquiryMailCount } from "@/actions/enquiry";
import Table from "../_components/Table";
import Title from "../_components/Title";
import PaginationFC from "@/components/Pagination";

const Page = async ({
  searchParams,
}: {
  searchParams: { pageNumber: string };
}) => {
  const pageNumber = searchParams.pageNumber || "1";

  const ServiceEnquiries = await fetchEnquiries(Number(pageNumber), 10);
  const data = ServiceEnquiries.enquiries;
  const countData = await fetchEnquiryMailCount();
  const count = countData?.count;

  const headers = ["name", "email", "telephone", "message"];

  return (
    <div>
      <Title title="Enquiry Mails" />
      <div className="pr-2">
        <Table headers={headers} data={data} resolve={"enquiryMail"} />
      </div>
      <PaginationFC count={count} />
    </div>
  );
};

export default Page;
