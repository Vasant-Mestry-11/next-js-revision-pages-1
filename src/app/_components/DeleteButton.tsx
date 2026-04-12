import { FiTrash2 } from "react-icons/fi";
import { ContactType } from "../_types/contact";

type DeleteButtonProps = {
  contact?: ContactType;
};
const DeleteButton = ({ contact }: DeleteButtonProps) => {
  return (
    <form method="POST">
      <button
        type="submit"
        className="flex items-center gap-2 px-3 py-1 border border-red-300 rounded-md hover:border-red-400 hover:bg-red-100 text-red-700 cursor-pointer"
      >
        <FiTrash2 className="text-red-500 text-lg" /> Delete
      </button>
    </form>
  );
};

export default DeleteButton;
