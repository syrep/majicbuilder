import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import PageSkeleton from "../components/PageSkeleton";
// import ImageCarouselView from "../components/ImageCarouselView";
import ImageCarousel from "../components/ImageCarousel";

function ValidateFields() {
  //https://stackoverflow.com/questions/69287291/text-field-validation-in-material-ui-using-error-property
  const MAX_LENGTH = 5;
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // https://stackoverflow.com/questions/61133239/material-ui-textfield-error-not-working-properly-in-reactjs
  // let letters = /^[0-9a-zA-Z]+$/; // this is alpha numeric
  let numbers = /^\d*\.?\d*$/;
  // need to make this one above be only accept floats or something similar
  // https://stackoverflow.com/questions/12117024/decimal-number-regular-expression-where-digit-after-decimal-is-optional/12117060

  useEffect(() => {
    // Set errorMessage only if text is equal or bigger than MAX_LENGTH
    // if (text.length >= MAX_LENGTH) {
    //   setErrorMessage(
    //     "The input has exceeded the maximum number of characters"
    //   );

    if (text.length >= 1 && !text.match(numbers)) {
      setErrorMessage("Only numbers and decimals are accepted");
    }
  }, [text]);
  // How many useeffects can we actually have????

  useEffect(() => {
    // Set empty erroMessage only if text is less than MAX_LENGTH
    // and errorMessage is not empty.
    // avoids setting empty errorMessage if the errorMessage is already empty
    // if (text.length < MAX_LENGTH && errorMessage) {
    if (text.match(numbers) && errorMessage) {
      setErrorMessage("");
    }
  }, [text, errorMessage]);

  return (
    <TextField
      //  error={text.length >= MAX_LENGTH}
      error={text.length >= 1 && !text.match(numbers)}
      id="outlined-error"
      label="Number Validated Test"
      helperText={errorMessage}
      // onChange={(e) => {
      //   if (e.target.value === "" || /^\d+$/.test(e.target.value)) {
      //     setText(e.target.value);
      //   }
      // }}
      onChange={(e) => setText(e.target.value)}
      value={text}
      // type="number"
      //without the above, the keyboard doesn't change on mobile
      inputMode="numeric"
      placeholder="Enter a price"
    />
  );
}

export default function Edit({ allPropsData }) {
  return (
    <PageSkeleton nav_h1={"Demo Homepage"} tab_title={"Demo Home"}>
      <>
        <br />
        {ValidateFields()}
        {/* <ImageCarouselView /> */}
        <ImageCarousel picturearray={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
        {/* May not need the wrapper in the view for SSR?? */}
      </>
    </PageSkeleton>
  );
}

// function changeTo(n) {
//   console.log("clicked" + n);
//   // call using arrow function "() => changeTo(9)"
//   // e.g. onClick={() => changeTo(value)}
// }
