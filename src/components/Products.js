import React, { useEffect } from "react";
import { connect } from "react-redux";
import { filterProducts } from "../reducer/actions";
import MediaCard from "./card";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Products(props) {
  useEffect(() => {
    props.filterProducts(
      props.cat.activeCategory.normalizedName,
      props.cat.products
    );
    console.log("props.prod.filteredProducts", props.prod.filteredProducts);
  }, [props.cat.activeCategory]);
  return (
    <>
      {/* <div id="cards-container"> */}
      {/* {props.prod.filteredProducts.map((product) => (
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {Array.from(Array(6)).map((_, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <MediaCard key={product.name} product={product} />
              </Grid>
            ))}
          </Grid>
        </Box> */}
      {/* ))} */}
      {/* </div> */}
      {props.prod.filteredProducts.map((product) => (
        <MediaCard key={product.name} product={product} />
      ))}
    </>
  );
}

const mapStateToProps = (state) => {
  console.log("STATE???", state);
  return state;
};
const mapDispatchToProps = { filterProducts };
export default connect(mapStateToProps, mapDispatchToProps)(Products);
