//DECLARATIONS
const express = require('express');
const app = express();
const router = require('./router');
const engine = require('ejs-mate');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const ejs = require('ejs');
const { mainModule } = require('process');
//DATABASE
require('./database/db.connection');
require('./passport/local-auth');   


//MIDDLEWEARS
const people = ['geddy', 'neil', 'alex'];
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'secretsession',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    app.locals.signupMessage = req.flash('signupMessage');
    next();
});
//SETTINGS
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

//MAIN ROUTE
app.use('/', router);

app.listen(8082, ()=>{
    console.log('SERVER IS LISTEN ON PORT 8082');
});