import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Chip,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import { Work, TrendingUp } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const experiences = [
  {
    title: 'Full Stack React Developer & Python AI/ML Integration Specialist',
    company: 'Green Bay Packaging',
    location: 'Arkansas, USA',
    duration: 'Jul 2024 – Present',
    achievements: [
      'Developed scalable React.js frontend with TypeScript for enhanced user experience',
      'Built AI/ML pipelines with Python and TensorFlow for predictive analytics',
      'Implemented Apache Kafka for data streaming (40% reduction in delay)',
      'Optimized Oracle PL/SQL queries (35% improvement in performance)',
      'Integrated Lucidworks Fusion for NLP-powered search capabilities',
      'Deployed serverless AWS Lambda applications for cost-effective scaling',
    ],
    technologies: ['React.js', 'TypeScript', 'Python', 'TensorFlow', 'Apache Kafka', 'Oracle PL/SQL', 'AWS Lambda'],
  },
  {
    title: 'Full Stack Developer | Modular Construction SaaS Solutions',
    company: 'MasTec',
    location: 'Philadelphia, USA',
    duration: 'Jan 2023 – Jun 2024',
    achievements: [
      'Led React.js dashboard design (25% improvement)',
      'Developed microservices with Spring Boot for scalable architecture',
      'Integrated Apache Kafka for real-time data communication',
      'Optimized MSSQL queries (30% faster data retrieval)',
      'Automated deployments using Jenkins and AWS ECS',
      'Reduced loading times by 15% through performance optimization',
    ],
    technologies: ['React.js', 'Spring Boot', 'Apache Kafka', 'MSSQL', 'Jenkins', 'AWS ECS', 'Docker'],
  },
  {
    title: 'Software Developer | Lucidworks Search Optimization and AI/ML Systems',
    company: 'Capgemini (Client: Hillrom)',
    location: 'Bangalore, India',
    duration: 'Jan 2020 – Aug 2022',
    achievements: [
      'Implemented React.js components for HIPAA-compliant healthcare portals',
      'Powered Lucidworks Fusion with NLP models (30% search improvement)',
      'Trained AI/ML pipelines for predictive analytics',
      'Reduced API latency by 20% using Spring Boot optimization',
      'Automated security with Spring Security for healthcare data protection',
    ],
    technologies: ['React.js', 'Spring Boot', 'Lucidworks Fusion', 'NLP', 'Spring Security', 'AI/ML'],
  },
];

const Experience = () => {
  return (
    <Box
      id="experience"
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
            Professional Experience
          </Typography>

          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}
          >
            6 years of delivering innovative solutions
          </Typography>

          <Timeline position="alternate">
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align={index % 2 === 0 ? 'right' : 'left'}
                  variant="body2"
                  color="text.secondary"
                >
                  <Typography variant="h6" color="primary">
                    {exp.duration}
                  </Typography>
                  <Typography variant="body2">{exp.location}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="primary" sx={{ p: 1.5 }}>
                    <Work />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <MotionCard
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    sx={{
                      background: (theme) =>
                        theme.palette.mode === 'dark'
                          ? 'linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)'
                          : 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        transition: 'transform 0.3s',
                        boxShadow: (theme) =>
                          theme.palette.mode === 'dark'
                            ? '0 8px 24px rgba(144, 202, 249, 0.3)'
                            : '0 8px 24px rgba(102, 126, 234, 0.3)',
                      },
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" component="span" sx={{ fontWeight: 600, mb: 1 }}>
                        {exp.title}
                      </Typography>
                      <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
                        {exp.company}
                      </Typography>

                      <Stack spacing={1.5} sx={{ mb: 2 }}>
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <Stack key={achievementIndex} direction="row" spacing={1}>
                            <TrendingUp sx={{ color: 'success.main', fontSize: 20, mt: 0.5 }} />
                            <Typography variant="body2" color="text.secondary">
                              {achievement}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>

                      <Stack direction="row" flexWrap="wrap" gap={1}>
                        {exp.technologies.map((tech, techIndex) => (
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
                  </MotionCard>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Experience;
