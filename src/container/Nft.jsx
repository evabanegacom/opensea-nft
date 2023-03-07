import React from 'react'
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

const Nft = ({nft, openModal}) => {
  return (
    <>
      <Grid key={nft.id} item xs={12} sm={6} md={4} lg={3}>
          <Card className="nft-card" onClick={() => openModal(nft)}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={nft.image_url}
                alt={nft.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {nft.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {nft.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
    </>
  )
}

export default Nft