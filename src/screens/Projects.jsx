import React, { useState } from "react";
import { DrawerElement } from "../components/DrawerElement";
import {
  InputLabel,
  MenuItem,
  Typography,
  FormControl,
  Select,
  IconButton,
} from "@mui/material";
import { Project } from "../components/Project";

const allProjects = [
  {
    name: "Pending",
    projects: [
      {
        name: "Finance App Exploration",
        description: "Iconspace Team",
        attachment: "13",
        fraction: "4/5",
        days: "14",
        daysType: "gray",
        progress: 85,
        members: 5,
      },
      {
        name: "Illustration",
        description: "Iconspace Team",
        attachment: "2",
        fraction: "7/8",
        days: "10",
        daysType: "gray",
        progress: 85,
        members: 2,
      },
    ],
  },

  {
    name: "Run",
    projects: [
      {
        name: "Product Preview & Mock up for Marketplace",
        description: "Iconspace Team",
        attachment: "13",
        fraction: "4/5",
        days: "2",
        daysType: "red",
        progress: 85,
        members: 5,
      },
      {
        name: "Circle - Dashboard, Stats, and UI kit",
        description: "Iconspace Team",
        attachment: "5",
        fraction: "7/8",
        days: "1",
        daysType: "red",
        progress: 85,
        members: 2,
      },
      {
        name: "Square - Social Media Plan ",
        description: "Uranus Team",
        attachment: "0",
        fraction: "2/10",
        days: "8",
        daysType: "yellow",
        progress: 45,
        members: 2,
      },
    ],
  },
  {
    name: "Done",
    projects: [
      {
        name: "Vitally.io Website",
        description: "Uranus Team",
        attachment: "13",
        fraction: "10/10",
        progress: 100,
        members: 5,
      },
      {
        name: "Circle - Dashboard, Stats, and UI kit",
        description: "Iconspace Team",
        attachment: "5",
        frameElement: "7/8",
        progress: 100,
        members: 2,
      },
    ],
  },
];

export const Projects = () => {
  const [sortBy, setSortBy] = useState("Due Date");
  return (
    <div>
      <DrawerElement />
      <div className="ml-16 md:ml-64">
        <div className="mx-5 my-3 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold inline-block">Projects</h1>
            <p className="inline-block ml-10 text-gray-500">Show: </p>
            <h3 className="flex font-bold ml-4 cursor-pointer">
              All Projects{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sort by: </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sortBy}
                label="Sort by: "
                onChange={(e) => {
                  setSortBy(e.target.value);
                }}
              >
                <MenuItem value={"Due Date"}>Due Date</MenuItem>
                <MenuItem value={"Latest Projects"}>Latest Projects</MenuItem>
                <MenuItem value={"Completed"}>Completed</MenuItem>
              </Select>
            </FormControl>
            <IconButton aria-label="funnel">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                />
              </svg>
            </IconButton>

            <div className="flex">
              <IconButton>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                  />
                </svg>
              </IconButton>
              <IconButton>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                  />
                </svg>
              </IconButton>
              <IconButton>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                  />
                </svg>
              </IconButton>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 mx-5 my-6">
          {allProjects.map((project) => (
            <Project project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};
