const { DataTypes, Model } = require("sequelize");
const sequelize = require("../utils/db.js");

class Task extends Model {
    static fetchAllTask() {
        return Task.findAll();
    }

    static fetchOneTask(task_id) {
        return Task.findOne({where:{ id: task_id}});
    }

    static createTask(params) {
        return Task.create(params);
    }

    static updateTask(task_id, params) {
        return Task.update(params,{where:{id: task_id}});
    }

    static deleteTask(task_id) {
        return Task.destroy({where:{id: task_id}});
    }
} 

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: "Task",
    tableName: "task",
    timestamps: true, 
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);

module.exports = Task ;
