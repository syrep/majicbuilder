import Home from "./index";
import matter from "gray-matter";
// import ReactMarkdown from "react-markdown";
import ProductCards from "../components/ProductCards";
import ContentLayout from "../components/ContentLayout";
import PageSkeleton from "../components/PageSkeleton";
import ProductGridLayout from "../components/ProductGridLayout";
import { Grid } from "@mui/material";
import { getFolderData } from "../utils/getCmsData";

export async function getStaticProps() {
  const modelsList = getFolderData("models");
  // console.log("test", modelsList);
  // const modelsInfo = getFileData("models", "test-page");
  // console.log(modelsInfo);
  // console.log(getFileData("models", "test-page"));
  return {
    props: {
      modelsList,
      // modelsInfo,
    },
  };
}

export default function Models({ modelsList, modelsInfo }) {
  // console.log("props", { modelsList, userPagesList });

  // have skipped per-unique page loading, this broke because of changes to frontmatter loading in next.config.js

  return (
    <PageSkeleton nav_h1={"Demo Models"} tab_title={"Models - Demo"}>
      <ContentLayout>
        {/* should really remove this as it changes the spacing, same needs to be done in the userpages page */}
        <div>
          <h1>Models</h1>
          <p>Go to /admin to actually access the edit pages for this</p>
          <ProductGridLayout>
            {/* {console.log("pre", modelsList)} */}
            {modelsList.map((model) => {
              // console.log(modelsList[0].data);
              // console.log("huh", model);

              return (
                <Grid
                  item
                  xs={10}
                  sm={5}
                  md={3.5}
                  lg={2.5}
                  xl={2.5}
                  key={model.data.customslug + "-model"}
                >
                  {/* key={model.slug + "model"} makes it unique */}{" "}
                  {/* Key is higher in tree to be unique */}
                  <ProductCards
                    product_unique_id={"models/" + model.data.customslug}
                    product_title={model.data.title}
                    product_description={model.content}
                    // product_description={
                    //   <ReactMarkdown children={trialmattter.content} />
                    // }
                    //// need to use a short description here, and character limit it
                    product_price={model.data.price}
                    product_rating={0}
                    // edit_switch_state={false}
                    // create_switch_state={false}
                    purchase_only_state={true}
                  />
                </Grid>
              );
            })}
            {/* <p>{modelsInfo.content}</p> */}
          </ProductGridLayout>
        </div>
      </ContentLayout>
    </PageSkeleton>
  );
}
