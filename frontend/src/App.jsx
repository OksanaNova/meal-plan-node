import './App.css'

import { useEffect, useState } from 'react';
import { MyMeals } from './MyMeals';
import { getAllMeals } from './FetchMeals';

function App() {

  const [ myMeal, setMeal] = useState([]);

  useEffect(() => {
    getAllMeals(setMeal)
  }, [])

  return (
    <div>
      <h1>Meal Plan</h1>

      <input
      type='text'
      placeholder='Add a meal'
      />

      <button>
        Add
      </button>

      {myMeal.map((meal) => <MyMeals text={meal.title} key={meal._id}/>)}

    </div>
  )
}

export default App
