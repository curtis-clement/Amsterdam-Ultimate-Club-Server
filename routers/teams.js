const {Router} = require('express');
const Team = require('../models').team;

const router = new Router();

router.get('/', async(request, response, next) => {
  try {
    const teams = await Team.findAll();
    response.status(200).send({message: 'success', teams});
  } catch(error) {
    console.log(error.message);
    next(error);
  }
});

router.post('/createteam', async(request, response, next) => {
  try {
  const newTeam = await Team.create(request.body);
  response.send(request.body)
  } catch(error) {
    next(error);
  }
})

module.exports = router;