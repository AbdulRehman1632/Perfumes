import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const CustomNav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = ['Home', 'Shop', 'About Us', 'Services'];

  return (
    <>
      <AppBar sx={{backgroundColor:"var(--bg-color)",color:"var(--font-color)"}} position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Left: Logo */}
          <Typography variant="h6" fontWeight="bold">
            Logo
          </Typography>

          {/* Center: Links (hide on small screens) */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 3 }}>
              {navLinks.map((link) => (
                <Typography
                  key={link}
                  variant="button"
                  sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                >
                  {link}
                </Typography>
              ))}
            </Box>
          )}

          {/* Right: Icons */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton color="inherit">
              <PersonIcon />
            </IconButton>
            <IconButton color="inherit">
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton color="inherit">
              <ShoppingBagOutlinedIcon />
            </IconButton>

            {/* Hamburger for mobile */}
            {isMobile && (
              <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box width={250} role="presentation" onClick={() => setDrawerOpen(false)}>
          <List>
            {navLinks.map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default CustomNav
