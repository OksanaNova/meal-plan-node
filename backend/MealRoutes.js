const { Router } = require('express');
const { getMeal, saveMeals, deleteMeal } = require('./MealController');

const router = Router();

router.get('/', getMeal)
router.post('/saveMeals', saveMeals)
router.delete('/deleteMeal', deleteMeal)



module.exports = router;