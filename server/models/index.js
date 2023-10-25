import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    id:String,
    name: {type:String, default:'learn default'},
    priority: {type:String, default:'default'},
    completed: Boolean,
  },
  {
    timestamps: true,     
  }
);

export default mongoose.model("todoLists", todoSchema);
