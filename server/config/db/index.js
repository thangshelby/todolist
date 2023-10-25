import mongoose from "mongoose";

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/todo_list_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

export default  connect 