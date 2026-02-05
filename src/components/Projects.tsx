import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const projects = [
  {
    name: 'AI-Powered Healthcare Portal',
    description:
      'Developed a HIPAA-compliant healthcare portal with NLP-powered search capabilities using Lucidworks Fusion. Implemented predictive analytics for patient care optimization.',
    technologies: ['React.js', 'Spring Boot', 'Lucidworks Fusion', 'NLP', 'TensorFlow', 'AWS'],
    features: [
      'HIPAA compliance',
      '30% search improvement',
      'Predictive analytics',
      'Secure authentication',
    ],
  },
  {
    name: 'Real-time Data Streaming Platform',
    description:
      'Built a scalable data streaming platform using Apache Kafka for manufacturing operations. Achieved 40% reduction in data processing delays.',
    technologies: ['React.js', 'Apache Kafka', 'Python', 'Oracle PL/SQL', 'AWS Lambda'],
    features: [
      'Real-time processing',
      '40% delay reduction',
      'Serverless architecture',
      'Scalable design',
    ],
  },
  {
    name: 'Modular Construction SaaS Dashboard',
    description:
      'Led the development of a comprehensive project management dashboard for modular construction. Improved team collaboration by 25% through intuitive UI/UX.',
    technologies: ['React.js', 'TypeScript', 'Spring Boot', 'MSSQL', 'Jenkins', 'Docker'],
    features: [
      'Microservices architecture',
      '25% collaboration improvement',
      'Automated deployments',
      '15% faster load times',
    ],
  },
  {
    name: 'E-commerce Analytics Platform',
    description:
      'Created an analytics platform with AI/ML capabilities for e-commerce insights. Implemented custom dashboards and predictive models for sales forecasting.',
    technologies: ['React.js', 'Python', 'TensorFlow', 'MongoDB', 'AWS', 'Kubernetes'],
    features: [
      'Predictive analytics',
      'Custom dashboards',
      'Real-time insights',
      'Cloud-native',
    ],
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
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
            Featured Projects
          </Typography>

          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}
          >
            Showcasing innovative solutions and technical excellence
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <MotionCard
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)'
                        : 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: (theme) =>
                        theme.palette.mode === 'dark'
                          ? '0 12px 24px rgba(144, 202, 249, 0.3)'
                          : '0 12px 24px rgba(102, 126, 234, 0.3)',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                      {project.name}
                    </Typography>

                    <Typography variant="body1" color="text.secondary" paragraph>
                      {project.description}
                    </Typography>

                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      Key Features:
                    </Typography>
                    <Stack spacing={0.5} sx={{ mb: 2 }}>
                      {project.features.map((feature, featureIndex) => (
                        <Typography
                          key={featureIndex}
                          variant="body2"
                          color="text.secondary"
                          sx={{ display: 'flex', alignItems: 'center' }}
                        >
                          • {feature}
                        </Typography>
                      ))}
                    </Stack>

                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      Technologies:
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1}>
                      {project.technologies.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: (theme) =>
                              theme.palette.mode === 'dark'
                                ? 'rgba(144, 202, 249, 0.2)'
                                : 'rgba(102, 126, 234, 0.1)',
                            color: 'primary.main',
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>

                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button
                      size="small"
                      startIcon={<GitHub />}
                      sx={{ color: 'primary.main' }}
                    >
                      View Code
                    </Button>
                    <Button
                      size="small"
                      startIcon={<Launch />}
                      sx={{ color: 'primary.main' }}
                    >
                      Live Demo
                    </Button>
                  </CardActions>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Projects;
