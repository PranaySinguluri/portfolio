import { Box, Container, Typography, Grid, Card, CardContent, Stack } from '@mui/material';
import { School, LocationOn, CalendarToday } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const education = [
  {
    degree: 'Master of Science in Information Science',
    university: 'Missouri University of Science and Technology',
    location: 'Missouri, USA',
    duration: 'Aug 2022 – May 2024',
    icon: '🎓',
  },
  {
    degree: 'Bachelor of Technology in Electronics and Communication Engineering',
    university: 'Vishnu Institute of Technology',
    location: 'Andhra Pradesh, India',
    duration: 'Jun 2016 – Jul 2020',
    icon: '🎓',
  },
];

const Education = () => {
  return (
    <Box
      id="education"
      sx={{
        py: 10,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'background.paper' : 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 2,
              background: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, #90caf9 0%, #f48fb1 100%)'
                  : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Education
          </Typography>

          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}
          >
            Academic credentials and qualifications
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {education.map((edu, index) => (
              <Grid item xs={12} md={6} key={index}>
                <MotionCard
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  sx={{
                    height: '100%',
                    background: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)'
                        : 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)',
                    transition: 'all 0.3s',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      boxShadow: (theme) =>
                        theme.palette.mode === 'dark'
                          ? '0 12px 24px rgba(144, 202, 249, 0.3)'
                          : '0 12px 24px rgba(102, 126, 234, 0.3)',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '4px',
                      background: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'linear-gradient(90deg, #90caf9 0%, #f48fb1 100%)'
                          : 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 3,
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          backgroundColor: (theme) =>
                            theme.palette.mode === 'dark'
                              ? 'rgba(144, 202, 249, 0.1)'
                              : 'rgba(102, 126, 234, 0.1)',
                          mr: 2,
                          fontSize: '2rem',
                        }}
                      >
                        {edu.icon}
                      </Box>
                      <School sx={{ fontSize: 40, color: 'primary.main' }} />
                    </Box>

                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                      {edu.degree}
                    </Typography>

                    <Typography variant="h6" color="primary" sx={{ mb: 3 }}>
                      {edu.university}
                    </Typography>

                    <Stack spacing={1.5}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <LocationOn sx={{ color: 'text.secondary', fontSize: 20 }} />
                        <Typography variant="body1" color="text.secondary">
                          {edu.location}
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <CalendarToday sx={{ color: 'text.secondary', fontSize: 20 }} />
                        <Typography variant="body1" color="text.secondary">
                          {edu.duration}
                        </Typography>
                      </Stack>
                    </Stack>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Education;
