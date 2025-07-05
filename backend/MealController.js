const MealModel = require('./MealModel');

// GET - ПОЛУЧАЕМ РЕЦЕПТЫ

module.exports.getMeal = async (req, res) => {
    const myMeal = await MealModel.find();
    res.send(myMeal)
}

// POST - ИЗМЕНЯЕМ И СОХРАНЯЕМ РЕЦЕПТЫ

module.exports.saveMeals = async (req, res) => { 
    const { title } = req.body;
    MealModel.create({ title })
    .then((data) => { console.log('Meal added')
    res.send(data)
    })
}

// DELETE

module.exports.deleteMeal = async (req, res) => {
    const { _id } = req.body;
    MealModel.findByIdAndDelete({ _id })
    .then(() => res.send('Meal deleted'))
}