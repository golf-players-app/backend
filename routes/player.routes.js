const router = require("express").Router();
const playerController = require("../controllers/player.controller");
const { isAuthenticated } = require("../middlewares/verifyToken.middleware.js");

// C(R)UD
//router.get("/", playerController.listByHandicap);

router.get("/:id", playerController.detail);

// (C)RUD
router.post("/signup", playerController.signup);

// CR(U)D
router.put("/:id", playerController.update);
router.put("/:id/password", playerController.updatePassword);

// CRU(D)
router.delete("/:id", playerController.delete);

// Login
router.post("/login", playerController.login);

//Verify
router.get("/verify", isAuthenticated, playerController.verify);

router.module.exports = router;
