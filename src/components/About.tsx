import { Box, Container, Typography, Grid, Card, CardContent, Stack } from '@mui/material';
import { Code, Cloud, Storage, Security, Psychology, Speed } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const highlights = [
  {
    icon: <Code />,
    title: 'Full Stack Expertise',
    description: 'Expert in React.js, TypeScript, and Spring Boot for building scalable applications',
  },
  {
    icon: <Psychology />,
    title: 'AI/ML Integration',
    description: 'Skilled in TensorFlow, NLP, and predictive analytics for intelligent solutions',
  },
  {
    icon: <Cloud />,
    title: 'Cloud Architecture',
    description: 'Extensive experience with AWS services including Lambda, ECS, and S3',
  },
  {
    icon: <Storage />,
    title: 'Database Management',
    description: 'Proficient in both SQL (MSSQL, Oracle) and NoSQL (MongoDB, DynamoDB)',
  },
  {
    icon: <Security />,
    title: 'Security First',
    description: 'Implementation of Spring Security and HIPAA-compliant healthcare systems',
  },
  {
    icon: <Speed />,
    title: 'Performance Optimization',
    description: 'Proven track record of reducing latency and improving application speed',
  },
];

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 10,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'background.default' : 'background.paper',
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
            About Me
          </Typography>

          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}
          >
            Passionate about creating innovative solutions
          </Typography>

          {/* Professional Summary */}
          <Card
            sx={{
              mb: 6,
              p: 3,
              background: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)'
                  : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Professional Summary
              </Typography>
              <Stack spacing={2}>
                <Typography variant="body1" paragraph>
                  Results-driven Full Stack Developer with <strong>6 years of experience</strong> in 
                  designing, developing, and deploying scalable web applications across healthcare, 
                  manufacturing, and construction sectors.
                </Typography>
                <Typography variant="body1" paragraph>
                  Expert in building modern, responsive user interfaces with <strong>React.js</strong> and 
                  <strong> TypeScript</strong>, coupled with robust backend systems using 
                  <strong> Java (Spring Boot)</strong>. Proven track record in integrating 
                  <strong> AI/ML capabilities</strong> using TensorFlow and NLP to create intelligent, 
                  data-driven applications.
                </Typography>
                <Typography variant="body1" paragraph>
                  Experienced in cloud-native development with <strong>AWS</strong>, implementing 
                  microservices architectures, and optimizing database performance across both 
                  relational (MSSQL, Oracle PL/SQL) and NoSQL (MongoDB, Cassandra, DynamoDB) systems.
                </Typography>
                <Typography variant="body1">
                  Committed to delivering high-quality code, implementing best practices in DevOps 
                  (Jenkins, Docker, Kubernetes), and creating solutions that drive business value 
                  through innovation and technical excellence.
                </Typography>
              </Stack>
            </CardContent>
          </Card>

          {/* Highlights Grid */}
          <Grid container spacing={3}>
            {highlights.map((highlight, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s',
                    '&:hover': {
                      boxShadow: (theme) =>
                        theme.palette.mode === 'dark'
                          ? '0 8px 16px rgba(144, 202, 249, 0.3)'
                          : '0 8px 16px rgba(102, 126, 234, 0.3)',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                        color: 'primary.main',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          backgroundColor: (theme) =>
                            theme.palette.mode === 'dark'
                              ? 'rgba(144, 202, 249, 0.1)'
                              : 'rgba(102, 126, 234, 0.1)',
                          mr: 2,
                        }}
                      >
                        {highlight.icon}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {highlight.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {highlight.description}
                    </Typography>
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

export default About;
