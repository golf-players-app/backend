const router = require("express").Router();
const statusController = require("../controllers/status.controller");
const { isAuthenticated } = require("../middlewares/verifyToken.middleware.js");

router.post("/course/:id/status", statusController.create);
router.get("/courses/:id/status", statusController.average);
