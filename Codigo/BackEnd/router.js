const router = require('express').Router();
const passport = require('passport');
//CONSTROLLER LIST
const taskController = require('./controller/task.controller');
const userController = require('./controller/user.controller');

//TASK
router.get('/task', taskController.getAll);
router.post('/task', taskController.post);

router.get('/', (req, res, next) =>{
    res.render('index');
});
//SIGN UP

router.get('/signup', (req, res, next) => {
    res.render('signup');
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    passReqTocallback: true
})); 
    

//SIGN IN
router.get('/signin', (req, res, next) => {

});
router.post('/signin', (req, res, next) =>{

});


//USER
router.get('/user', userController.getAll);
router.post('/user', userController.post);

module.exports = router;