const Controller = require('../controllers/controller')
const router = require("express").Router()

router.get("/", Controller.testConnection)
router.get("/agents", Controller.getAgents)

module.exports = router