const { DataTypes, Model } = require("sequelize");
const sequelize = require("../utils/db.js");

class TaskActivity extends Model {
    static fetchAllTaskActivities() {
    return TaskActivity.findAll({
        order: [['id', 'DESC']],
        limit: 5
    });
}


    static fetchOneTask(task_id) {
        return TaskActivity.findOne({where:{ task_id: task_id}});
    }
} 

TaskActivity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ip_address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: "TaskActivity",
    tableName: "task_activities",
    timestamps: false, 
  }
);

module.exports = TaskActivity ;
