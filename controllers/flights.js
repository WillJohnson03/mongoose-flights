import { Flight } from '../models/flights.js'

function index(req, res){
  Flight.find({}, function (err, flights){
    res.render('flights/index', {
      flights: flights,
      err: err,
    })
  })
}

function newFlight(req, res) {
  res.render('flights/new')
}

function create(req, res) {
  const flight = new Flight
  flight.save(function(err) {
    if (err) return res.redirect('/flight/new')
    res.redirect('/flights')
  })
}

export {
  index,
  newFlight as new,
  create
}