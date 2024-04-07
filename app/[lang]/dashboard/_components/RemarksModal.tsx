"use client";
import { backupAction } from "@/actions/backup";
import { FormError } from "@/components/form-error";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { MdOutlineBackup } from "react-icons/md";
import { toast } from "sonner";

interface RemarksModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  type: string;
  modalType : string
}

const RemarksModal = ({ isOpen, setIsOpen, id, type, modalType }: RemarksModalProps) => {
  const [remarks, setRemarks] = React.useState("");
  const [error, setError] = React.useState("");
  const onAction = async () => {
    setError("");
    if (!remarks) {
      setError("Please enter remarks");
    } else {
      const resp = await backupAction(id, type, remarks);
      if(resp?.message) toast.success(resp?.message)
      if(resp?.error) toast.error(resp?.error)
      setIsOpen(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-black opacity-10"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-2 sm:p-6 sm:pb-4 flex flex-col">
                <div className="sm:flex items-center gap-2 flex-col">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <MdOutlineBackup size={21} />
                  </div>

                  {modalType === "editRemark" ? (
                     <form className="flex flex-col gap-2 sm:py-4 w-full">
                    
                     <Label className="text-center">
                       Add remarks before submitting.
                     </Label>
                     <Textarea onChange={(e) => setRemarks(e.target.value)} />
 
                     <div className="bg-gray-50 py-3 w-full flex gap-4 justify-center flex-row-reverse">
                       <button
                         onClick={onAction}
                         type="button"
                         className=" rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-sm"
                       >
                         Edit Remark
                       </button>
 
                       <button
                         onClick={() => setIsOpen(false)}
                         type="button"
                         className="rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 text-sm"
                       >
                         Cancel
                       </button>
                     </div>
                   </form>
                  ) : (
                       <form className="flex flex-col gap-2 sm:py-4 w-full">
                    
                       <Label className="text-center">
                         Add Remarks before moving to backup.
                       </Label>
                       <Textarea onChange={(e) => setRemarks(e.target.value)} />
   
                       <div className="bg-gray-50 py-3 w-full flex gap-4 justify-center flex-row-reverse">
                         <button
                           onClick={onAction}
                           type="button"
                           className=" rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-sm"
                         >
                           Move to backup
                         </button>
   
                         <button
                           onClick={() => setIsOpen(false)}
                           type="button"
                           className="rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 text-sm"
                         >
                           Cancel
                         </button>
                       </div>
                     </form>
                      )}
                 
                </div>
                <div className=" w-full text-center ">
                  <FormError message={error} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RemarksModal;
