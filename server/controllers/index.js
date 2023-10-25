import todoLists from "../models/index.js";

export const render = async (req, res) => {
  try {
    await todoLists
      .find({})
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(() => {});
  } catch (error) {
    res.status(402).json({ message: error.message });
  }
};
export const addNewTodo = async (req, res) => {
  const { id, name, priority, completed } = req.body;
  const newTodo = new todoLists({ id, name, priority, completed });
  try {
    await newTodo.save().then(() => {
      res.status(201).json(newTodo);
    });
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    await todoLists.deleteOne({ id: req.params.id }).then(() => {
      todoLists.find({}).then((data) => {
        res.status(200).json(data);
      });
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
