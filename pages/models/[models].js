import { useRouter } from "next/router";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Chip from "@mui/material/Chip";
import DownloadIcon from "@mui/icons-material/Download";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import TwoColumnGrid from "../../components/TwoColumnGrid";
import OneColumnGrid from "../../components/OneColumnGrid";
import ContentLayout from "../../components/ContentLayout";
import Grid from "@mui/material/Grid";
import PageSkeleton from "../../components/PageSkeleton";
import ImageCarouselView from "../../components/ImageCarouselView";
import { getFileData, getFolderData } from "../getCmsData";

function ErrorPage(props) {
  const router = useRouter();
  //console.log(router.query);
  // used to be {models} = router.query, but this makes it more simple
  const urimodels = router.query.userpages;
  // needs to be same same as [models].js
  //console.log("query", router.query);

  // console.log("props", props);
  // should fix the fact that the content is in the "title" field when logging

  return (
    <PageSkeleton
      nav_h1={"Error: Nothing Found"}
      tab_title={"404 No Page Found"}
    >
      <div>
        <p>Unknown page: {urimodels}</p>
        <p>There was a problem finding this page</p>
        {/* <p>Error was: {props.error}</p> */}
      </div>
    </PageSkeleton>
  );
}

export default function ModelName(props) {
  // console.log("props", props);
  // should fix the fact that the content is in the "title" field when logging
  const router = useRouter();
  //console.log(router.query);
  // used to be {models} = router.query, but this makes it more simple
  const urimodels = router.query.userpages;
  // needs to be same same as [models].js
  //console.log("query", router.query);

  // console.log("props", props);
  // should fix the fact that the content is in the "title" field when logging

  // if (props.error) {
  //   return ErrorPage();
  // }
  if (props.modelsInfo === null) {
    // console.log("error here");
    return ErrorPage();
  }

  let centerContent = (
    <>
      <div>
        <h2>Description:</h2>
        <ReactMarkdown children={props.modelsInfo.content} />
      </div>
      <div>
        <h2>Extra Info:</h2>
        <ReactMarkdown children={props.modelsInfo.data.text} />
      </div>
    </>
  );

  let leftSide = (
    <>
      <Grid item>
        {/* <img src={trialmattter.data.image} /> */}
        {/* {trialmattter.data.image} */}
        {/* The above gives the URI */}
        {/* <Box> */}
        {/* https://nextjs.org/docs/api-reference/next/image
                  needs to be in box because it defaults to container width
               */}
        {/* <Image
        alt="The guitarist in the concert."
        src={trialmattter.data.image || "https://via.placeholder.com/500"}
        width={500}
        height={500}
        // layout="responsive"
        // image from https://unsplash.com/photos/ipDhOQ5gtEk
      /> */}

        <ImageCarouselView />

        {/* </Box> */}
        {/* changing the size here does make the other side have the same height, but need to figure out if that stuff looks better centered or something */}
      </Grid>
    </>
  );

  let rightSide = (
    <Grid container direction="column" rowSpacing={2}>
      <Grid item>
        <Typography variant="h3" component="h2">
          {props.modelsInfo.data.title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4" component="p">
          {"$" + props.modelsInfo.data.price}
        </Typography>
      </Grid>
      <Grid item container direction="row" columnSpacing={2}>
        <Grid item>
          <Chip icon={<DownloadIcon />} label="File Size: 451MB" />
        </Grid>
        <Grid item>
          <Chip label="Version 3" />
        </Grid>
      </Grid>
      <Grid item container direction="row" columnSpacing={1}>
        <Grid item>
          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            precision={0.5}
            readOnly
          />
        </Grid>
        <Grid item>
          <Typography variant="body2" color="textSecondary" component="p">
            0 out of 5 (No. ratings)
          </Typography>
          {/* <p>of 3 Ratings</p> */}
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item xs={12} sm={10} md={6}>
          <Button
            // size="small"
            variant="contained"
            //color="secondary"
            // className={styles.icons}
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
            fullWidth
          >
            Add To Cart
          </Button>
        </Grid>
      </Grid>
      <Grid item>{centerContent}</Grid>
    </Grid>
  );

  return (
    <PageSkeleton
      nav_h1={props.modelsInfo.data.title}
      tab_title={props.modelsInfo.data.title + " - Demo Home"}
    >
      <ContentLayout>
        <>
          {/* <h1>Model URL: {urimodels}</h1> */}

          <TwoColumnGrid
            topPad={"0"}
            botPad={"0"}
            leftsidePad={"0"}
            contentLeft={leftSide}
            contentRight={rightSide}
            alignLeft={"normal"}
            alignRight={"left"}
          />
          {/* <p>Model props: {props.attributes.title}</p> */}
          {/* <props.react /> */}

          {/* <OneColumnGrid content={centerContent} justifyPosition="center" /> */}

          {/* <p>{text}</p> */}
          {/* <div>{props.html}</div>
      <div dangerouslySetInnerHTML={{ __html: props.html }}></div> */}
          {/* <p>maybe: {modelInfo}</p> */}
          {/* <p>Will load product information using the modelname</p> */}

          {/* <div>
        <Chip icon={<DownloadIcon />} label="File Size" />
        <Chip label="Version 2" />
        <br />
        <br />
        <Box
          sx={{
            //  width: 1000,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            precision={0.5}
            readOnly
          />
          <Typography variant="body2" color="textSecondary" component="p">
            0 out of 5 (No. ratings)
          </Typography>
          {/* <p>of 3 Ratings</p> 
        </Box>
      </div> */}
        </>
      </ContentLayout>
    </PageSkeleton>
  );
}

export async function getStaticPaths() {
  // const postsListtemp = await importModels();
  const postsListtemp = getFolderData("models");
  // console.log("holdup", await importModels());
  // console.log("data", postsListtemp);
  // console.log("trial", postsListtemp[2].attributes.title);

  // const paths = [];

  // postsListtemp.forEach((id) => {
  //   // console.log("ids", id.slug);
  //   console.log("modtest", id.modslug);
  //   paths.push(`../../CMScontent/models/${id.modslug}`);
  // });

  const paths = postsListtemp.map((data) => {
    // params: { models: slug.slugmd || "404", data: slug.attributes },
    // console.log("slugmd", data.slugmd);
    // console.log("newdata", data);
    // const mymodels = JSON.parse(JSON.stringify(data));
    //console.log("my", mymodels);

    return {
      params: {
        //models: mymodels,
        // models: data.slugmd,
        models: data.data.customslug,
        // attributes: data.attributes,
        // react: data.react,
        // slug: data.slug,
        // slugmd: data.slugmd,
        // // models: "tat",
        //check this to make sure it's actually passing it??
        // also is this stuff even getting passed in??
      },
    };
  });

  //  console.log("modlsug", postsListtemp[0].slugmd);
  //console.log("path", paths);

  return {
    paths,
    //fallback: true,
    fallback: "blocking",
    // the above causes a delay however, maybe need a loading thing for it
    // https://stackoverflow.com/questions/68248637/nextjs-getstaticprops-error-when-passing-an-object-as-prop-instead-of-plain-stri
  };
  // https://nextjs.org/docs/basic-features/data-fetching#fallback-true
}

export async function getStaticProps({ params }) {
  // const modelsList = getFolderData("models");
  // console.log("test", modelsList);
  const modelsInfo = getFileData("models", params.models);
  // console.log(modelsInfo);
  // console.log(getFileData("models", "test-page"));
  return {
    props: {
      // modelsList,
      modelsInfo,
    },
  };
}
