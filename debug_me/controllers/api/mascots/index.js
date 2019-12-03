const router = require('express').Router();
const controller = require('./controller');

router.post('/mascots', controller.create);
router.put('/:id', controller.update);

module.exports = router;
