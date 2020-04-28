const {Router} = require('express');
const Team = require('../models').team;
const Player = require('../models').user

const router = new Router();

router.get('/', async(request, response, next) => {
  try {
    const teams = await Team.findAll({
      include: [Player]
    });
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
});

router.delete('/deleteteam/:teamId', async(request, response, next) => {
  const {teamId} = request.params
  try {
    const team = await Team.findByPk(teamId);
    
    if (!team) {
      return response.status(404).send('Team Not Found');
    }

    const result = await team.destroy();
    response.status(202).send('Deleted!')
  } catch(error) {
    next(error);
  }
});

module.exports = router;