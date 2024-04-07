"use client";
import { FormError } from "@/components/form-error";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CiEdit } from "react-icons/ci";
import React from "react";
import { toast } from "sonner";
import { editTag } from "@/actions/tags";

interface EditModalProps {
  isOpen: boolean;
  type: string;
  id: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const EditModal = ({ id, isOpen, setIsOpen, type }: EditModalProps) => {
  const [tagNameEn, setTagNameEn] = React.useState("hi");
  const [tagNameDe, setTagNameDe] = React.useState("");
  const [error, setError] = React.useState("");

  const onEdit = async () => {
    const data = { tagNameEn, tagNameDe };
    setError("");
    if (!tagNameEn || !tagNameDe) {
      setError("Please fill both fields");
    } else {
      const resp = await editTag(id, type, data);
      if (resp?.message) toast.success(resp?.message);
      if (resp?.error) toast.error(resp?.error);
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
                    <CiEdit size={21} />
                  </div>

                  <form className="flex flex-col gap-2 sm:py-4 w-full">
                    <div>
                      <Label className="text-center">
                        add english tag name
                      </Label>
                      <Input onChange={(e) => setTagNameEn(e.target.value)} />
                      <Label className="text-center">add german tag name</Label>
                      <Input onChange={(e) => setTagNameDe(e.target.value)} />
                    </div>

                    <div className="bg-gray-50 py-3 w-full flex gap-4 justify-center flex-row-reverse">
                      <button
                        onClick={onEdit}
                        type="button"
                        className=" rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-sm"
                      >
                        Edit tag name
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

export default EditModal;
