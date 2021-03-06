import React from "react";
import { connect } from "react-redux";
import { selectCategory } from "../reducer/actions";
import { Button } from "@material-ui/core";

function Category(props) {
  function onClickHandler(categoryName) {
    props.selectCategory(categoryName);
  }
  return (
    <>
      <h2 id="Category">Select Category:</h2>
      {props.categories.map((cat) => (
        <>
          <Button
            id="Button"
            variant="contained"
            // color="primary"
            onClick={() => onClickHandler(cat.normalizedName)}
            style={{
              marginLeft: "250px",

              display: "inline-block",
              width: "350px",
              height: "400",
              border: "2px solid grey",
            }}
          >
            {cat.normalizedName}
          </Button>
        </>
      ))}

      {props.activeCategory.normalizedName && (
        <h2>Active Category : {props.activeCategory.normalizedName}</h2>
      )}

      {props.activeCategory.normalizedName && (
        <h4 id="desc"> {props.activeCategory.description}</h4>
      )}
    </>
  );
}
const mapStateToProps = (state) => {
  console.log("STATE============>", state);
  return state.cat;
};
const mapDispatchToProps = { selectCategory };
export default connect(mapStateToProps, mapDispatchToProps)(Category);
