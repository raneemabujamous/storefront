import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../reducer/actions";

export default function MediaCard(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  function addToCrtsHandler(productName) {
    console.log(productName);
    if (!state.cart.cartProducts.includes(productName)) {
      dispatch(addToCart(productName));
    }
  }

  return (
    <>
      <Card
        style={{
          marginLeft: "250px",
          marginTop: "100px",
          display: "inline-block",
          width: "350px",
          height: "400",
          border: "2px solid grey",
          marginBottom: "50px",
        }}
        // sx={{ maxWidth: 345 }}
      >
        <CardHeader title={props.product.title} />
        <CardMedia
          component="img"
          width="350px"
          height="400"
          image={props.product.image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.product.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.product.inventoryCount}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price : {props.product.price}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={() => addToCrtsHandler(props.product.title)}
          >
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
      ;
    </>
  );
}
