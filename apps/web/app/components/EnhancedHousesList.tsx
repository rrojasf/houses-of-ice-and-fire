"use client";

import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Avatar,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { HouseListProps, HouseProps } from "../types/props";
import { Character } from "../types/common";

const COLORS = ["#0088FE", "#00C49F"];

const EnhancedHouse: React.FC<HouseProps> = ({ house }) => {
  const aliveCharacters = house.swornMembers.filter(
    (char) => !char.died,
  ).length;
  const deadCharacters = house.swornMembers.length - aliveCharacters;

  const data = [
    { name: "Alive", value: aliveCharacters },
    { name: "Dead", value: deadCharacters },
  ];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">{house.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
              Region: {house.region}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Words: {house.words || "None"}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Coat of Arms: {house.coatOfArms}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Sworn Members: {house.swornMembers.length}
            </Typography>
          </Grid>
          {house.swornMembers.length > 0 && (
            <Grid item xs={12} md={6}>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label={renderCustomizedLabel}
                    labelLine={false}
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Grid>
          )}
          {house.swornMembers.length > 0 ? (
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Sworn Members:
              </Typography>
              {house.characters.map((character: Character) => (
                <Chip
                  key={character.url}
                  avatar={<Avatar>{character.name[0]}</Avatar>}
                  label={character.name}
                  color={character.died ? "default" : "primary"}
                  style={{ margin: "0.5rem 0.5rem 0 0" }}
                />
              ))}
            </Grid>
          ) : (
            <Typography variant="body2" color="text.secondary">
              This house has no sworn members
            </Typography>
          )}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

const EnhancedHousesList: React.FC<HouseListProps> = ({ houses }) => {
  const [selectedRegion, setSelectedRegion] = useState(0);
  const regions = Array.from(new Set(houses.map((house) => house.region)));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedRegion(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
        <Tabs
          value={selectedRegion}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {regions.map((region) => (
            <Tab label={region} key={region} />
          ))}
        </Tabs>
      </Box>
      {houses
        .filter((house) => house.region === regions[selectedRegion])
        .map((house) => (
          <EnhancedHouse key={house.url} house={house} />
        ))}
    </Box>
  );
};

export default EnhancedHousesList;
