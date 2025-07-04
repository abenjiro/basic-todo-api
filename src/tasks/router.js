const TaskController = require('./controllers/TaskController');

const router = require('express').Router();

// get all task
router.get('/', TaskController.getTask);

// create task
router.post('/', TaskController.createTask);

// update task
router.patch('/:id', TaskController.updateTask);

//delete tasks
router.delete('/:id', TaskController.deleteTask);

//task activites
router.get('/logs', TaskController.getTaskActivities);

//task analysis
router.get('/analytics',TaskController.getTaskAnalysis)

module.exports = router;

