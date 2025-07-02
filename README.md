# basic-todo-api

A full-featured Task Management App with an accompanying Node.js REST API and a PostgreSQL database. This app allows users to:

Add tasks with priorities (High, Medium, Low)

Mark tasks as completed

Edit and delete tasks

View real-time activity logs (create, edit, complete, delete)

Analyze task completion stats with a visual chart
 

## Built with Node.js and Express

PostgreSQL database

Sequelize ORM

Endpoints:

GET /api/task - List all tasks

POST /api/task - Create task

PATCH /api/task/:id - Update task

DELETE /api/task/:id - Delete task

GET /api/task/logs - Get last 5 activity logs

GET /api/task/analytics - Task stats (pending, completed, total)


## Technologies Used

Backend: Node.js, Express.js

ORM: Sequelize

Database: PostgreSQL

## Backend Setup
git clone https://github.com/abenjiro/basic-todo-api.git
cd todo-api
npm install

# configure PostgreSQL connection in .env
npx sequelize db:migrate
npm start


## License
This project is licensed under the MIT License.