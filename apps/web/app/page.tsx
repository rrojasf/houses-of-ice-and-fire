import React from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import Link from "next/link";
import { getHouses, getSwornMember } from "./lib/getData";
import { House } from "./types/common";

export default async function HousesTablePage() {
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
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Region</TableCell>
              <TableCell>Sworn Members</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {swornMembersByHouse.map((house) => (
              <TableRow key={house.url}>
                <TableCell>{house.name}</TableCell>
                <TableCell>{house.region}</TableCell>
                <TableCell>{house.swornMembers.length}</TableCell>
                <TableCell>
                  <Link
                    href={`/houses/${encodeURIComponent(house.url.split("/").pop() || "")}`}
                    passHref
                    target="_blank"
                  >
                    <Button variant="contained" color="primary">
                      View
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
