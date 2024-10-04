import React from "react";
import { CharacterProps } from "../types/props";
import { ListItem, ListItemText, Chip, Box } from "@mui/material";

const Character = ({ character }: CharacterProps) => {
  return (
    <ListItem>
      <ListItemText
        primary={character.name || "Unknown"}
        disableTypography
        secondary={
          <Box
            component="span"
            sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}
          >
            <Chip
              label={character.died ? "Dead" : "Alive"}
              color={character.died ? "default" : "primary"}
              size="small"
            />
            {character.died && <span>Died: {character.died}</span>}
          </Box>
        }
      />
    </ListItem>
  );
};

export default Character;
