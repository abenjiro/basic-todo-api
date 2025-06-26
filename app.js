const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.use(express.json());

// Import DB table creator
const createTaskTable = require('./src/utils/db_init');

// Initialize DB table on app start
createTaskTable();

// task routes
const TaskRoutes = require('./src/tasks/router');
app.use('api/task', TaskRoutes);


//model imports
const TaskModel = require('./src/models/Task');

const PORT = process.env.PORT || 3000;

console.log(process.env.CONFIG);

app.get('/', (req, res) => {
    res.send("hello world");
});


app.listen((PORT), () => {
    console.log(`Server listening on ${PORT}`);
})

