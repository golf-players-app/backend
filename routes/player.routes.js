const router = require("express").Router();
const playerController = require("../controllers/player.controller");
const { isAuthenticated } = require("../middlewares/verifyToken.middleware.js");

// C(R)UD
router.get("/:id", playerController.detail);
router.get("/:id/contacts", playerController.listByContacts);

// (C)RUD
router.post("/signup", playerController.signup);

// CR(U)D
router.put("/:id", playerController.update);
router.put("/:id/password", playerController.updatePassword);

// CRU(D)
router.delete("/:id", playerController.delete);

// Login
router.post("/login", playerController.login);

// Logout
router.post("/logout", playerController.logout);

//Verify
router.get("/verify", isAuthenticated, playerController.verify);

module.exports = router;
