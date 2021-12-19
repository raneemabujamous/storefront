import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 350,
//   },
//   media: {
//     height: 400,
//   },
// });

export default function MediaCard(props) {
  //   const classes = useStyles();

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
        <CardHeader title={props.product.name} />
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
            Price : {props.product.price}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
      ;
    </>
  );
}
