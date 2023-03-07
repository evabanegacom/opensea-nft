import React from 'react'
import Modal from 'react-modal';
import { Button } from '@mui/material';

const ModalComponent = ({ nft, closeModal }) => {
  return (
    <>
      <Modal isOpen={!!nft} onRequestClose={closeModal}>
        <h2>{nft?.name}</h2>
        <img src={nft?.image_url} alt={nft?.name} />
        <p>{nft?.description}</p>
        <p>Owner: {nft?.owner?.address}</p>
        <Button variant="contained" color="primary" href={nft?.permalink} target="_blank" rel="noopener noreferrer">Purchase</Button>
        &nbsp;&nbsp;
        <Button data-testid='button' variant="contained" onClick={closeModal}>Close</Button>
      </Modal>
    </>
  )
}

export default ModalComponent