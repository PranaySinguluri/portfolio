import { Box, Container, Typography, Stack, IconButton, Divider } from '@mui/material';
import { LinkedIn, GitHub, Email, KeyboardArrowUp } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#0a0a0a' : '#1a1a1a',
        color: 'white',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
        <Stack spacing={4}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Pranay Singuluri
            </Typography>

            <Stack direction="row" spacing={2}>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/pranay-singuluri"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  '&:hover': {
                    color: '#90caf9',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s',
                }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                component="a"
                href="https://github.com/PranaySinguluri"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  '&:hover': {
                    color: '#90caf9',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s',
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                component="a"
                href="mailto:singuluripranay@gmail.com"
                sx={{
                  color: 'white',
                  '&:hover': {
                    color: '#90caf9',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s',
                }}
              >
                <Email />
              </IconButton>
            </Stack>
          </Stack>

          <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
              © {new Date().getFullYear()} Pranay Singuluri. All rights reserved.
            </Typography>

            <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
              Built with React, TypeScript & Material UI
            </Typography>
          </Stack>
        </Stack>
        </MotionBox>
      </Container>

      {/* Back to Top Button */}
      <MotionBox
        component={IconButton}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.95 }}
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          backgroundColor: 'primary.main',
          color: 'white',
          '&:hover': {
            backgroundColor: 'primary.dark',
          },
          transition: 'background-color 0.3s',
          boxShadow: 3,
        }}
      >
        <KeyboardArrowUp />
      </MotionBox>
    </Box>
  );
};

export default Footer;
