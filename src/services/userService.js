import axios from "axios";

export const getUser = async userId =>
  await axios.get(`https://jsonplaceholder.typicode.com/todos/${userId}`);
