const router = require('express').Router();

const controller = require('./controller');

// router method here

//takes two arguments router.method(url ext, controllers)

router.post('/jokes', controller.create);

module.exports = router;
