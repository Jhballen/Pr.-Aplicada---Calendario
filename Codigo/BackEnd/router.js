const router = require('express').Router();

//CONSTROLLER LIST
const taskController = require('./controller/task.controller');
const userController = require('./controller/user.controller');

//TASK
router.get('/task', taskController.getAll);
router.post('/task', taskController.post);


//USER


module.exports = router;