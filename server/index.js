import express from "express";
import bodyParser from "body-parser";
import morgan from 'morgan'
import cors from "cors";
import router from "./route/index.js";
import connect from "./config/db/index.js";

const port = 5000;
const app = express();



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

connect();

app.use(cors());


app.use("/mytodo", router);
app.use(morgan('combined'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
