const TakskController = {};
import TasksModel from "../models/Tasks.js";


//select

TakskController.getTasks = async (req, res) => {
    const Tasks = await TasksModel.find()
    res.json(Tasks)
};


//insert

TakskController.insertTasks = async (req, res) => {
    const {title, description, completed} = req.body;
    const newTasks = new TasksModel({title, description, completed})

    await newTasks.save()
    res.json({message: "Tasks saved"});
};


//delete 

TakskController.deleteTasks = async (req, res) => {
    await TasksModel.findByIdAndDelete(req.params.id);
    res.json({message: "Tasks Deleted"})
}; 


//update

TakskController.updateTasks = async (req, res) => {
    const {name, description, status, image} = req.body;
    const updatedTasks = await TasksModel.findByIdAndUpdate(req.params.id, {title, description, completed} , {new: true} )

    res.json({message: "Updated Tasks"})
};


export default TakskController;