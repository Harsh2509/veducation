import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FormControl,
  InputLabel,
  TextField,
  MenuItem,
  Select,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Checkbox,
} from "@mui/material";
import { blue, grey, Textarea } from "../assets/consts";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Register() {
  const [country, setCountry] = React.useState("India");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-full flex justify-center pt-9 flex-col items-center">
      <h1 className="font-bold text-5xl my-2">Register</h1>
      <p className="text-gray-500 mb-4">
        Let's Sign up first for enter into Square Website. Uh She Up!
      </p>
      <Card sx={{ minWidth: 275 }} className="w-1/2 md:w-1/3">
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              id="outlined-basic-fname"
              label="First Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic-lname"
              label="Last Name"
              variant="outlined"
            />
          </div>
          <div className="my-3 flex gap-2 flex-col md:flex-row">
            <div className="flex gap-2 w-full">
              <button className=" px-4 py-2 rounded-lg border-solid border-blue-300 border-2 text-blue-400">
                +91
              </button>
              <TextField
                id="outlined-basic-pnum"
                label="Phone Number"
                variant="outlined"
                className="w-full"
              />
            </div>

            <Box sx={{ maxWidth: 120 }} className="w-full">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Your Country
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={country}
                  label="Your Country"
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                >
                  <MenuItem value={"India"}>India</MenuItem>
                  <MenuItem value={"USA"}>USA</MenuItem>
                  <MenuItem value={"Japan"}>Japan</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <div className="relative">
            <TextField
              id="outlined-basic-mail"
              label="Mail Address"
              variant="outlined"
              className="w-full"
            />
            <label
              htmlFor="outlined-basic-mail"
              className="absolute right-3 top-0 h-full translate-y-1/2"
            >
              @squareteam.com
            </label>
          </div>

          <div className="my-3">
            <FormControl
              sx={{ width: "48%", marginRight: "4%" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            <FormControl sx={{ width: "48%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-confirm"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </div>

          <div className="mt-7 text-sm flex-col gap-3 w-full">
            <p>Tell us about yourself</p>
            <Textarea
              aria-label="minimum height"
              minRows={3}
              placeholder="Hello my name..."
            />
          </div>
          <div className="flex items-center">
            <Checkbox id="agreement-checkbox" />
            <label htmlFor="agreement-checkbox">
              I agree to Square's <span className="text-blue-500">Cookie</span>{" "}
              and <span className="text-blue-500">Privacy Policy</span>.
            </label>
          </div>

          <div className="grid grid-cols-3 gap-2 ">
            <button className="flex justify-center bg-gray-200 text-black w-full py-2 rounded-lg mr-2">
              Login
            </button>
            <button className="flex justify-center bg-blue-500 text-white w-full py-2 rounded-lg mr-2 col-span-2">
              Get Started
            </button>
          </div>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
