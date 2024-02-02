
const route= require ('express').Router()
const auth =require('../Middleware/auth')
const store=require('../store')
const{register,login}=require('../Controller/Api')

route.get('/store',store)

route.post('/register',register)
route.post('/login',login)

module.exports= route

//Get the data in the store.js inside a route