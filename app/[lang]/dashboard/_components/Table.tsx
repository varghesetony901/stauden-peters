import { Button } from "@/components/ui/button";
import React from "react";
import ActionButton from "./ActionButton";
import EditRemarkButton from "./EditRemarkButton";

interface TableProps {
  headers: string[] | undefined;
  data: any[] | undefined;
  resolve?: string;
  editRemark? : string;
}

const Table: React.FC<TableProps> = ({ headers, data, resolve, editRemark }) => {
  return (
    <div className="max-w-full overflow-x-auto px-2 sm:px-6">
      <table className="w-full table-auto ">
        <thead>
          <tr>
            {headers?.map((header, index) => (
              <th
                key={index}
                className="px-4 py-2 text-left text-sm border-b border-gray-200 bg-gray-200 capitalize"
              >
                {header}
              </th>
            ))}
            {resolve && (
              <th className="px-4 py-2 text-left text-sm border-b border-gray-200 bg-gray-200 ">
                Action
              </th>
            )}
            {editRemark && (
              <th className="px-4 py-2 text-left text-sm border-b border-gray-200 bg-gray-200 ">
                 Edit Remark
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data?.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers?.map((header, index) => (
                <td
                  key={index}
                  className="px-4 py-2 text-sm text-left border-b border-gray-200"
                >
                  <div className="max-h-20 overflow-y-auto">{row[header]}</div>
                </td>
              ))}

              {resolve && (
                <td className="px-4 py-2 text-sm text-left border-b border-gray-200">
                 <ActionButton 
                 
                 id={row.id}
                 type={resolve}
                 
                 />
                </td>
              )}
              {editRemark && (
                <td className="px-4 py-2 text-sm text-left border-b border-gray-200">
                 <EditRemarkButton 
                 
                 id={row.id}
                 type={editRemark}
                 
                 />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
