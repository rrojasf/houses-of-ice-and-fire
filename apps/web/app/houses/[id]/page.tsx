// app/houses/[id]/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  CircularProgress,
  Paper,
  Box,
} from "@mui/material";
import { useParams } from "next/navigation";
import { House, Character } from "../../types/common";
import { getHouse, getSwornMember } from "../../lib/getData";

export default function HouseDetailPage() {
  const params = useParams();
  const [house, setHouse] = useState<House | null>(null);
  const [members, setMembers] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHouseDetails = async () => {
      if (params.id) {
        const houseData = await getHouse(params.id as string);
        setHouse(houseData);

        const memberPromises = houseData.swornMembers.map(getSwornMember);
        const memberData = await Promise.all(memberPromises);
        setMembers(memberData);

        setLoading(false);
      }
    };

    fetchHouseDetails();
  }, [params.id]);

  if (loading) {
    return <CircularProgress />;
  }

  if (!house) {
    return <Typography>House not found</Typography>;
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h1" gutterBottom>
        {house.name}
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          House Details
        </Typography>
        <Typography>
          <strong>Region:</strong> {house.region}
        </Typography>
        <Typography>
          <strong>Coat of Arms:</strong> {house.coatOfArms || "None"}
        </Typography>
        <Typography>
          <strong>Words:</strong> {house.words || "None"}
        </Typography>
      </Paper>
      {members.length > 0 && (
        <>
          <Typography variant="h4" gutterBottom>
            Sworn Members
          </Typography>
          <List>
            {members.map((member) => (
              <ListItem key={member.url}>
                <ListItemText
                  primary={member.name || "Unknown"}
                  secondary={
                    <Box component="span">
                      <Chip
                        label={member.died ? "Dead" : "Alive"}
                        color={member.died ? "error" : "success"}
                        size="small"
                        sx={{ mr: 1 }}
                      />
                      {member.died && `Died: ${member.died}`}
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Container>
  );
}
