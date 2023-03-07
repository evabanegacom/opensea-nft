import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios');

describe('App', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: {
        assets: [
          {
            id: 1,
            name: 'NFT 1',
            image_url: 'https://example.com/nft1.png',
            description: 'Description of NFT 1',
            owner: {
              address: '0x56f4d32e3523C56B0eF5021188aEF35b1317c4B4'
            },
            permalink: 'https://example.com/nft1'
          },
          {
            id: 2,
            name: 'NFT 2',
            image_url: 'https://example.com/nft2.png',
            description: 'Description of NFT 2',
            owner: {
              address: '0x56f4d32e3523C56B0eF5021188aEF35b1317c4B4'
            },
            permalink: 'https://example.com/nft2'
          }
        ]
      }
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders a list of NFT cards', async () => {
    render(<App />);

    const nftCards = await screen.findAllByRole('button', { name: /nft card/i });
    expect(nftCards).toHaveLength(2);
  });

  it('opens a modal when a NFT card is clicked', async () => {
    render(<App />);

    const nftCard = await screen.findByRole('button', { name: /nft card 1/i });
    fireEvent.click(nftCard);

    const modalTitle = await screen.findByRole('heading', { name: /nft 1/i });
    expect(modalTitle).toBeInTheDocument();
  });

  it('closes the modal when the "Close" button is clicked', async () => {
    render(<App />);

    const nftCard = await screen.findByRole('button', { name: /nft card 1/i });
    fireEvent.click(nftCard);

    const closeModalButton = await screen.findByRole('button', { name: /close/i });
    fireEvent.click(closeModalButton);

    const modalTitle = screen.queryByRole('heading', { name: /nft 1/i });
    expect(modalTitle).not.toBeInTheDocument();
  });

  it('displays the NFT details in the modal', async () => {
    render(<App />);

    const nftCard = await screen.findByRole('button', { name: /nft card 1/i });
    fireEvent.click(nftCard);

    const modalTitle = await screen.findByRole('heading', { name: /nft 1/i });
    const modalImage = screen.getByAltText('NFT 1');
    const modalDescription = screen.getByText('Description of NFT 1');
    const modalOwner = screen.getByText('Owner: 0x56f4d32e3523C56B0eF5021188aEF35b1317c4B4');
    const purchaseButton = screen.getByRole('link', { name: /purchase/i });

    expect(modalTitle).toBeInTheDocument();
    expect(modalImage).toBeInTheDocument();
    expect(modalDescription).toBeInTheDocument();
    expect(modalOwner).toBeInTheDocument();
    expect(purchaseButton).toBeInTheDocument();
  });
});