import { Typography } from "@mui/material";
import PageSkeleton from "../components/PageSkeleton";

export default function about() {
  return (
    <PageSkeleton nav_h1={"Demo Homepage"} tab_title={"Demo Home"}>
      <div>
        <Typography
          variant="h5"
          align="center"
          // color="textSecondary"
          paragraph
        >
          I make VR assets and models that have been FBT tested and are ready
          for use in games! VRChat models come with all asset files and have
          been put together by myself to ensure tehy are compatible and
          customizable.
        </Typography>
        <Typography
          variant="h5"
          align="center"
          // color="textSecondary"
          paragraph
        >
          {
            " If you have any questions, reach out on my Discord and I'll be happy to help! "
          }
          {/* wrapped this way to fix react/no-unescaped-entities
         probably won't need this when */}
        </Typography>
      </div>
    </PageSkeleton>
  );
}
