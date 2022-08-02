import { useRouter } from "next/router";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Box from "@mui/material/Box";
import ContentLayout from "../components/ContentLayout";
import PageSkeleton from "../components/PageSkeleton";
// import { getFileData, getFolderData } from "./getCmsData";
import fs from "fs";
import path from "path";
// import matter from "gray-matter";

// https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops
// perhaps use this instead? https://github.com/remarkjs/react-markdown
// https://nodejs.dev/learn/working-with-folders-in-nodejs to understand why the prop had to be passed in this way

// import UserPage from "./userPage";

function ErrorPage() {
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

// attempt to fix Prevent passing of children as props (react/no-children-prop)

// export default function UserPages(props) {
export default function UserPages({ userpagesInfo }) {
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
  if (userpagesInfo === null) {
    // console.log("error here");
    return ErrorPage();
  }

  // const trialmattter = matter(props.contentbody);
  // console.log("tryme", trialmattter.content);

  //]///]///]  const { attributes, slug, slugmd } = props;
  //]///]///]  const { title, date, text } = attributes;
  // console.log("content", attributes);
  // console.log("html", props.attributes.text);
  //console.log("modelinfo", modelInfo);
  //console.log("myparams", params);
  // console.log("attrtitle", modeldata.attributes.date);
  //
  //console.log(props.contentbody);
  //
  // console.log(trialmattter);
  // should fix the fact that the content is in the "title" field when logging
  // console.log(props);

  return (
    <PageSkeleton nav_h1={"Demo Homepage"} tab_title={"Demo Home"}>
      <ContentLayout>
        <div>
          <p>
            Need to refact the getInitialProps to a separate file as per
            https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticprops
          </p>
          <h1>Model URL: {urimodels}</h1>
          {/* <p>Model props: {props.attributes.title}</p> */}
          {/* <props.react /> */}
          <h2>Title: {userpagesInfo.data.customer}</h2>
          <div>
            <h2>Description:</h2>
            <ReactMarkdown>{userpagesInfo.content}</ReactMarkdown>
          </div>

          <div>
            <h2>Need to load the userpage content here</h2>
          </div>
        </div>
      </ContentLayout>
    </PageSkeleton>
    // <UserPage userpagesInfo={userpagesInfo} />
  );
}

//https://nextjs.org/docs/routing/dynamic-routes

//https://stackoverflow.com/questions/68135772/how-to-get-slug-value-in-getstaticprops-to-call-api-with-parameter-as-slug
// https://blitzjs.com/docs/get-static-paths
// the above helps us understand the getStaticPaths and getStaticProps methods

export async function getStaticPaths() {
  function getFolderData(folder) {
    // console.log("folder", folder);
    const propsDirectory = path.join(process.cwd(), `/CMScontent/${folder}/`);

    // Get file names under /posts
    const fileNames = fs.readdirSync(propsDirectory);
    const allFolderData = fileNames.map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(propsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // console.log(matterResult);

      // console.log(JSON.parse(JSON.stringify(matterResult.content)));
      // we are not using the data here as gray-matter can't extract it, we are better off using the react-markdown package

      // Combine the data with the id
      return {
        id: id,
        // ...matterResult.data,
        data: matterResult.data,
        content: matterResult.content,
        // ...JSON.parse(JSON.stringify(matterResult.content)),
      };
    });

    // console.log("demo", allFolderData);

    return allFolderData;
  }
  // const postsListtemp = await importModels();
  const postsListtemp = getFolderData("userpages");
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
        userpages: data.data.customslug,
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

  function getFileData(folder, file) {
    // console.log("folder", folder);
    const propsDirectory = path.join(
      process.cwd(),
      `/CMScontent/${folder}/${file}.md`
    );

    // Get file names under /posts
    // const fileNames = fs.readdirSync(propsDirectory);
    // const allFileData = fileNames.map((fileName) => {
    //   // Remove ".md" from file name to get id
    //   const id = fileName.replace(/\.md$/, "");

    //   // Read markdown file as string
    //   const fullPath = path.join(propsDirectory, fileName);
    //   const fileContents = fs.readFileSync(fullPath, "utf8");

    //   // Use gray-matter to parse the post metadata section
    //   const matterResult = matter(fileContents);

    //   // console.log(matterResult);

    //   // console.log(JSON.parse(JSON.stringify(matterResult.content)));
    //   // we are not using the data here as gray-matter can't extract it, we are better off using the react-markdown package

    //   // Combine the data with the id
    //   return {
    //     id: id,
    //     // ...matterResult.data,
    //     data: matterResult.data,
    //     content: matterResult.content,
    //     // ...JSON.parse(JSON.stringify(matterResult.content)),
    //   };
    // });
    try {
      const preAllFileData = matter(fs.readFileSync(propsDirectory));

      const allFileData = {
        id: file,
        data: preAllFileData.data,
        content: preAllFileData.content,
      };
      // console.log("arrtest", test);

      // console.log("demo", allFileData);

      // console.log(
      //   matter(
      //     fs.readFileSync(
      //       path.join(process.cwd(), `/CMScontent/models/test-page.md`),
      //       "utf8"
      //     )
      //   )
      // );

      // return allFileData;
      return allFileData;
    } catch {
      return null;
    }
  }

  try {
    const userpagesInfo = getFileData("userpages", params.userpages);
    // console.log(userpagesInfo);
    // console.log(getFileData("models", "test-page"));
    return {
      props: {
        // modelsList,
        userpagesInfo,
      },
    };
  } catch {
    return {
      props: {
        userpagesInfo: null,
      },
    };
  }
}
