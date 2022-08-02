//import { ThemeProvider, StyledEngineProvider } from "@mui/styles";
import "../styles/globals.css";
import CustomTheme from "../styles/theme";
import { ThemeProvider } from "@mui/material";
// needed to change the above themeprovider to make it work

function MyApp({ Component, pageProps }) {
  // Need the themeprovider to replace the default theme here
  // https://kitson-broadhurst.medium.com/quickly-set-up-a-theme-in-material-ui-and-access-it-in-your-components-ba0565304887

  //  {/* PWA primary color */}
  //           <meta name="theme-color" content={theme.palette.primary.main} />

  return (
    // <StyledEngineProvider injectFirst>
    // the above caused an error to load after v4 to v5 migration, it was added by the migration codemon though
    // see here for how I identified the fix  https://pretagteam.com/question/material-ui-stylesprovider-injectfirst-causes-style-crash-with-initialy-hidden-components-drawer-menuitems-ssr-25293
    <ThemeProvider theme={CustomTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
    // </StyledEngineProvider>
  );
}

export default MyApp;

// the layout file was removed from here as it prevents a layout title and other information from being passed in by the relevant page
