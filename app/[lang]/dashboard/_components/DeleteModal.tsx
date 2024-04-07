"use client";
import { deleteBlog } from "@/actions/delete";
import { deletePhotoById } from "@/actions/uploadPhoto";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

interface DeleteModalProps {
  isOpen: boolean;
  collectionName: string;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  collectionName,
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const id = params.get("id") as string;

  const onClose = () => {
    params.delete("modal");
    params.delete("id");
    replace(`${pathname}?${params.toString()}`);
    return;
  };
  const onDelete = async (collectionName: string, id: string) => {
    if (collectionName === "blogs") {
      const resp = await deleteBlog(id);
      if (resp.message) {
        toast.success(resp.message);
        onClose();
      } else {
        toast.error(resp.error);
        onClose();
      }

    }

    if (collectionName === "photos") {
      const resp = await deletePhotoById(id);
      if (resp.message) {
        toast.success(resp.message);
        onClose();
      } else {
        toast.error(resp.error);
        onClose();
      }
    }
    onClose();
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
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      Delete Item
                    </h3>
                    <div className="mt-2">
                      {collectionName === "blogs" && (
                        <p className="text-sm text-gray-500">
                          Are you sure you want to delete this blog? This action
                          cannot be undone.
                        </p>
                      )}
                      {collectionName === "photos" && (
                        <p className="text-sm text-gray-500">
                          Are you sure you want to delete this photo? This action
                          cannot be undone.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={() => onDelete(collectionName, id)}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Delete
                </button>
                <button
                  onClick={onClose}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteModal;
