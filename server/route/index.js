import express  from "express";
import { render,addNewTodo ,deleteTodo } from "../controllers/index.js";
const router= express.Router()


router.delete('/delete/:id',deleteTodo)
router.post('/',addNewTodo)
router.get('/',render)

export default router