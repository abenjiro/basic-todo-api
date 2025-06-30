const Task = require("../../models/Task");
const TaskActivity = require("../../models/TaskActivity");

module.exports = {
    getTask: (req, res) => {
        Task.fetchAllTask()
            .then((task) => {
                return res.status(200).json({
                    status: true,
                    data: task,
                })
            }).catch((err) => {
                return res.status(500).json({
                    status: false,
                    error: err,
                });
            });
    },

    createTask: (req, res) => {
        const { body } = req;
        Task.createTask(body)
            .then((task) => {
                return res.status(200).json({
                    status: true,
                    data: task,
                })
            }).catch((err) => {
                return res.status(500).json({
                    status: false,
                    error: err,
                });
            });
    },

    updateTask: (req, res) => {
        const { params: { id }, body: payload } = req;
        console.log(id, payload)
        Task.updateTask(id, payload)
            .then(() => {
                return Task.fetchOneTask(id);
            })
            .then((task) => {
                return res.status(200).json({
                    status: true,
                    data: task,
                })
            }).catch((err) => {
                return res.status(500).json({
                    status: false,
                    error: err,
                });
            });
    },

    deleteTask: (req, res) => {
        const { params: { id } } = req;
        Task.deleteTask(id)
            .then((task) => {
                return res.status(200).json({
                    status: true,
                    data: task,
                })
            }).catch((err) => {
                return res.status(500).json({
                    status: false,
                    error: err,
                });
            });
    },

    // task activities
    getTaskActivities: (req, res) => {
        TaskActivity.fetchAllTaskActivities()
            .then((activities) => {
                return res.status(200).json({
                    status: true,
                    data: activities,
                })
            }).catch((err) => {
                return res.status(500).json({
                    status: false,
                    error: err,
                });
            });
    },

    getTaskAnalysis: (req, res) => {
        Task.taskAnalysis()
            .then((analysis) => {
                return res.status(200).json({
                    status: true,
                    data: analysis,
                })
            }).catch((err) => {
                return res.status(500).json({
                    status: false,
                    error: err,
                });
            });
    },

}
