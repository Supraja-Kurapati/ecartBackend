const route= require ('express').Router()
const auth =require('../Middleware/auth')
const store=require('../store')
const{register}=require('../Controller/Api')

route.get('/store',store)

route.post('/register',auth,register)

module.exports={route}

//Get the data in the store.js inside a route