import React from "react";
import CharacterList from "./CharacterList";
import { HouseProps } from "../types/props";
import { Card, CardContent, Typography } from "@mui/material";

const House = ({ house }: HouseProps) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {house.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Region: {house.region}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Words: {house.words || "None"}
        </Typography>
        {house.swornMembers.length > 0 ? (
          <CharacterList characters={house.swornMembers} />
        ) : (
          <Typography variant="body2" color="text.secondary">
            This house has no sworn members
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default House;
