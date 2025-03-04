import React from 'react';
import { Box, Container, Grid, Paper } from '@mui/material';
import Navbar from './components/Navbar';
import toast, { Toaster } from 'react-hot-toast';
import CryptoList from './components/CryptoLIst';
const App = () => {
  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh' }}>
      <Toaster />
      <Navbar />

      <Container sx={{ py: 4 }}>
        {/* Main Grid Layout */}
        {/* Crypto Grid (Main Content) */}
        <Grid item xs={12} >
          <CryptoList />
        </Grid>
      </Container>
    </Box>
  );
};

export default App;
