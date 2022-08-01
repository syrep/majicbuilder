import { Grid } from "@mui/material";

export default function OneColumnGrid({
  topPad,
  botPad,
  content,
  justifyPosition,
}) {
  // https://aatifbandey.medium.com/reduce-main-thread-work-in-react-component-a90c9bc1d9b3
  // console.log(justifyPosition);
  return (
    <Grid
      container
      direction="row"
      // spacing={3}
      paddingTop={topPad || 3}
      paddingBottom={botPad || 3}
      justifyContent={justifyPosition || "none"}
      // sx={{ background: "blue" }}
    >
      {/* {content.map((value, index) => {
            return (
              // <Grid item xs={'auto'}>
              <ProductCards
                key={index}
                product_title={value.title}
                product_description={value.description}
                //product_rating={2}
                //edit_switch_state={false}
                //create_switch_state={true}
                purchase_only_state={true}
                product_unique_id={value.title}
              />
              // </Grid>
            );
          })} */}
      {/* <Grid item xs={6}>
          hi {contentLeft}
        </Grid> */}
      <Grid
        item
        xs={12}
        // sm={12}
        // md={12}
        // lg={12}
        // xl={12}
        // sx={{ background: "gray" }}
        md={6}
        // the above needs to exist to facilitate it centering the item on the grid (starting point)
      >
        {/* <Grid item xs={1} sm={2} md={3} lg={4} xl={5} sx={{ background: "gray" }}> */}
        {/* Need to fix the above setting where <code></code> and other things doesn't wrap and long text fails to wrap */}

        {content}
      </Grid>
    </Grid>
  );
}
