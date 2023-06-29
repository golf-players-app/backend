const router = require("express").Router();

router.use("/clubs", require("./club.routes"));
router.use("courses", require("./course.routes"));
router.use("/players", require("./player.routes"));
router.use("/reviews", require("./review.routes"));
router.use("/rounds", require("./round.routes"));
router.use("/conditions", require("./condition.routes"));

module.exports = router;
