import React from 'react'
import Modal from 'react-modal';
import { Button } from '@mui/material';

const ModalComponent = ({ nft, closeModal }) => {
  return (
    <>
      <Modal className="modal" isOpen={!!nft} onRequestClose={closeModal}>
        <h2>Name: {nft?.name}</h2>
        <img src={nft?.image_url} alt={nft?.name} />
        <p>Description: {nft?.description}</p>
        <p>Owner: {nft?.creator?.address}</p>
        <p>Contract address: {nft?.asset_contract?.address}</p>
        <p>No. of sales: {nft?.num_sales}</p>
        <Button variant="contained" color="primary" href={nft?.permalink} target="_blank" rel="noopener noreferrer">Purchase</Button>
        &nbsp;&nbsp;
        <Button data-testid='button' variant="contained" onClick={closeModal}>Close</Button>
      </Modal>
    </>
  )
}

export default ModalComponent