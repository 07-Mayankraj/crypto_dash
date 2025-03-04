import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  CircularProgress, Typography
} from '@mui/material';

const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'
        );
        setCryptos(response.data);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptos();
  }, []);

  if (loading) return <CircularProgress sx={{ display: 'block', mx: 'auto', mt: 4 }} />;

  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>Logo</b></TableCell>
            <TableCell><b>Name</b></TableCell>
            <TableCell><b>Symbol</b></TableCell>
            <TableCell><b>Current Price ($)</b></TableCell>
            <TableCell><b>24h Change (%)</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cryptos.map((coin) => (
            <TableRow key={coin.id}>
              <TableCell>
                <img src={coin.image} alt={coin.name} width={30} height={30} />
              </TableCell>
              <TableCell>{coin.name}</TableCell>
              <TableCell>{coin.symbol.toUpperCase()}</TableCell>
              <TableCell>${coin.current_price.toLocaleString()}</TableCell>
              <TableCell
                sx={{ color: coin.price_change_percentage_24h >= 0 ? 'green' : 'red' }}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CryptoList;
