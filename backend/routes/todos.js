import express from "express";
import { listTodos,createTodos } from "../controllers/TodoController.js";
const router = express.Router();

/* GET home page. */
router.get("/list", async function (req, res) {
  const list = await listTodos();
  console.log("lista",list);
  res.json(list)
  res.end()
});

router.get("/create", function (req, res) {
  createTodos([[["drugi todo","description"]]]);
  res.write("hello todos post");
  res.end();
});

export default router;
