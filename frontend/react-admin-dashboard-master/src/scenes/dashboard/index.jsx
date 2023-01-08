import React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import MyMap from "./MyMap"; // Import the MyMap component

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 1"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}
        >
          <div>
            <MyMap /> {/* Use the MyMap component inside the div element */}
          </div>
        </Box>
        <Box
          gridColumn="span 8"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
