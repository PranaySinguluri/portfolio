import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  Snackbar,
  Alert,
} from '@mui/material';
import { Email, Phone, LinkedIn, GitHub, Send } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const contactInfo = [
  {
    icon: <Email />,
    title: 'Email',
    value: 'singuluripranay@gmail.com',
    link: 'mailto:singuluripranay@gmail.com',
  },
  {
    icon: <Phone />,
    title: 'Phone',
    value: '+1 573-466-3525',
    link: 'tel:+15734663525',
  },
  {
    icon: <LinkedIn />,
    title: 'LinkedIn',
    value: 'Connect on LinkedIn',
    link: 'https://www.linkedin.com/in/pranay-singuluri',
  },
  {
    icon: <GitHub />,
    title: 'GitHub',
    value: 'View GitHub Profile',
    link: 'https://github.com/PranaySinguluri',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend service
    // or use a service like Formspree, EmailJS, etc.
    console.log('Form submitted:', formData);
    setOpenSnackbar(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <Box
      id="contact"
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
            Get In Touch
          </Typography>

          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}
          >
            Let's discuss how we can work together
          </Typography>

          <Grid container spacing={4}>
            {/* Contact Information */}
            <Grid item xs={12} md={5}>
              <Stack spacing={3}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                  Contact Information
                </Typography>

                {contactInfo.map((info, index) => (
                  <Box
                    key={index}
                    component="a"
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    sx={{ textDecoration: 'none', display: 'block' }}
                  >
                    <MotionCard
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      sx={{
                        transition: 'all 0.3s',
                        '&:hover': {
                          transform: 'translateX(8px)',
                          boxShadow: (theme) =>
                            theme.palette.mode === 'dark'
                              ? '0 4px 12px rgba(144, 202, 249, 0.3)'
                              : '0 4px 12px rgba(102, 126, 234, 0.3)',
                        },
                      }}
                    >
                      <CardContent>
                        <Stack direction="row" spacing={2} alignItems="center">
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
                              color: 'primary.main',
                            }}
                          >
                            {info.icon}
                          </Box>
                          <Box>
                            <Typography variant="subtitle2" color="text.secondary">
                              {info.title}
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              {info.value}
                            </Typography>
                          </Box>
                        </Stack>
                      </CardContent>
                    </MotionCard>
                  </Box>
                ))}
              </Stack>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <MotionCard
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                sx={{
                  background: (theme) =>
                    theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)'
                      : 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                    Send a Message
                  </Typography>

                  <Box component="form" onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        multiline
                        rows={6}
                        variant="outlined"
                      />
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        endIcon={<Send />}
                        sx={{
                          background: (theme) =>
                            theme.palette.mode === 'dark'
                              ? 'linear-gradient(135deg, #90caf9 0%, #f48fb1 100%)'
                              : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          '&:hover': {
                            background: (theme) =>
                              theme.palette.mode === 'dark'
                                ? 'linear-gradient(135deg, #42a5f5 0%, #bf5f82 100%)'
                                : 'linear-gradient(135deg, #5568d3 0%, #6a3f7d 100%)',
                          },
                        }}
                      >
                        Send Message
                      </Button>
                    </Stack>
                  </Box>
                </CardContent>
              </MotionCard>
            </Grid>
          </Grid>
        </MotionBox>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Message sent successfully! I'll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
