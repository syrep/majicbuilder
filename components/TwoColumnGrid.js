import { Grid } from "@mui/material";

// TODO:
// 1. fix when width is <300px the text or contents overflow the bounds

export default function TwoColumnGrid({
  topPad,
  botPad,
  leftsidePad,
  contentLeft,
  contentRight,
  alignLeft,
  alignRight,
  bgColor,
}) {
  // https://aatifbandey.medium.com/reduce-main-thread-work-in-react-component-a90c9bc1d9b3
  return (
    <Grid
      container
      direction="row"
      paddingLeft={{ xs: 0, md: 3 }} // for left and right
      paddingRight={{ xs: 0, md: 3 }}
      paddingTop={topPad || 3}
      paddingBottom={botPad || 3}
      // marginTop="auto" // this fixes the overlapping margin top
      margin="auto" //fixes top and sides to make it centered
      // marginLeft="auto"
      // marginRight="auto"
      xl={12}
      // maxWidth="xxl"
      xxl={8} //This isn't fixing the max size on newpage, seems to be still stretching
      // justifyContent={"center"} // is this actually needed?
      // columnSpacing={6}
      // rowSpacing={3}
      //  spacing={3}
      // spacing is removed beause it causes the grids to overlap, replaced with the grid version instead
      //sx={{ background: "green" }}
      sx={{
        backgroundColor: bgColor,
      }}
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
        container
        direction="column"
        paddingLeft={leftsidePad || { xs: 2, md: 3 }}
        paddingTop={10}
        xs={12}
        sm={12}
        md={6}
        // sx={{ background: "orange" }}
        // justifySelf={"right"}
        // alignSelf={"flex-start"} // this makes it stick to top
        alignSelf={alignLeft || "center"}
        align={alignLeft || "center"}
        // may not need to align center here, but makes sense instead of doing on the model page itself
      >
        {contentLeft}
        {/* Need to add helper text so you know its meant to take in grid items */}
      </Grid>
      <Grid
        item
        container
        direction="column"
        xs={12}
        sm={6}
        md={6}
        align={alignRight || "center"}
        alignSelf={alignRight || "center"}
        //sx={{ background: "transparent" }}
      >
        {contentRight}
        {/* this needs to be centered like the left side? */}
      </Grid>
    </Grid>
  );
}
