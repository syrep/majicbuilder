import Home from "./index";
import matter from "gray-matter";
// import ReactMarkdown from "react-markdown";
import ProductCards from "../components/ProductCards";
import ContentLayout from "../components/ContentLayout";
import PageSkeleton from "../components/PageSkeleton";
import ProductGridLayout from "../components/ProductGridLayout";
import { Grid } from "@mui/material";
import { getFolderData } from "./getCmsData";

// above is like this because of:
// https://www.npmjs.com/package/frontmatter-markdown-loader

// to start the server run: npx netlify-cms-proxy-server

export async function getStaticProps() {
  const userPagesList = getFolderData("userpages");

  return { props: { userPagesList } };
}

export default function Models({ userPagesList }) {
  // console.log("props", { modelsList, userPagesList });

  // let { title, cats } = attributes;
  // const listmodel = modelsList.default;
  // console.log("listmodel", listmodel);

  // have skipped per-unique page loading, this broke because of changes to frontmatter loading in next.config.js

  return (
    <PageSkeleton nav_h1={"Demo Homepage"} tab_title={"Demo Home"}>
      {/* // The things returned below are from the CMS, should have models,
      userpages and default pages that are to be edited (which the default page
      isn't set up yet e.g. homepage) */}
      <ContentLayout>
        <div>
          <h1>Userpages</h1>
          <p>Go to /admin to actually access the edit pages for this</p>

          {/* {console.log("pre", modelsList)} */}
          <ProductGridLayout>
            {userPagesList.map((model) => {
              // const trialmattter = matter(model.default);
              // console.log("tryme", trialmattter.content);
              // console.log("huh", model);
              return (
                // <a href={`models/${model.slug}`} key={model.attributes.date}>
                //   {/* <img src={post.attributes.thumbnail} /> */}
                //   <h2>{model.attributes.title}</h2>
                //   <p>{model.attributes.date}</p>
                // </a>
                <Grid
                  item
                  xs={10}
                  sm={5}
                  md={3.5}
                  lg={2.5}
                  xl={2.5}
                  key={model.data.customslug + "-userpage"}
                >
                  {/* key={model.slug + "model"} makes it unique */}{" "}
                  {/* Key is higher in tree to be unique */}
                  <ProductCards
                    // product_unique_id={"userpages/" + model.data.customslug}
                    product_unique_id={model.data.customslug}
                    product_title={model.data.title}
                    product_description={model.content}
                    product_price={model.data.price}
                    product_rating={0}
                    // edit_switch_state={false}
                    // create_switch_state={false}
                    purchase_only_state={true}
                  />
                </Grid>
              );
            })}
          </ProductGridLayout>
        </div>
      </ContentLayout>
    </PageSkeleton>
  );
}
