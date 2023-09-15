import { Button, Typography, Box, css } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 15, background: "orangered" }}
          variant="contained"
        >
          <Typography variant="h3">View all products</Typography>
        </Button>
      </Box>
    </main>
  );
};

export default Home;
