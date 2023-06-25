const router = require("express").Router();

router.use("/player", require("./player.routes"));
router.use("/review", require("./review.routes"));
router.use("/round", require("./round.routes"));
router.use("/status", require("./status.routes"));

module.exports = router;
