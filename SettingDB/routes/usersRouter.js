const { Router } = require('express')
const usersController = require('../controllers/usersController')
const usersRouter = Router()

usersRouter.get("/", usersController.getUsers)
usersRouter.get("/new", usersController.addUserForm)
usersRouter.post("/new", usersController.addUser)

module.exports = usersRouter