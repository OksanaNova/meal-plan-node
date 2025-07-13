import axios from "axios";

const getAllMeals = (setMeal) => {
    axios.get("http://localhost:4000")
    .then(({ data }) => {console.log(data)
    setMeal(data)
    })
}

const addMeal = (title, setTitle, setMeal) => {
    axios.post(`http://localhost:4000/saveMeals`, { title })
    .then((data) => {
        console.log(data);
        setTitle('');
        getAllMeals(setMeal)
    })
}

export { getAllMeals, addMeal };