import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db"; // Make sure to update the path as necessary

class TaskModel extends Model {
  static createTask(task) {
    return this.create(task);
  }

  static updateTask(task_id, updates) {
    return this.update(updates, { where: { id: task_id } });
  }

  static deleteTask(task_id) {
    return this.destroy({ where: { id: task_id } });
  }

  static getAllTask() {
    return this.findAll();
  }

  static findTask(task_id) {
    return this.findOne({ where: { id: task_id } });
  }
}

// Define the model schema
TaskModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    task: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "Task",
    tableName: "tasks",
    timestamps: false, // or true if you want Sequelize to manage `createdAt` and `updatedAt`
  }
);

export { TaskModel };
