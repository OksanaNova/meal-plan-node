import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const MyMeals = ({ text, updatingInInput, deleteMeal }) => {
    return (
        <div>
            <p>{text}</p>
            <FaEdit onClick={updatingInInput} />
            <MdDelete onClick={deleteMeal} />
        </div>
    )
}

