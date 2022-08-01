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

import { Grid, TextField } from "@mui/material";
import Link from "next/link";

import styles from "../styles/ProductCards.module.css";
import { Box } from "@mui/system";

export default function ProductCards({
  product_unique_id,
  product_title,
  product_description,
  product_price,
  product_rating,
}) {
  // needs to import the switch_state for edit modes, and also needs
  // to import the create_state to see make all the relevant fields appear

  //this wil return the new value because it is not relying on async
  // https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous

  // The below was used to see how it changed, but it shouldn't be needed now
  //console.log("PC switch_state", edit_switch_state);

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
          <CardMedia
            component="img"
            alt={"product image of " + product_title} //no downloaded image text
            height="140"
            image="https://picsum.photos/200/100"
            title={product_title} //this is hover title
          />
          <CardContent>
            <Grid container direction="column" justifyContent={"space-between"}>
              <Grid item>
                <Typography gutterBottom variant="h5" component="h2">
                  {product_title || "no title"}
                </Typography>
              </Grid>
              {/* Below ternary only shows price if it is given */}
              {product_price ? (
                <Grid item>
                  <Typography gutterBottom variant="h5" component="h2">
                    ${product_price || "no price"}
                  </Typography>
                </Grid>
              ) : (
                ""
              )}
              {/* <Grid item>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product_description || "no description"}
                </Typography>
              </Grid> */}
            </Grid>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Grid container direction="column">
          <Box sx={{ display: "flex", alignItems: "center", pb: 1 }}>
            <Rating
              precision={0.5}
              defaultValue={3.5}
              value={product_rating}
              // size="small"
              readOnly
            />
            ({product_rating || "0"})
            {/* {product_rating} out of 5 (No. ratings) */}
          </Box>

          <Link href={`/${product_unique_id}`} passHref>
            {/* needs the prepended slash because of https://stackoverflow.com/questions/47336589/warning-prop-href-did-not-match-using-react-server-side-rendering */}
            <Button
              size="small"
              variant="contained"
              color="secondary"
              startIcon={<ShoppingCartIcon />}
            >
              Add to cart
            </Button>
          </Link>
        </Grid>
      </CardActions>
    </Card>
  );
}
