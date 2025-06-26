const Task = require("../../models/Task")

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
        const {body} = req;
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
        const { params: { id }, body: payload} = req;
        console.log(id, payload)
        Task.updateTask(id, payload)
        .then(()=>{
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
    }
}
