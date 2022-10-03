import { Box, Button, Stack, Typography } from '@mui/material';
import LoadingSkeleton from 'components/shared/LoadingSkeleton';
import useUser from 'hooks/useUser';
import Head from 'next/head';
import { useState } from 'react';

import { HomeOutlined } from '@mui/icons-material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SpaIcon from '@mui/icons-material/Spa';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import SportsHandballOutlinedIcon from '@mui/icons-material/SportsHandballOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { signOut } from 'next-auth/react';

export default function HomePage() {
  const { error, user } = useUser({
    whenNotFoundRedirectTo: '/sign-in'
  });
  const [currentTab, setCurrentTab] = useState(0);
  const changeTab = (n: number) => () => setCurrentTab(n);

  if (error || !user) return <LoadingSkeleton />;

  return <>
    <Head>
      <title> Health Companion </title>
    </Head>
    <div id="dashboard">
      <Stack id="side-bar">

        <Stack
          p={3} mb={2}
          spacing={1}
          alignItems="center"
          direction="row">
          <SpaIcon color='primary' />
          <Typography
            color='primary'
            fontWeight="bold"
            variant="h6">
            Health Companion
          </Typography>
        </Stack>

        <Typography
          ml={3} mb={2}
          variant="subtitle2">
          Main Navigation
        </Typography>

        <NavButton
          onClick={changeTab(0)}
          active={currentTab === 0}
          startIcon={<HomeOutlined />}>
          Home
        </NavButton>
        <NavButton
          onClick={changeTab(1)}
          active={currentTab === 1}
          startIcon={<FavoriteBorderOutlinedIcon />}>
          Health Checks
        </NavButton>
        <NavButton
          onClick={changeTab(2)}
          active={currentTab === 2}
          startIcon={<MonitorHeartOutlinedIcon />}>
          Monitoring
        </NavButton>
        <NavButton
          onClick={changeTab(3)}
          active={currentTab === 3}
          startIcon={<SportsHandballOutlinedIcon />}>
          Exercises
        </NavButton>

        <div style={{ flex: 1 }}></div>

        <NavButton
          onClick={signOut}
          startIcon={<LogoutOutlinedIcon />}>
          Sign out
        </NavButton>
      </Stack>

      <Stack id="main-content">

        <Box hidden={currentTab !== 0}>
          home
        </Box>
        <Box hidden={currentTab !== 1}>
          Health checks
        </Box>
        <Box hidden={currentTab !== 2}>
          Monitoring
        </Box>
        <Box hidden={currentTab !== 3}>
          Exercises
        </Box>

      </Stack>
    </div>
  </>;
}

const NavButton = ({ children, startIcon, active, onClick }: {
  children: string,
  startIcon: any;
  active?: boolean;
  onClick: () => void;
}) => (
  <Button
    onClick={onClick}
    className={active ? 'active-nav-button' : ''}
    sx={{
      justifyContent: "flex-start",
      borderRadius: 0,
      px: 3, py: 1.5, gap: 1,
      textTransform: "none",
    }}
    fullWidth
    startIcon={startIcon}>
    {children}
  </Button>
);