import { Box, Container, Typography, Button, Stack, IconButton } from '@mui/material';
import { Email, Phone, LinkedIn, Download, Code, ContactMail } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const floatingParticles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 10 + 10,
  delay: Math.random() * 5,
}));

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Pranay_Singuluri_Resume.pdf';
    link.click();
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Floating particles */}
      {floatingParticles.map((particle) => (
        <MotionBox
          key={particle.id}
          sx={{
            position: 'absolute',
            width: particle.size,
            height: particle.size,
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            pointerEvents: 'none',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Stack spacing={3} alignItems="center" textAlign="center">
            <MotionTypography
              variant="h6"
              sx={{ 
                color: 'white',
                letterSpacing: 2,
                textTransform: 'uppercase',
                fontWeight: 300,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Welcome to my Portfolio
            </MotionTypography>

            <MotionTypography
              variant="h1"
              sx={{
                color: 'white',
                fontWeight: 700,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              NAGA VENKATA PRANAY SINGULURI
            </MotionTypography>

            <MotionTypography
              variant="h3"
              sx={{
                color: 'rgba(255, 255, 255, 0.95)',
                fontWeight: 500,
                '&::after': {
                  content: '"|"',
                  animation: 'blink 1s step-end infinite',
                  marginLeft: '2px',
                },
                '@keyframes blink': {
                  '0%, 100%': { opacity: 1 },
                  '50%': { opacity: 0 },
                },
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Full Stack Developer
            </MotionTypography>

            <MotionTypography
              variant="h5"
              sx={{
                color: 'rgba(255, 255, 255, 0.85)',
                maxWidth: 800,
                fontWeight: 300,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              6 Years of Experience in Building Scalable Web Applications
              <br />
              Specializing in React.js, Spring Boot, and AI/ML Integration
            </MotionTypography>

            {/* Contact Information */}
            <MotionBox
              sx={{ mt: 2 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                alignItems="center"
                justifyContent="center"
                flexWrap="wrap"
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <Email sx={{ color: 'white' }} />
                  <Typography sx={{ color: 'white' }}>
                    singuluripranay@gmail.com
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Phone sx={{ color: 'white' }} />
                  <Typography sx={{ color: 'white' }}>
                    +1 573-466-3525
                  </Typography>
                </Stack>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/pranay-singuluri"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: 'white' }}
                >
                  <LinkedIn />
                </IconButton>
              </Stack>
            </MotionBox>

            {/* CTA Buttons */}
            <MotionBox
              sx={{ mt: 4 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="center"
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Code />}
                  onClick={() => scrollToSection('projects')}
                  sx={{
                    backgroundColor: 'white',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    },
                  }}
                >
                  View Projects
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<ContactMail />}
                  onClick={() => scrollToSection('contact')}
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  Contact Me
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Download />}
                  onClick={handleDownloadResume}
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  Download Resume
                </Button>
              </Stack>
            </MotionBox>
          </Stack>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Hero;
