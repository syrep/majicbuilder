import { Grid } from "@mui/material";
import Image from "next/image";

export function PopoutSection() {
  return (
    <Grid
      container
      columnSpacing={2.5}
      rowSpacing={2.5}
      //overflow="hidden"
      direction="row"
      sx={{
        width: { md: "90%", xxl: "calc(0.9 * 2560px)" },
        height: "18rem",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "-10rem",
        marginBottom: "3rem",
        borderRadius: "0.75rem",
        // backgroundColor: "primary.dark",
        backgroundColor: "#ffffff",

        display: { md: "flex", xs: "none" },
      }}
    >
      {[1, 2, 3, 4, 5, 6].map((value, id) => {
        return (
          <Grid
            item
            // paddingRight={{ xxl: "8rem" }}
            // paddingLeft={{ xxl: "8rem" }}
            sx={{
              width: "16%",
              margin: "auto",
            }}
            key={id}
          >
            <Image
              key={id}
              alt={value}
              src="https://via.placeholder.com/500.png"
              width={250}
              height={250}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
