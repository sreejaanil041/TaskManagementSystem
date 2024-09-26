const taskModel=  require('../models/tasks');

module.exports = {

    getAll: function(req, res, next) {


        let tasksList = [];
        taskModel.find({status:1, deleted:0}, function(err, tasks){
            if (err){
                next(err);
            } else{
                for (let task of tasks) {
                    taskList.push({id: task._id, task: task.tasks, description: task.description});
                }
                res.json({status:"success", message: "Task list found!!!", data:{tasks: tasksList}});
                
            }
        });
    },

    create: function(req, res, next) {
        userModel.findOne({id:req.body._id}, function(err, taskInfo){
            if(taskInfo){ 
                res.json({status: "error", message: "User already exists!!!", data: null});
            }else {

                
                taskModel.create({ task: req.body.task, task_desc: req.body.task_desc }, function (err, result) {
                    if (err) 
                    next(err);
                    else
                    res.json({status: "success", message: "User added successfully!!!", data: null});
                });
            }
        });
    }
}