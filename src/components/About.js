import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box>
        <Typography
          sx={{ fontFamily: "fantasy", textAlign: "center" }}
          variant="h2"
        >
          This is a CRUD application
        </Typography>
        <Typography
          sx={{ fontFamily: "fantasy", textAlign: "center" }}
          variant="h3"
        >
          BY MERN STACK
        </Typography>
      </Box>
    </div>
  );
};

export default About;
