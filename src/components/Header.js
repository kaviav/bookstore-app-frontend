import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";

import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <AppBar sx={{ backgroundColor: "lightblue" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "black" }}>
            <Typography>
              <LibraryBooksIcon />
            </Typography>
          </NavLink>

          <Tabs
            sx={{ ml: "auto", textColor: "black" }}
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab
              LinkComponent={NavLink}
              to="/add"
              label="Add product"
              sx={{ color: "black" }}
            />

            <Tab
              LinkComponent={NavLink}
              to="/books"
              label="Books"
              sx={{ color: "black" }}
            />

            <Tab
              LinkComponent={NavLink}
              to="/about"
              label="About Us"
              sx={{ color: "black" }}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
