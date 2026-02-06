import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  useScrollTrigger,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme as useMuiTheme,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Brightness4,
  Brightness7,
  Home,
  Person,
  Code,
  Work,
  School,
  FolderSpecial,
  ContactMail,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const menuItems = [
  { label: 'Home', id: 'home', icon: <Home /> },
  { label: 'About', id: 'about', icon: <Person /> },
  { label: 'Skills', id: 'skills', icon: <Code /> },
  { label: 'Experience', id: 'experience', icon: <Work /> },
  { label: 'Education', id: 'education', icon: <School /> },
  { label: 'Projects', id: 'projects', icon: <FolderSpecial /> },
  { label: 'Contact', id: 'contact', icon: <ContactMail /> },
];

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              onClick={() => scrollToSection(item.id)}
              sx={{ textAlign: 'center' }}
            >
              <Box sx={{ mr: 1, display: 'flex' }}>{item.icon}</Box>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: trigger
            ? darkMode
              ? 'rgba(30, 30, 30, 0.95)'
              : 'rgba(255, 255, 255, 0.95)'
            : 'transparent',
          boxShadow: trigger ? 1 : 0,
          backdropFilter: trigger ? 'blur(10px)' : 'none',
          transition: 'all 0.3s',
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              cursor: 'pointer',
              background: darkMode
                ? 'linear-gradient(135deg, #90caf9 0%, #f48fb1 100%)'
                : trigger
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                : 'white',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            onClick={() => scrollToSection('home')}
          >
            PS
          </Typography>

          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {menuItems.map((item, index) => (
                <MotionButton
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    color: trigger
                      ? 'text.primary'
                      : 'white',
                    '&:hover': {
                      backgroundColor: darkMode
                        ? 'rgba(144, 202, 249, 0.1)'
                        : 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {item.label}
                </MotionButton>
              ))}
            </Box>
          )}

          <IconButton
            onClick={toggleDarkMode}
            sx={{
              ml: 2,
              color: trigger ? 'text.primary' : 'white',
            }}
          >
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          {isMobile && (
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                ml: 2,
                color: trigger ? 'text.primary' : 'white',
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>

      <Toolbar />
    </>
  );
};

export default Navbar;
