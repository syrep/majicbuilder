import { Container, Grid } from "@mui/material";

// change the styles aboe to make them in here?
import ProductCards from "./ProductCards";

export default function ProductGridLayout({ children, products }) {
  // https://aatifbandey.medium.com/reduce-main-thread-work-in-react-component-a90c9bc1d9b3
  return (
    <Container
      maxWidth="xxl"
      sx={{
        pt: 5,
        pb: 5,
        pl: 2,
        pr: 2,
        // , m: "auto"
      }}
    >
      {/* https://mui.com/system/spacing/ for pt and pb elements */}
      <Grid
        container
        direction="row"
        // direction="column"
        rowGap={2}
        columnGap={3}
        // align="center"

        //justifyContent="center"
        justifyContent="space-around"

        // alignItems="stretch"
      >
        {/* Technically this isn't even a grid, it's a flex */}

        {/* {products.map((value, index) => {
          // console.log(value);
          return (
            // <Grid item xs={'auto'}>
            <Grid item xs={10} sm={5} md={3.5} lg={2.5} xl={2.5} key={index}>
              {/* <ProductCards
                product_unique_id={puid}
                product_title={`value.${pt}`}
                product_description={pd}
                product_price={pp}
                product_rating={pr}
                edit_switch_state={ess}
                create_switch_state={css}
                purchase_only_state={pos}
              /> */}
        {/* 
//  
*/}

        {/* 
              Items surrounding the children need to be in the structure of:
              1. productgrid layout
              2. map function
              3. map function return on first line should have "  <Grid item xs={10} sm={5} md={3.5} lg={2.5} xl={2.5} key={index}>"
              4. map function value/item within the above grid item
              5. close all tags
        */}
        {children}
        {/* </Grid>
          );
        })} */}
      </Grid>
    </Container>
  );
}
