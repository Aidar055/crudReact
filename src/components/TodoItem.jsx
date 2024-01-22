import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { NavLink } from "react-router-dom";
import { productContext } from "../context/ProductContextProvider";

const TodoItem = ({ name1, surname, number, image, id }) => {
  const { delateItem } = useContext(productContext);
  return (
    <div className="minContainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={image} alt={name1} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Name: {name1}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              SurName: {surname}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Number: {number}
            </Typography>
            <NavLink to={`edit/${id}`}>
              <Button variant="outlined">Edit</Button>
            </NavLink>
            <Button onClick={(e) => delateItem(id)} variant="outlined">
              Delate
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default TodoItem;
