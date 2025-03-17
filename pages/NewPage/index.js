import ProductGridLayout from "../../components/ProductGridLayout";
import FullwidthSection from "../../components/FullwidthSection";
import ContentLayout from "../../components/ContentLayout";
import PageSkeleton from "../../components/PageSkeleton";
import { Button, Grid, Link, Typography } from "@mui/material";
import ProductCards from "../../components/ProductCards";
import OneColumnGrid from "../../components/OneColumnGrid";
import { Box } from "@mui/system";
import TwoColumnGrid from "../../components/TwoColumnGrid";
import Image from "next/image";
import { PopoutSection } from "../../components/PopoutSection";

export default function NewPage() {
  let myPosts = [
    {
      description: "Oral Contraception Pill",
    },
    {
      description: "Skin",
    },
    {
      description: "Acne",
    },
    {
      description: "Erectile Dysfunction",
    },
  ];

  let heroLeft = (
    // https://mui.com/material-ui/react-typography/
    // <Grid
    //   container
    //   item
    //   direction="column"
    //   // the below needs to be in array, it works in order of written sizes
    //   // therefore size changes need to be explicitly mentioned
    //   // alignItems={["center", "start"]}
    //   // alignItems={"center"}
    //   ///// alignItems={"center"}
    //   // alignContent={["center", "flex-end"]}
    //   ///// alignContent={"center"}
    //   ///// textAlign={"center"}
    //   // the textalign affects all children (which inherit by default), otherwise overrided by element align
    //   //// the below sizes aren't needed because they affect the container of text itself, which is useless and causes errors
    //   // sm={6}
    //   // md={6}
    //   // md={12}
    //   sx={{ height: "100%" }}
    //   pl={8}
    //   pt={8}
    //   // sx={{ background: "green", height: "100%" }}
    //   // sx={{ background: "green" }}
    //   ///// justifyContent={"space-evenly"}
    //   // the above line is what makes it work, only when the height value is set
    // >
    <>
      <Grid item>
        <Typography
          component="h1"
          variant="heroMain"
          // variant changes the applied font style, but keeps the html as the component
          // align="left"
          // align="center"
          // color="textSecondary" // removed as don't need it in the custom theme variant
          gutterBottom
          // pb={6}
          //className={classes.heroContent.color}
        >
          The Best Digital Health Platform
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          component="h2"
          variant="heroSub"
          // variant changes the applied font style, but keeps the html as the component
          // align="left"
          // align="center"
          // color="textSecondary"
          gutterBottom
          //className={classes.heroContent.color}
        >
          Personalised clinical treatments. All online.
        </Typography>
      </Grid>

      <Grid item pt={12}>
        <Link
          href="/NewPage/Html5form"
          // passHref // don't think this is needed here
        >
          <Button
            variant="contained"
            // color="primary"
            sx={{
              px: "2rem",
              py: "1rem",
              borderRadius: "3rem",
              backgroundColor: "#0052a8",
              color: "#ffffff",
            }}
          >
            Find My Treatment
          </Button>
          {/* This takes ages to change page, maybe it needs to be a link? */}
        </Link>
      </Grid>
      {/* </Grid> */}
    </>
  );

  let heroRight = (
    <Grid item>
      <Box
        sx={{
          display: { md: "block", xs: "none" },
          width: 500,
          // height: 400,
          // overflow: "hidden",
        }}
      >
        {/* //           https://nextjs.org/docs/api-reference/next/image
                needs to be in box because it defaults to container width
             */}
        {/* https://mui.com/material-ui/react-grid/ */}
        <Image
          alt="VR test image"
          // src="https://picsum.photos/300/300"
          src="/assets/herogirl.png"
          width={542}
          height={734}
          // layout="responsive"
        />
      </Box>
    </Grid>
  );

  let rightside = (
    <Grid
      container
      item
      direction="column"
      // the below needs to be in array, it works in order of written sizes
      // therefore size changes need to be explicitly mentioned
      // alignItems={["center", "start"]}
      // alignItems={"center"}
      alignItems={"center"}
      // alignContent={["center", "flex-end"]}
      alignContent={"center"}
      textAlign={"center"}
      // the textalign affects all children (which inherit by default), otherwise overrided by element align
      //// the below sizes aren't needed because they affect the container of text itself, which is useless and causes errors
      // sm={6}
      // md={6}
      // md={12}
    >
      <Grid item>
        <Typography
          component="p"
          //   variant="h2"
          // variant changes the applied font style, but keeps the html as the component
          // align="left"
          // align="center"
          color="textSecondary"
          gutterBottom
          //className={classes.heroContent.color}
        >
          some random text to show that we have text to people and there is
          stuff to look up
        </Typography>
      </Grid>
    </Grid>
  );

  let leftside = (
    <Box>
      {/* //           https://nextjs.org/docs/api-reference/next/image
                needs to be in box because it defaults to container width
             */}
      {/* https://mui.com/material-ui/react-grid/ */}
      <Image
        alt="VR test image"
        // src="https://picsum.photos/300/300"
        src="/assets/warning.png"
        width={300}
        height={300}
        // layout="responsive"
      />
    </Box>
  );

  return (
    <PageSkeleton nav_h1={"NewPage Homepage"} tab_title={"NewPage Home"}>
      <div className="home-content">
        <FullwidthSection
          inLeft={heroLeft}
          inRight={heroRight}
          bgColor="#d2e9ff"
          topPad={12}
          botPad={18}
          alignLeft={"stretch"}
          // this link https://mui.com/material-ui/react-grid/
          // tells us what can go into the align to make it activate height & justify commands
        />

        {/* <ContentLayout> */}
        {/* content layout is not needed when using product grid */}
        {/* <br /> */}
        <PopoutSection />
        <Typography
          component="h2"
          variant="h4"
          // variant changes the applied font style, but keeps the html as the component
          // align="left"
          align="center"
          color="textSecondary"
          gutterBottom
          //className={classes.heroContent.color}
        >
          What do you need help with?
        </Typography>
        <ProductGridLayout>
          {myPosts.map((value, index) => {
            return (
              <Grid item xs={5.5} sm={3.5} md={3} lg={2.5} xl={2.5} key={index}>
                <ProductCards
                  product_unique_id={index + value.description}
                  product_title={value.description}
                  product_description={value.description}
                  product_price={value.price}
                  product_rating={value.rating}
                  edit_switch_state={false}
                  create_switch_state={false}
                  purchase_only_state={true}
                />
              </Grid>
            );
          })}
        </ProductGridLayout>
        <Box
          sx={{
            // backgroundImage: "url(/assets/blurry-gradient-haikei.svg)",
            backgroundColor: "#c5c8d2",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            // pt: 5,
            // pb: 5,
          }}
        >
          <br />
          <Typography
            component="h2"
            variant="h4"
            // variant changes the applied font style, but keeps the html as the component
            // align="left"
            align="center"
            color="textSecondary"
            gutterBottom
            //className={classes.heroContent.color}
          >
            How it works
          </Typography>
          <TwoColumnGrid
            topPad={"0"}
            contentLeft={leftside}
            contentRight={rightside}
          />
        </Box>
        {/* </ContentLayout> */}
      </div>
    </PageSkeleton>
  );
}
