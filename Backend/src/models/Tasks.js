import {Schema, model} from "mongoose";

const TasksShema = new Schema({

    title: {
        type: String,
        require: true,
        maxLength: 100
    },
    description: {
        type: String
    },
    completed: {
        type: String
    }
},{
    timestamps: true,
    strict: false
})


export default model("Tasks", TasksShema)