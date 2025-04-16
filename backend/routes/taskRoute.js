const express = require("express")
const router = express.Router()

const { postTask, getTasks, putTask, deleteTask } = require("../controllers/taskController")

router.route("/postTask").post(postTask)
router.route("/getTask").get(getTasks)
router.route("/putTask/:id").put(putTask)
router.route("/deleteTask/:id").delete(deleteTask)

module.exports = router