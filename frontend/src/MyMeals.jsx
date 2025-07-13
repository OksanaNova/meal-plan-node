import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const MyMeals = ({ text, updatingInInput, deleteMyMeal }) => {
    return (
        <div>
            <p>{text}</p>
            <FaEdit onClick={updatingInInput} />
            <MdDelete onClick={deleteMyMeal} />
        </div>
    )
}

