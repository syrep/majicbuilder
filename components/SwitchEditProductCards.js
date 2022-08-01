import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { Grid, TextField } from "@mui/material";
import Link from "next/link";

import { useEffect, useState } from "react";

import styles from "../styles/ProductCards.module.css";
import { Box } from "@mui/system";

// NEED TO BREAK THIS INTO 3 PARTS:
//  1. MAIN FUNCTION TO RETURN CARDS DEPENDING ON MODE
//  2. CARD FOR NORMAL MODE
//  3. CARD FOR EDIT MODE

export default function ProductCards({
  product_unique_id,
  product_title,
  product_description,
  product_price,
  product_rating,
  edit_switch_state,
  create_switch_state,
  purchase_only_state,
}) {
  // needs to import the switch_state for edit modes, and also needs
  // to import the create_state to see make all the relevant fields appear

  //this wil return the new value because it is not relying on async
  // https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous

  // The below was used to see how it changed, but it shouldn't be needed now
  //console.log("PC switch_state", edit_switch_state);

  //below stuff is all to make the create form stuff work
  const [newFormData, setNewFormData] = useState({
    name: "",
    price: "",
    rating: "",
  });

  const handleChangeForm = (name) => (event) => {
    console.log(name, event);
    setNewFormData({ ...newFormData, [name]: event.target.value });
    //  setNewFormData(event.target.value);
    console.log("form data", newFormData);
    console.log("form data name", newFormData.name);
  };

  // will need to add stuff to edit form below also

  const [updateFormData, setUpdateFormData] = useState({
    productByID: product_unique_id,
    name: product_title,
    price: product_price,
    rating: product_rating,
  });

  // this is the original, wasn't allowing the default to be populated
  // const [updateFormData, setUpdateFormData] = useState({
  //   name: "",
  //   price: "",
  //   rating: "",
  // });

  const updatehandleChangeForm = (name) => (event) => {
    console.log(name, event);
    setUpdateFormData({ ...updateFormData, [name]: event.target.value });
    //  setNewFormData(event.target.value);
    console.log(" update form data", updateFormData);
    // console.log("form data name", updateFormData.name);

    ////// SHOULD MAKE THIS RESET THE FORM DATA ONCE A NEW ID IS CLICKED
    // console.log("Update ID passed in is: ", update_id);
    console.log("Product Update ID passed in is: ", product_unique_id);

    console.log(updateFormData);
  };

  const bottomButtons = (
    <IconButton
      size="small"
      color="secondary"
      className={styles.icons}
      // may need to change the below to something more reusable or switchable for edit mode
      //href={"models/" + product_title + "/edit"}
      // onClick={() =>
      //   updateData(
      //     {
      //       // update_id: update_id,
      //       update_id: product_unique_id,
      //       // should the above be added to the state?
      //       update_rating: updateFormData.rating,
      //       update_price: updateFormData.price,
      //       update_name: updateFormData.name,
      //     },
      //     console.log("At Time" + updateFormData)
      //   )
      // }
    >
      <SaveIcon />
    </IconButton>
  );

  const bottomButtons2 = (
    <Button
      size="small"
      variant="contained"
      color="secondary"
      className={styles.icons}
      // may need to change the below to something more reusable or switchable for edit mode
      ///href={"models/" + product_title + "/edit"}
      // onClick={() => removeData(product_unique_id)}
      //
      //need to add the onlick for this

      startIcon={<AddIcon />}
      // onClick={() =>
      //   addData({
      //     new_rating: newFormData.rating,
      //     new_price: newFormData.price,
      //     new_name: newFormData.name,
      //   })
      // }
    >
      Add
    </Button>
  );

  return (
    <Card
      sx={{
        // maxWidth: 345,
        // minWidth: 320,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        // the first 3 are required to make the card actions stick to the bottom
        // height is needed to make it occuy entire grid
        // https://stackoverflow.com/questions/55824260/same-height-cards-in-material-ui
      }}
    >
      {/* <CardActionArea href={"models/" + product_title}> */}
      <Link href={`/${product_unique_id}` || "no puid"} passHref>
        {/* above has the or statement so it doesn't crash if there is no unique_id passed */}
        {/* Unique ID shouldn't even be used for this, the whole thing needs a refactor */}
        <CardActionArea>
          {/* Temporarily using uniqueid here to make the clicking */}
          {/* // Can also make the above respond to having a switch state?*/}
          {/* <CardActionArea> */}
          <CardMedia
            component="img"
            alt="Contemplative Reptile" //this is no image text
            height="140"
            image="https://picsum.photos/200/100"
            title="Contemplative Reptile" //this is hover title
          />
          <CardContent>
            {/* <Typography gutterBottom variant="h5" component="h2">
            

            {edit_switch_state ? (
              // THIS IS THE OLD ONE
              //

              //Why is the below an individual form, it should be a whole formgroup if this is what we are doing
              <form noValidate autoComplete="off">
                <TextField
                  id="standard-basic"
                  label="Product Title"
                  // defaultValue={"Current SwPos " + edit_switch_state}
                  defaultValue={product_title}
                />
              </form>
            ) : (
              product_title
            )}
          </Typography> */}

            {/* New ones below */}
            <Grid container direction="column" justifyContent={"space-between"}>
              {/* <div> */}
              {/* make the below an input form? */}
              {/* <form> */}
              {/* https://dev.to/hibaeldursi/creating-a-contact-form-with-validation-with-react-and-material-ui-1am0 */}
              <Grid item>
                <Typography gutterBottom variant="h5" component="h2">
                  {edit_switch_state ? (
                    <TextField
                      ///  id="newtitleupdate"
                      name="updatename"
                      label="Update Product Title"
                      // defaultValue={"Current SwPos " + edit_switch_state}
                      //defaultValue={product_title}
                      // onChange={(event) =>
                      //   //handleChangeForm(event.target.name, event.target.value)
                      //   setNewFormData({ [event.target.name]: event.target.value })
                      // }
                      onBlur={updatehandleChangeForm("name")}
                      //onBlur={(e) => console.log(e.target.value)}
                      defaultValue={product_title}
                    />
                  ) : (
                    <>Title: {product_title || "no title"}</>
                  )}
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h5" component="h2">
                  {edit_switch_state ? (
                    <TextField
                      id="updatedesc"
                      label="Update Product Price"
                      // defaultValue={"Current SwPos " + edit_switch_state}
                      //defaultValue={product_title}
                      // onChange={handleChangeForm("price")}
                      onBlur={updatehandleChangeForm("price")}
                      defaultValue={product_price}
                    />
                  ) : (
                    <>Price: {product_price || "no price"}</>
                  )}{" "}
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h5" component="h2">
                  {edit_switch_state ? (
                    <TextField
                      id="updaterating"
                      label="Update Product Rating"
                      // defaultValue={"Current SwPos " + edit_switch_state}
                      //defaultValue={product_title}
                      // onChange={handleChangeForm("rating")}
                      onBlur={updatehandleChangeForm("rating")}
                      // using onBlur becuase onChange causes way too many re-renders
                      // would also need to use defaultValue when filling in the textbox becuase of:
                      //https://stackoverflow.com/questions/42522515/what-are-react-controlled-components-and-uncontrolled-components
                      // maybe should use useCallback also?
                      defaultValue={product_rating}
                    />
                  ) : (
                    <>Rating: {product_rating || 0}</>
                  )}{" "}
                </Typography>
              </Grid>
              {/* </form> */}
              {/* The above form by itself stops the formdata from being sent */}
              {/* </div> */}
              <Grid item>
                <Typography variant="body2" color="textSecondary" component="p">
                  CONTENT: {product_description || "no description"}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="textSecondary" component="p">
                  PRICE: ${product_price || "0"}
                </Typography>
              </Grid>
            </Grid>

            {create_switch_state ? (
              <div>
                {/* make the below an input form? */}
                <TextField
                  id="newtitle"
                  name="name"
                  label="NewProduct Title"
                  // defaultValue={"Current SwPos " + edit_switch_state}
                  //defaultValue={product_title}
                  // onChange={(event) =>
                  //   //handleChangeForm(event.target.name, event.target.value)
                  //   setNewFormData({ [event.target.name]: event.target.value })
                  // }
                  onBlur={handleChangeForm("name")}
                  //onBlur={(e) => console.log(e.target.value)}
                />
                <TextField
                  id="newdesc"
                  label="NewProduct Price"
                  // defaultValue={"Current SwPos " + edit_switch_state}
                  //defaultValue={product_title}
                  // onChange={handleChangeForm("price")}
                  onBlur={handleChangeForm("price")}
                />
                {/* <TextField
                id="newrating"
                label="NewProduct Rating"
                // defaultValue={"Current SwPos " + edit_switch_state}
                //defaultValue={product_title}
                // onChange={handleChangeForm("rating")}
                onBlur={handleChangeForm("rating")}
                // using onBlur becuase onChange causes way too many re-renders
                // would also need to use defaultValue when filling in the textbox becuase of:
                //https://stackoverflow.com/questions/42522515/what-are-react-controlled-components-and-uncontrolled-components
                // maybe should use useCallback also?
              /> */}
                <Rating
                  precision={0.5}
                  //defaultValue={3.5}
                  //above removed because it makes error when saving
                  value={product_rating}
                  //readOnly
                  onBlur={handleChangeForm("rating")}
                />
              </div>
            ) : (
              ""
            )}
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Grid container direction="row">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Rating
              precision={0.5}
              defaultValue={3.5}
              value={product_rating}
              size="small"
              readOnly
            />
            {/* {product_rating} out of 5 (No. ratings) */}(
            {product_rating || "0"})
          </Box>
          {/* {create_switch_state ? (
            // if not creating, then show nothing
            ""
          ) : (
            // if not creating, then show the link to product page "edit" icon
            <IconButton
              size="small"
              color="primary"
              className={styles.icons}
              // may need to change the below to something more reusable or switchable for edit mode
              href={"models/" + product_title + "/edit"}
            >
              <EditIcon />
            </IconButton>
          )} */}
          {/* Cusom button below to trigger with switch state for deleting products 
        // this works by first checking if it's a create box, then if not it'll run the check to see if its in edit mode
        // this is inline ternary operator from https://stackoverflow.com/questions/46408983/multiple-condition-in-ternary-operator-in-jsx
        */}
          {create_switch_state ? (
            // if creating, then show the "add product" button
            bottomButtons2
          ) : edit_switch_state ? (
            // if not creating, but are editing, then show the "save" icon for updating
            bottomButtons
          ) : purchase_only_state ? (
            // if not creating, not editing, then show the "purchase" button
            <Link href={`/${product_unique_id}`} passHref>
              {/* needs the prepended slash because of https://stackoverflow.com/questions/47336589/warning-prop-href-did-not-match-using-react-server-side-rendering */}
              <Button
                size="small"
                variant="contained"
                color="secondary"
                className={styles.icons}
                // may need to change the below to something more reusable or switchable for edit mode
                // href={"models/" + product_title}

                // onClick={() => removeData(product_unique_id)}
                //
                //need to add the onlick for this

                startIcon={<ShoppingCartIcon />}
                // onClick={() =>
                //   addData({
                //     new_rating: newFormData.rating,
                //     new_price: newFormData.price,
                //     new_name: newFormData.name,
                //   })
                // }
              >
                Buy
              </Button>
            </Link>
          ) : (
            // if not creating and not editing and not purchasing, then show the "delete" icon
            <IconButton
              size="small"
              color="secondary"
              className={styles.icons}
              // may need to change the below to something more reusable or switchable for edit mode
              ///href={"models/" + product_title + "/edit"}
              // onClick={() => removeData(product_unique_id)}
            >
              <DeleteIcon />
            </IconButton>
          )}
        </Grid>
      </CardActions>
    </Card>
  );
}
