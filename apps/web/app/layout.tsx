// app/layout.tsx
import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Houses of Ice and Fire",
  description:
    "This is a testing app to connect to https://anapioficeandfire.com/api/",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Ice and Fire
              </Typography>
              <Button color="inherit" component={Link} href="/">
                Home
              </Button>
              <Button color="inherit" component={Link} href="/houses/cards">
                Cards
              </Button>
              <Button color="inherit" component={Link} href="/houses/enhanced">
                Enhanced
              </Button>
            </Toolbar>
          </AppBar>
          <Container maxWidth="lg" sx={{ mt: 4 }}>
            {children}
          </Container>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
