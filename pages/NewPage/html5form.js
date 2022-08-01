import ContentLayout from "../../components/ContentLayout";
import PageSkeleton from "../../components/PageSkeleton";
import React, { useState } from "react";
import {
  Grid,
  TextField,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Select,
  MenuItem,
  Slider,
  Button,
  InputLabel,
  Stepper,
  Step,
  StepLabel,
  StepButton,
  StepContent,
} from "@mui/material";
// import Grid from "@material-ui/Grid";
// import TextField from "@material-ui/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import Radio from "@material-ui/core/Radio";
// import Select from "@material-ui/core/Select";
// import MenuItem from "@material-ui/core/MenuItem";
// import Slider from "@material-ui/core/Slider";
// import Button from "@material-ui/core/Button";
const defaultValues = {
  name: "",
  age: 0,
  condition: "",
  os: "",
  favoriteNumber: 0,
};
export default function html5form(params) {
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSliderChange = (name) => (e, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  // in steps need to make sure that the default value is null (was using default values but can remove)
  // see https://stackoverflow.com/questions/55429442/material-ui-select-component-a-component-is-changing-a-controlled-input-of-type
  const steps = [
    {
      label: "Q1",

      description: {
        data: "What are you looking to treat?",
        component: (
          <FormControl>
            <FormLabel>Condition:</FormLabel>
            <RadioGroup
              name="condition"
              value={formValues.condition ?? ""}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel
                key="erectiledysfunction"
                value="Erectile Dysfunction"
                control={<Radio size="small" />}
                label="Erectile Dysfunction"
              />
            </RadioGroup>
          </FormControl>
        ),
      },
    },
    {
      label: "Q2",
      description: {
        data: "Do you know treatment you are after?",
        component: (
          <FormControl>
            <RadioGroup
              name="knowtreatment"
              value={formValues.knowtreatment ?? ""}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel
                key="yesknowtreatment"
                value="Yes"
                control={<Radio size="small" />}
                label="Yes"
              />
              <FormControlLabel
                key="noknowtreatment"
                value="No"
                control={<Radio size="small" />}
                label="No"
              />
            </RadioGroup>
          </FormControl>
        ),
      },
    },
    {
      label: "Q3",
      description: {
        data: "On average, how many times do you have sex?",
        component: (
          <TextField
            id="averagesexno"
            name="averagesexno"
            label="Average Number"
            type="number"
            value={formValues.averagesexno ?? "0"}
            onChange={handleInputChange}
          />
        ),
      },
    },
    {
      label: "Q4",
      description: {
        data: "Are there any psychological causes that could be affecting your erectile dysfunction?",
        component: (
          <FormControl>
            <RadioGroup
              name="psychcause"
              value={formValues.psychcause ?? ""}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel
                key="yespsychcause"
                value="Yes"
                control={<Radio size="small" />}
                label="Yes"
              />
              <FormControlLabel
                key="nopsychcause"
                value="No"
                control={<Radio size="small" />}
                label="No"
              />
            </RadioGroup>
          </FormControl>
        ),
      },
    },
    {
      label: "Q5",
      description: {
        data: "Have you ever discussed erectile dysfunction with a doctor?",
        component: (
          <FormControl>
            <RadioGroup
              name="eddoc"
              value={formValues.eddoc ?? ""}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel
                key="yeseddoc"
                value="Yes"
                control={<Radio size="small" />}
                label="Yes"
              />
              <FormControlLabel
                key="noeddoc"
                value="No"
                control={<Radio size="small" />}
                label="No"
              />
            </RadioGroup>
          </FormControl>
        ),
      },
    },
    {
      label: "Q6",
      description: {
        data: "Are you currently taking any medications?",
        component: (
          <FormControl>
            <RadioGroup
              name="curmed"
              value={formValues.curmed ?? ""}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel
                key="yescurmed"
                value="Yes"
                control={<Radio size="small" />}
                label="Yes"
              />
              <FormControlLabel
                key="nocurmed"
                value="No"
                control={<Radio size="small" />}
                label="No"
              />
            </RadioGroup>
          </FormControl>
        ),
      },
    },
    {
      label: "Q7",
      description: {
        data: "Do you have any allergies?",
        component: (
          <FormControl>
            <RadioGroup
              name="allergy"
              value={formValues.allergy ?? ""}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel
                key="yesallergy"
                value="Yes"
                control={<Radio size="small" />}
                label="Yes"
              />
              <FormControlLabel
                key="noallergy"
                value="No"
                control={<Radio size="small" />}
                label="No"
              />
            </RadioGroup>
          </FormControl>
        ),
      },
    },
    {
      label: "Q8",
      description: {
        data: "Have you now or in the past ever suffered or been treated for any medical conditions?",
        component: (
          <FormControl>
            <RadioGroup
              name="medcond"
              value={formValues.medcond ?? ""}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel
                key="yesmedcond"
                value="Yes"
                control={<Radio size="small" />}
                label="Yes"
              />
              <FormControlLabel
                key="nomedcond"
                value="No"
                control={<Radio size="small" />}
                label="No"
              />
            </RadioGroup>
          </FormControl>
        ),
      },
    },
    {
      label: "Q9",
      description: {
        data: "Have you had your blood pressure checked in the past 12 months?",
        component: (
          <FormControl>
            <RadioGroup
              name="recentbp"
              value={formValues.recentbp ?? ""}
              onChange={handleInputChange}
              row
            >
              <FormControlLabel
                key="yesrecentbp"
                value="Yes"
                control={<Radio size="small" />}
                label="Yes"
              />
              <FormControlLabel
                key="norecentbp"
                value="No"
                control={<Radio size="small" />}
                label="No"
              />
            </RadioGroup>
          </FormControl>
        ),
      },
    },
    {
      label: "Q10",
      description: {
        data: "What is your most recent blood pressure?",
        component: (
          <TextField
            id="recentbpval"
            name="recentbpval"
            label="Recent Blood Pressure Reading"
            type="text"
            value={formValues.recentbpval ?? "120/80"}
            onChange={handleInputChange}
          />
        ),
      },
    },
    {
      label: "Test Q11",
      description: {
        data: `This is the data for step 11 testing`,
        component: (
          <>
            <Button variant="contained" sx={{ mt: 1, mr: 1 }}>
              I do nothing
            </Button>
            {Object.keys(formValues).map((key, index) => {
              return (
                <div key={index}>
                  <p>
                    {key}: {formValues[key]}
                  </p>
                </div>
              );
            })}
          </>
        ),
      },
    },
  ];
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <PageSkeleton nav_h1={"NewPage Homepage"} tab_title={"NewPage Home"}>
      <ContentLayout>
        <form onSubmit={handleSubmit}>
          <h2>This is there the stepper would go</h2>
          <p>
            #need to make sure form components are filled before able to click
            next #need to make sure keyboard navigation/accessibility works
            #obviously need to template it
          </p>
          {/* https://mui.com/material-ui/react-stepper/ */}
          <Stepper activeStep={activeStep}>
            {steps.map((step, index) => (
              <Step key={step.label}>
                {/* <StepLabel>{step.label}</StepLabel> */}
                <StepLabel />
                {/* needed emplty label so it can populate numbers*/}
                {/* disabling the label above becase it takes lots of room, below is off because not used in horizontal */}
                {/* <StepContent>{step.description}</StepContent> */}
              </Step>
            ))}
          </Stepper>
          <h3>Question {activeStep + 1}</h3>
          <p>{steps[activeStep].description.data}</p>
          {steps[activeStep].description.component}
          <br />
          <br />

          {/* https://reactjs.org/docs/conditional-rendering.html
          
          dunno why it won't let me use the if statement
          */}
          {/* {activeStep === steps.length - 1 ? (
            <>
              {steps[activeStep].description.component}
              <p>{steps[activeStep].description.data}</p>
            </>
          ) : (
            <p>{steps[activeStep].description}</p>
          )} */}
          {/* <p>{steps[activeStep].description}</p> */}
          {activeStep !== steps.length - 1 ? (
            <>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mt: 1, mr: 1 }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 1, mr: 1 }}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Continue"}
              </Button>
            </>
          ) : (
            <>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mt: 1, mr: 1 }}
              >
                Back
              </Button>

              <Button variant="contained" color="primary" type="submit">
                Submit (to console log)
              </Button>
            </>
          )}
        </form>
      </ContentLayout>
    </PageSkeleton>
  );
}

// form stuff for reference
{
  /* <>
<h1>Demo form</h1>
<form onSubmit={handleSubmit}>
  <Grid
    container
    alignItems="center"
    justify="center"
    direction="column"
    rowGap={2}
  >
    <Grid item>
      <TextField
        id="name-input"
        name="name"
        label="Name"
        type="text"
        value={formValues.name}
        onChange={handleInputChange}
      />
    </Grid>
    <Grid item>
      <TextField
        id="age-input"
        name="age"
        label="Age"
        type="number"
        value={formValues.age}
        onChange={handleInputChange}
      />
    </Grid>
    <Grid item>
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup
          name="gender"
          value={formValues.gender}
          onChange={handleInputChange}
          row
        >
          <FormControlLabel
            key="male"
            value="male"
            control={<Radio size="small" />}
            label="Male"
          />
          <FormControlLabel
            key="female"
            value="female"
            control={<Radio size="small" />}
            label="Female"
          />
          <FormControlLabel
            key="other"
            value="other"
            control={<Radio size="small" />}
            label="Other"
          />
        </RadioGroup>
      </FormControl>
    </Grid>
    <Grid item>
      <FormControl fullWidth sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="select OS label">OS</InputLabel>
        <Select
          name="os"
          value={formValues.os}
          onChange={handleInputChange}
          label="OS"
          autoWidth
        >
          <MenuItem key="mac" value="mac">
            Mac
          </MenuItem>
          <MenuItem key="windows" value="windows">
            Windows
          </MenuItem>
          <MenuItem key="linux " value="linux">
            Linux
          </MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item>
      {/* <div style={{ width: "400px" }}> */
}
//       Favorite Number
//       <Slider
//         value={formValues.favoriteNumber}
//         onChange={handleSliderChange("favoriteNumber")}
//         defaultValue={1}
//         step={1}
//         min={1}
//         max={3}
//         marks={[
//           {
//             value: 1,
//             label: "1",
//           },
//           {
//             value: 2,
//             label: "2",
//           },
//           {
//             value: 3,
//             label: "3",
//           },
//         ]}
//         valueLabelDisplay="off"
//       />
//       {/* </div> */}
//     </Grid>
//     <Button variant="contained" color="primary" type="submit">
//       Submit (to console log)
//     </Button>
//   </Grid>
//   <p>Here is the form values that were logged</p>

//   {/* https://bobbyhadz.com/blog/react-map-object */}
//   {Object.keys(formValues).map((key, index) => {
//     return (
//       <div key={index}>
//         <p>
//           {key}: {formValues[key]}
//         </p>
//       </div>
//     );
//   })}
// </form>
// </> */}
