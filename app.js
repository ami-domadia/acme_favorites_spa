const express = require('express')
const router = express.Router()

const {getUsers, getThings} = require('./db/index.js')

router.get('/', (req, res, next)=>{
    return res.redirect('/api/users')
})

router.get('/api/users', (req, res, next)=>{
    return getUsers()
    .then((users)=>res.send(users))
    .catch((err)=>next(err))
})

router.get('/api/things', (req, res, next)=>{
    return getThings()
    .then((things)=>res.send(things))
    .catch((err)=>next(err))
})

module.exports = router