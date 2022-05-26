import {execute} from "../db_conn.js";

const queryTodos = "SELECT * FROM todos";
const insertTodos = "INSERT INTO todos (name, description) VALUES ?";

export const listTodos = async () => {
  return execute(queryTodos)
  
}

export const createTodos = async (todo) => {
  console.log(todo);
  let listTodos = await execute(insertTodos,todo)

}