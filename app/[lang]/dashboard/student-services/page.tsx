import React from "react";
import Table from "../_components/Table";
import Title from "../_components/Title";
import {
  fetchStudentService,
  fetchStudentServicesCount,
} from "@/actions/create-student-service";
import PaginationFC from "@/components/Pagination";

const Page = async ({
  searchParams,
}: {
  searchParams: { pageNumber: string };
}) => {
  const pageNumber = searchParams.pageNumber || "1";

  const StudentServices = await fetchStudentService(Number(pageNumber), 10);
  const data = StudentServices.services;
  const countData = await fetchStudentServicesCount();
  const count = countData?.count;

  const headers = [
    "studentName",
    "apprenticeships",
    "email",
    "telephone",
    "intake",
    "notes",
  ];

  return (
    <div>
      <Title title="Student Services" />
      <div className="pr-2"> 
      <Table headers={headers} data={data} resolve={"studentService"} />
      </div>
      <PaginationFC count={count} />
    </div>
  );
};

export default Page;
