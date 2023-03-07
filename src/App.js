import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import Nft from './container/Nft';
import ModalComponent from './container/Modal';

const App = () => {
  const [nfts, setNfts] = useState([]);
  const [selectedNft, setSelectedNft] = useState(null);
  
  const fetchNfts = async () => {
    const address = process.env.REACT_APP_OPEN_SEA_ADDRESS;
    const response = await axios.get(`https://api.opensea.io/api/v1/assets?owner=${address}`);
    console.log({response})
    setNfts(response.data.assets);
    // Make a HTTP request to fetch the user's NFTs from the blockchain
  };

  useEffect(() => {
    fetchNfts();
  }, []);

  const openModal = (nft) => {
    setSelectedNft(nft);
  };

  const closeModal = () => {
    setSelectedNft(null);
  };

  return (
    <>
    <h1 className='title'>NFT LIST</h1>
    <Grid container spacing={3}>
      {nfts?.length ? nfts.map((nft) => (
        <Nft nft={nft} key={nft?.id} openModal={openModal} />
      )): <h1>Loading...</h1>}
      <ModalComponent nft={selectedNft} closeModal={closeModal} />
    </Grid>
    </>
  );
};

export default App;
