import { getHouses, getSwornMember } from "../../lib/getData";
import { Container, Typography } from "@mui/material";
import EnhancedHousesList from "../../components/EnhancedHousesList";
import { House } from "../../types/common";

export default async function Home() {
  const houses = await getHouses();
  const swornMembersByHouse = await Promise.all(
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
      <EnhancedHousesList houses={swornMembersByHouse} />
    </Container>
  );
}
