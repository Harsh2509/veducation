import {
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Box,
  Avatar,
} from "@mui/material";
import React from "react";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export const Project = ({ project }) => {
  console.log(project);
  return (
    <div className=" border-2 rounded-lg">
      <Card sx={{ minWidth: "100%" }}>
        <CardContent>
          <Typography sx={{ fontSize: 16, fontWeight: 900, color: "#696974" }}>
            {project.name}
          </Typography>
          {project.projects.map((eachProject) => {
            return (
              <Card
                sx={{
                  minWidth: "100%",
                  marginTop: "2%",
                  paddingX: "2%",
                  paddingY: "1%",
                }}
                key={eachProject.name}
              >
                <div className="flex justify-between">
                  <div className="flex flex-col text-[14px] gap-3">
                    <div className="font-bold">{eachProject.name}</div>
                    <div className=" text-[#696974]">
                      {eachProject.description}
                    </div>
                  </div>

                  <div className="flex gap-16 text-[#92929D] items-center text-[14px]">
                    <div className="flex gap-4 items-center">
                      <div className="attachment flex w-10">
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
                            d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
                          />
                        </svg>{" "}
                        {eachProject.attachment}
                      </div>

                      <div className="fraction flex w-14">
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
                            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                        {eachProject.fraction}
                      </div>

                      {eachProject.days ? (
                        <div className="daysLeft">
                          <div
                            className={`px-2 py-1 flex bg-${eachProject.daysType}-100 text-${eachProject.daysType}-500 rounded gap-1 w-36 justify-center`}
                          >
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
                                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                              />
                            </svg>
                            <div>{eachProject.days} days left</div>
                          </div>
                        </div>
                      ) : (
                        <div className="w-36 h-full"> </div>
                      )}
                    </div>
                    <div className=" w-64 text-[#696974]">
                      <LinearProgressWithLabel value={eachProject.progress} />
                    </div>

                    <div className="avatars flex gap-4 w-48">
                      {eachProject.members > 0 && (
                        <Avatar alt="Remy Sharp" src="Profile.png" />
                      )}
                      {eachProject.members > 1 && (
                        <Avatar
                          alt="Travis Howard"
                          src="/static/images/avatar/2.jpg"
                        />
                      )}
                      {eachProject.members > 2 && (
                        <Avatar
                          sx={{
                            bgcolor: "lightblue",
                          }}
                        >
                          +{eachProject.members - 2}
                        </Avatar>
                      )}
                    </div>

                    <div className="menu text-black cursor-pointer">
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
                          d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};
