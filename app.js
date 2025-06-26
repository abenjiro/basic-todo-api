const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.use(express.json());

// task route import
const TaskRoutes = require('./src/tasks/router');


const PORT = process.env.PORT || 3000;

console.log(process.env.CONFIG);

app.get('/', (req, res) => {
    res.send("hello world");
});

app.use('/task', TaskRoutes );

//model imports
const TaskModel = require('./src/models/Task');

app.listen((PORT), () => {
    console.log("Server listening on 3000");
})

