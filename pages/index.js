import ProductGridLayout from "../components/ProductGridLayout";
import FullwidthSection from "../components/FullwidthSection";
import ContentLayout from "../components/ContentLayout";
import PageSkeleton from "../components/PageSkeleton";
import { Grid } from "@mui/material";
import ProductCards from "../components/ProductCards";

export default function Home() {
  // can delete the /lambda and /netlify type of folders once changed from serverless to .md files
  // delete the edit page also, as it uses the /api paths, which also need to be deleted

  //needed to use https://answers.netlify.com/t/deploy-failed-today-build-was-terminated-build-script-returned-non-zero-exit-code-1/64450
  // in order to fix the deploy issue recently
  const myPosts = [
    {
      description:
        "Finalise the bottom buttons on the cards, add input restrictions on front end, style cards better, finish homepage design, begin styling of other pages",
    },
    {
      description:
        " https://material-ui.com/components/drawers/ , https://material-ui.com/components/app-bar/",
    },
    {
      description:
        "fix any console errors, make the product cards be same minimum size (restrict text of product description)",
    },

    {
      description:
        "make a general color theme, fix all the styling of all components, make it all reusable",
    },

    {
      description:
        "Make ratings do the average per 'https://material-ui.com/components/rating/'",
    },
    {
      description:
        "Make links open in new tabs etc if needed, also canonical URLs etc",
    },
    {
      description: "Edit the product meta for SEO in _document.js",
    },
    {
      description: "need to stress test the app for lagging etc",
    },
    {
      description: "Add error handling to everything",
    },
    {
      description: "Make the pages load first, ant not wait on the async thigs",
    },
    {
      description:
        "Fix the inputs to only accept allowable types, also make this show the correct keyboard on mobile",
    },

    {
      description: "Remove duplication of functions everywhere",
    },

    {
      description: "Make toasts to notify of errors etc",
    },
    {
      description:
        "Ratings needs to be an array on stripe or something so we can count and find the average, also need to set limit in front-end to 5 stars",
    },
    {
      description:
        "Add error handling to the products when data input types don't match database etc, also refresh page on success, maybe add toast notifications to show errors/make it on the input itself",
    },
    {
      description:
        "Change the colour of the mobile dropdown, maybe make it a drawer instead. Also make the light/dark theme toggle",
    },
    {
      description:
        "Make /userpages/ how to add them to a menu etc. MAybe should make it a listitem in it's own page that pulls current userpages and normal pages, save the lsit to an .md file",
    },
    {
      description: "Add incremental static regeneration for the site",
    },
    {
      description: "Make the CMS slug change with slug field changes",
    },
    {
      description:
        "put all the getmodels type of functions in their own file to clean up the code",
    },
    {
      description:
        "Make all links/buttons etc a next/link item so that the page doesn't refresh",
    },
    {
      description: "Review and refactor all code",
    },
    {
      description:
        "make proptitle take titles of pages (its already a h1), also fix all text to be typoraphy and aria-labelled",
    },
    {
      description: "fix bug on mobile where there is white above the navbar",
    },
    {
      description: "delete the account on mongodb related to rics database",
    },
    {
      description:
        "prevent images from blocking mobile menu response when data is slow",
    },
    {
      description: "make all elements in site accessible",
    },
    {
      description:
        "need to add a skeleton loader to reduce layout shift on all components",
    },
    {
      description:
        "fix the maxwidth and centering of fullwidthsection and twocolumngrid on newpage/index",
    },
  ];

  return (
    <PageSkeleton nav_h1={"Demo Homepage"} tab_title={"Demo Home"}>
      <div className="home-content">
        <FullwidthSection
          // inLeft={heroLeft}
          // inRight={heroRight}
          // bgColor="#d2e9ff"
          topPad={12}
          botPad={6}
          // alignLeft={"stretch"}
        />
        {/* <ContentLayout> */}
        {/* content layout is not needed when using product grid */}
        <ProductGridLayout>
          {myPosts.map((value, index) => {
            return (
              <Grid
                item
                xs={5.5}
                sm={3.5}
                md={3}
                lg={2.5}
                xl={2.5}
                xxl={2}
                key={index}
              >
                <ProductCards
                  product_unique_id={index}
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
        {/* </ContentLayout> */}
      </div>
    </PageSkeleton>
  );
}
