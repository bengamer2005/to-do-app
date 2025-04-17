const express = require("express")
const router = express.Router()

const { postTask, getTasks, getCompletedTasks, putTask, completeTask, deleteTask } = require("../controllers/taskController")

router.route("/postTask").post(postTask)
router.route("/getTask").get(getTasks)
router.route("/getCompletedTasks").get(getCompletedTasks)
router.route("/putTask/:id").put(putTask)
router.route("/completeTask/:id").put(completeTask)
router.route("/deleteTask/:id").delete(deleteTask)

module.exports = router