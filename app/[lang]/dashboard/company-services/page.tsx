import {
  fetchCompanyService,
  fetchCompanyServicesCount,
} from "@/actions/create-company-service";
import Table from "../_components/Table";
import Title from "../_components/Title";
import PaginationFC from "@/components/Pagination";

const Page = async ({
  searchParams,
}: {
  searchParams: { pageNumber: string };
}) => {
  const pageNumber = searchParams.pageNumber || "1";

  const CompannyServices = await fetchCompanyService(Number(pageNumber), 10);
  const data = CompannyServices.services;
  const countData = await fetchCompanyServicesCount();
  const count = countData?.count;

  const headers = [
    "companyName",
    "contactPerson",
    "apprenticeships",
    "email",
    "telephone",
    "numberOfTrainees",
    "notes",
  ];

  return (
    <div>
      <Title title="Company Services" />
      <div className="pr-2">
        <Table headers={headers} data={data} resolve={"companyService"} />
      </div>
      <PaginationFC count={count} />
    </div>
  );
};

export default Page;
