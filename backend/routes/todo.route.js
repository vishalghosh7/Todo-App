const router = require("express").Router();
const todoController = require("../controllers/todo.controller");

router.get("/", todoController.todoController_get_info);
router.post("/", todoController.todoController_post_info);
router.delete("/:id", todoController.todoController_delete_info);
router.put("/:id", todoController.todoController_update_info);

module.exports = router;