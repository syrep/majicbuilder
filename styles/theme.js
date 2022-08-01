// Information on setting up theme provider to work with SSR is from
// https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js
// https://material-ui.com/styles/advanced/#server-side-rendering

import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const CustomTheme = createTheme({
  // need to add a light and dark theme here
  // https://material-ui.com/customization/theming/
  // https://react.school/material-ui/appbar
  // https://kitson-broadhurst.medium.com/quickly-set-up-a-theme-in-material-ui-and-access-it-in-your-components-ba0565304887

  palette: {
    primary: {
      //main: "#556cd6",
      main: "#4fc96b",
    },
    secondary: {
      // main: "#19857b",
      main: "#000000",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
      // color for body background and how to get it to work
      // https://stackoverflow.com/questions/59145165/change-root-background-color-with-material-ui-theme
    },
    text: {
      // https://mui.com/customization/color/#heading-official-color-tool
      primary: "#f00f00",
      secondary: "blue",
      // https://mui.com/customization/default-theme/?expand-path=$.palette
      // below isn't really working
      // disabled: "green",
    },
    // custom things are added as per "neutraL" on https://mui.com/material-ui/customization/palette/
    customTEST: {
      main: "#90caf9",
      contrastText: "#d32f2f",
    },
  },
  // https://mui.com/material-ui/customization/theme-components/, for name https://mui.com/material-ui/api/app-bar/
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#d32f2f",
        },
      },
    },
  },

  // https://mui.com/customization/typography/
  typography: {
    //custom stuff below
    heroMain: {
      fontSize: "5rem",
      fontWeight: 400,
      color: "#071a48",
    },

    heroSub: {
      fontSize: "2rem",
      fontWeight: 400,
      color: "#071a48",
    },

    h6: {
      fontStyle: "italic",
      color: "orange",
    },
  },
  // https://mui.com/material-ui/customization/breakpoints/
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 2560,
    },
  },
});

export default CustomTheme;
