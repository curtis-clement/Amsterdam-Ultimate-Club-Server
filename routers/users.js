const {Router} = require('express');
const User = require('../models').user;
const Team = require('../models').team;

const router = new Router();

router.get('/', async(request, response, next) => {
  const users = await User.findAll({
    include: [Team]
  });
  response.status(200).send({message: 'success', users})
});

module.exports = router;