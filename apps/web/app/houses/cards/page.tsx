// app/page.tsx
import React from "react";
import { Container, Typography } from "@mui/material";
import { House } from "../../types/common";
import HousesList from "../../components/HousesList";
import { getHouses, getSwornMember } from "../../lib/getData";

export default async function Home() {
  const houses = await getHouses();

  const housesWithMembers = await Promise.all(
    houses.map(async (house: House) => {
      const characters = await Promise.all(
        house.swornMembers.map(getSwornMember),
      );
      return { ...house, characters };
    }),
  );

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h1" gutterBottom>
        Houses of Ice and Fire
      </Typography>
      <HousesList houses={housesWithMembers} />
    </Container>
  );
}
