const router = require("express").Router();
const usersRoute = require('./users.routes')

router.use("/users", usersRoute)

module.exports = router;
