import axios from "axios";
import React, { createContext, useState } from "react";
import { API } from "../helpers/const";
export const productContext = createContext();
const ProductContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  // ! create
  const addTodo = async (todo) => {
    await axios.post(API, todo);
  };
  //   ! Read
  const getItem = async () => {
    try {
      const { data } = await axios(API);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };
  //   ! delate
  const delateItem = async (id) => {
    await axios.delete(`${API}/${id}`);
    getItem();
  };
  const values = {
    addTodo,
    todos,
    getItem,
    delateItem,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
