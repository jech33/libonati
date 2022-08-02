import { Button } from '@mui/material';
import React from 'react';

const Landing = () => (
  <div
    id="top"
    className="border-2 border-solid border-libonatiGold
    container
    px-[1rem]
    flex flex-col"
  >
    <div className="border-2 border-solid border-libonatiGold
    flex justify-between items-center"
    >
      <p>Spotify</p>
      <a href="#top">
        <Button variant="outlined">
          Escuchar
        </Button>

      </a>
    </div>

  </div>
);

export default Landing;
