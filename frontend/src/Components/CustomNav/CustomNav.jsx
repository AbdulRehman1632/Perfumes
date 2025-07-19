import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
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
import { NavLink } from 'react-router-dom';

const CustomNav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' }
  ];

  return (
    <>
      <AppBar sx={{ backgroundColor: 'var(--bg-color)', color: 'var(--font-color)' }} position="static" elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Typography variant="h6" fontWeight="bold">
            Logo
          </Typography>

          {/* Desktop Links */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 3 }}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  style={({ isActive }) => ({
                    textDecoration: 'none',
                    color: isActive ? '#ffffffff' : 'inherit',
                    fontWeight: isActive ? 'bold' : 'normal',
                    borderBottom: isActive ? '2px solid var(--theme-color)' : 'none'
                  })}
                >
                  {link.name}
                </NavLink>
              ))}
            </Box>
          )}

          {/* Right-side Icons */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton color="inherit"><PersonIcon /></IconButton>
            <IconButton color="inherit"><FavoriteBorderIcon /></IconButton>
            <IconButton color="inherit"><ShoppingBagOutlinedIcon /></IconButton>
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
            {navLinks.map((link) => (
              <ListItem button key={link.name} component={NavLink} to={link.path}>
                <ListItemText primary={link.name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default CustomNav;
