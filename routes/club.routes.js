const router = require("express").Router();
const clubController = require("../controllers/club.controller");
const { isAuthenticated } = require("../middlewares/verifyToken.middleware.js");

router.get("/clubs/:id", clubController.detail);
router.get("/clubs", clubController.list);
