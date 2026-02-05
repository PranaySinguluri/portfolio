import { Box, Container, Typography, Grid, Card, CardContent, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const skillCategories = [
  {
    category: 'Frontend Development',
    skills: [
      'React.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Redux',
      'Context API',
      'Material UI',
      'Bootstrap',
      'Figma',
    ],
    color: '#667eea',
  },
  {
    category: 'Backend Development',
    skills: [
      'Java 8/11',
      'Spring Boot',
      'Spring Security',
      'REST APIs',
      'Microservices',
      'Python',
    ],
    color: '#764ba2',
  },
  {
    category: 'AI/ML Integration',
    skills: [
      'TensorFlow',
      'NLP',
      'Lucidworks Fusion',
      'Predictive Analytics',
      'Search Optimization',
    ],
    color: '#f093fb',
  },
  {
    category: 'Database Management',
    skills: [
      'MSSQL',
      'Oracle PL/SQL',
      'MongoDB',
      'Cassandra',
      'DynamoDB',
      'Query Optimization',
    ],
    color: '#4facfe',
  },
  {
    category: 'DevOps and Cloud',
    skills: [
      'AWS (S3, Lambda, ECS, CloudWatch)',
      'Jenkins',
      'Docker',
      'Kubernetes',
      'CI/CD Pipelines',
    ],
    color: '#43e97b',
  },
  {
    category: 'Streaming and Events',
    skills: ['Apache Kafka', 'Event-Driven Systems'],
    color: '#fa709a',
  },
  {
    category: 'Testing and Tools',
    skills: ['JUnit', 'Mockito', 'Swagger', 'REST Assured', 'Postman'],
    color: '#fee140',
  },
  {
    category: 'Version Control',
    skills: ['Git', 'GitHub', 'GitLab'],
    color: '#30cfd0',
  },
];

const Skills = () => {
  return (
    <Box
      id="skills"
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
            Skills & Expertise
          </Typography>

          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}
          >
            Comprehensive technical skill set across the full stack
          </Typography>

          <Grid container spacing={3}>
            {skillCategories.map((category, index) => (
              <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                <MotionCard
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  sx={{
                    height: '100%',
                    background: (theme) =>
                      theme.palette.mode === 'dark'
                        ? `linear-gradient(135deg, ${category.color}15 0%, ${category.color}05 100%)`
                        : `linear-gradient(135deg, ${category.color}10 0%, transparent 100%)`,
                    borderLeft: `4px solid ${category.color}`,
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: (theme) =>
                        theme.palette.mode === 'dark'
                          ? `0 8px 16px ${category.color}30`
                          : `0 8px 16px ${category.color}40`,
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        color: category.color,
                        mb: 3,
                      }}
                    >
                      {category.category}
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1}>
                      {category.skills.map((skill, skillIndex) => (
                        <Chip
                          key={skillIndex}
                          label={skill}
                          sx={{
                            backgroundColor: (theme) =>
                              theme.palette.mode === 'dark'
                                ? `${category.color}30`
                                : `${category.color}20`,
                            color: (theme) =>
                              theme.palette.mode === 'dark'
                                ? 'text.primary'
                                : category.color,
                            fontWeight: 500,
                            border: `1px solid ${category.color}50`,
                            '&:hover': {
                              backgroundColor: (theme) =>
                                theme.palette.mode === 'dark'
                                  ? `${category.color}40`
                                  : `${category.color}30`,
                            },
                          }}
                        />
                      ))}
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

export default Skills;
