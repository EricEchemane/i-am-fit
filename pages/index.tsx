import { Avatar, Box, Button, IconButton, Stack, Typography, useMediaQuery } from '@mui/material';
import LoadingSkeleton from 'components/shared/LoadingSkeleton';
import useUser from 'hooks/useUser';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { signOut } from 'next-auth/react';

import { HomeOutlined, MenuOutlined } from '@mui/icons-material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SpaIcon from '@mui/icons-material/Spa';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import SportsHandballOutlinedIcon from '@mui/icons-material/SportsHandballOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import HomeComponent from 'components/home';
import HealthChecks from 'components/home/HealthChecks';
import Monitoring from 'components/home/Monitoring';
import Exercises from 'components/home/Exercises';
import { useRouter } from 'next/router';

export default function HomePage() {
  const { error, user } = useUser({
    whenNotFoundRedirectTo: '/sign-in'
  });
  const isSmallDevice = useMediaQuery('(max-width:800px)');
  const [sideBarVisible, setSideBarVisible] = useState(isSmallDevice);
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState<number>(0);

  useEffect(() => {
    if (router.query && router.query.tab) {
      const tab = parseInt(router.query.tab as string);
      if (tab > 3) return;
      setCurrentTab(tab);
    }
  }, [router.query]);

  const changeTab = (n: number) => () => {
    router.replace(`?tab=${n}`);
    setCurrentTab(n);
    if (isSmallDevice) closeSideBar();
  };

  const openSideBar = () => {
    const sidebar = document.getElementById('side-bar');
    if (sidebar) {
      sidebar.style.translate = "0 0";
      setSideBarVisible(true);
    }
  };
  const closeSideBar = () => {
    const sidebar = document.getElementById('side-bar');
    if (sidebar) {
      sidebar.style.translate = "-100% 0";
      setSideBarVisible(false);
    }
  };

  const toggleSideBarVisibility = () => {
    if (!isSmallDevice) return;
    sideBarVisible ? closeSideBar() : openSideBar();
  };

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
            Fitness Companion
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

        <Stack id="top-nav-bar">
          <Stack
            spacing={1.5}
            direction="row"
            alignItems="center">
            <Avatar
              className='avatar'
              alt={user.name || ""}
              src={user.picture || ""} />
            <Stack>
              <Typography
                fontWeight="bold">
                {user.name}
              </Typography>
              <Typography
                variant="caption">
                {user.email}
              </Typography>
            </Stack>
          </Stack>
          <div hidden={!isSmallDevice}>
            <IconButton
              onClick={toggleSideBarVisibility}
              aria-label="menu"
              size="large">
              {!sideBarVisible
                ? <MenuOutlined fontSize="large" />
                : <MenuOpenOutlinedIcon fontSize="large" />}
            </IconButton>
          </div>
        </Stack>

        {currentTab === 0 && <Box
          className="scrollable">
          <HomeComponent />
        </Box>}
        {currentTab === 1 && <Box
          className="scrollable">
          <HealthChecks />
        </Box>}
        {currentTab === 2 && <Box
          className="scrollable">
          <Monitoring />
        </Box>}
        {currentTab === 3 &&
          <Box
            className="scrollable">
            <Exercises />
          </Box>}

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