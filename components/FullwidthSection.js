import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import makeStyles from "@mui/styles/makeStyles";
import Button from "@mui/material/Button";
import Image from "next/image";
import Box from "@mui/material/Box";
import Link from "next/link";

import BgImg from "../public/assets/blurry-gradient-haikei.svg";

import TwoColumnGrid from "./TwoColumnGrid";

// const useStyles = makeStyles((theme) => ({
//   icon: {
//     marginRight: theme.spacing(2),
//   },
//   heroContent: {
//     backgroundColor: "#c8b9b8",
//     // https://app.haikei.app/

//     // backgroundImage: "url(/assets/blurry-gradient-haikei.svg)",
//     // backgroundImage: `url(${
//     //   process.env.PUBLIC_URL + "/assets/blurry-gradient-haikei.svg"
//     // })`,
//     padding: theme.spacing(8, 0, 6),
//     color: "#ffffff",
//   },
//   heroButtons: {
//     marginTop: theme.spacing(4),
//   },
//   cardGrid: {
//     paddingTop: theme.spacing(8),
//     paddingBottom: theme.spacing(8),
//   },
//   card: {
//     height: "100%",
//     display: "flex",
//     flexDirection: "column",
//   },
//   cardMedia: {
//     paddingTop: "56.25%", // 16:9
//   },
//   cardContent: {
//     flexGrow: 1,
//   },
//   footer: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(6),
//   },
// }));

export default function FullwidthSection({
  inLeft,
  inRight,
  bgColor,
  topPad,
  botPad,
  alignLeft,
  alignRight,
}) {
  // here is the hero unit
  // const classes = useStyles();
  // https://smartdevpreneur.com/the-complete-guide-to-material-ui-grid-align-items/

  let leftside = (
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
          component="h1"
          variant="h2"
          // variant changes the applied font style, but keeps the html as the component
          // align="left"
          // align="center"
          color="textSecondary"
          gutterBottom
          //className={classes.heroContent.color}
        >
          Demo
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="h5"
          // align="left"
          color="textPrimary"
          paragraph
          //className={classes.heroContent.color}
        >
          FBT tested VR assets and models
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="h5"
          // align="left"
          color="textSecondary"
          paragraph
          // className={classes.heroContent.color}
        >
          Compatible, Customizable, Yours
        </Typography>
      </Grid>
      <Grid item>
        <Link href="/models" passHref>
          <Button variant="contained" color="primary">
            Shop Now
          </Button>
          {/* This takes ages to change page, maybe it needs to be a link? */}
        </Link>
      </Grid>
    </Grid>
  );

  let rightside = (
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
    <Grid
      sx={{
        // backgroundImage: "url(/assets/blurry-gradient-haikei.svg)",
        backgroundColor: bgColor || "#c5c8d2",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // pt: 5,
        // pb: 5,
      }}
    >
      <TwoColumnGrid
        topPad={topPad || "0"}
        botPad={botPad}
        contentLeft={inLeft || leftside}
        contentRight={inRight || rightside}
        bgColor={bgColor}
        alignLeft={alignLeft}
        alignRight={alignRight}
      />
    </Grid>
  );
}
