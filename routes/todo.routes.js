const router = require("express").Router()
const Todo = require("../models/Todo.model");
const todoController = require("../controllers/todo.controller");

// C(R)UD
router.get("/", todoController.list);

router.get("/:id", todoController.detail);

// (C)RUD
router.post("/", todoController.create);

// CR(U)D
router.put("/:id", todoController.update);

// CRU(D)
router.delete("/:id", todoController.delete);

module.exports = router;