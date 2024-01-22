import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { productContext } from "../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const navigate = useNavigate();
  const { addTodo } = useContext(productContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [image, setImage] = useState("");
  const handleClick = (e) => {
    if (!name.trim() || !surname.trim() || !number.trim() || !image.trim()) {
      return;
    }
    const newObj = {
      name1: name,
      surname: surname,
      number: number,
      image: image,
    };
    addTodo(newObj);
    setName("");
    setSurname("");
    setNumber("");
    setImage("");
    navigate("/");
  };
  return (
    <div className="inpval">
      <div className="inputAdd">
        <div>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="Surname"
            variant="standard"
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="Number"
            variant="standard"
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="Image"
            variant="standard"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <Button onClick={handleClick}>Save</Button>
      </div>
    </div>
  );
};

export default AddProduct;
