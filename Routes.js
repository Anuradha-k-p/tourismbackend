const routes =require('express').Router();

// const {data} = require('./Data');
const { register, login } = require('./controller/userController');
//const {package} = require('./controller/productController');
const { NewData } = require('./NewData');

routes.get('/tour',NewData);
// routes.get('/package',package)

routes.post('/register',register)
routes.post('/login',login)


module.exports = {routes}

