import { Meal } from '../models/meal.js'

function newMeal(req, res){
  Meal.find({}, function(err, meals) {
    res.render('meals/new',{
      title: 'Add Meal',
      meals: meals,
    })
  })
}

function create(req, res){
  const meal = new Meal(req.body)
  meal.save(function(err) {
    res.redirect('/meals/new')
  })
}

export {
  newMeal as new,
  create,
}