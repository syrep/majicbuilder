import Container from "@mui/material/Container";

export default function ContentLayout({ children }) {
  return (
    // <Container maxWidth="xl">
    // https://mui.com/api/container/
    // maybe need to style it depending on the amount of data in it???
    <Container
      // maxWidth="auto"
      //  making it auto as above will stretch to fit entire width
      maxWidth="xl"
      // sx={{ background: "yellow" }}
    >
      <>{children}</>
    </Container>
  );
}
