import fs from "fs";
import path from "path";
import matter from "gray-matter";

// https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops
// perhaps use this instead? https://github.com/remarkjs/react-markdown
// https://nodejs.dev/learn/working-with-folders-in-nodejs to understand why the prop had to be passed in this way

//////// Needed to put this into a separate directory (outside of /pages) so that the project can build

export function getFolderData(folder) {
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

export function getFileData(folder, file) {
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
