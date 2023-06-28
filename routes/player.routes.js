const router = require("express").Router();
const playerController = require("../controllers/player.controller");
const { isAuthenticated } = require("../middlewares/verifyToken.middleware.js");

// C(R)UD
router.get("/players/:id", playerController.detail);
router.get("/player/:id/contacts", playerController.listByContacts);

// (C)RUD
router.post("/signup", playerController.signup);

// CR(U)D
router.put("/players/:id", playerController.update);
router.put("/players/:id/password", playerController.updatePassword);

// CRU(D)
router.delete("/players/:id", playerController.delete);

// Login
router.post("/login", playerController.login);

// Logout
router.post("/logout", playerController.logout);

//Verify
router.get("/verify", isAuthenticated, playerController.verify);

module.exports = router;
