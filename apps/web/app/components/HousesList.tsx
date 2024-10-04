import React from "react";
import House from "./House";
import { HouseListProps } from "../types/props";
import { Grid } from "@mui/material";

const HousesList = ({ houses }: HouseListProps) => {
  return (
    <Grid container spacing={3}>
      {houses.map((house) => (
        <Grid item xs={12} sm={6} md={4} key={house.url}>
          <House house={house} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HousesList;
