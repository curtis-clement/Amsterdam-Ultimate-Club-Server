const {Router} = require('express');
const User = require('../models').user;

const router = new Router();

router.get('/', async(request, response, next) => {
  const users = await User.findAll();
  response.status(200).send({message: 'success', users})
});

module.exports = router;