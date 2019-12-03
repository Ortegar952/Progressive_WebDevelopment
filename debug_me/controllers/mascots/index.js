const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.index); // order matters 
router.get('/new', controller.new);

router.get('/:id', controller.update);
router.get('/new', controller.new);
router.get('/:id', controller.show);



module.exports = router;
