import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import  Grid  from "@mui/material/Grid";
import  Slider  from "@mui/material/Slider";

function Footer() {
  return (
    <div className="footer">
    <div className="footer__left">

    <img className="footer__albumLogo" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DxrBV0QJyBfQ&psig=AOvVaw12rhAPFD476Z1eWVHqFu22&ust=1679558689741000&source=images&cd=vfe&ved=0CBEQjhxqFwoTCKj85OqJ7_0CFQAAAAAdAAAAABAJ" alt=""/>
    <div className="footer__songInfo">
      <h4>YEAH</h4>
      <p>usher</p>
    </div>

    </div>

    <div className="footer__center">
    <ShuffleIcon className="footer__green"/>
    <SkipPreviousIcon className="footer__icon"/>
    <PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>
    <SkipNextIcon className="footer__icon"/>
    <RepeatIcon className="footer__green"/>

    </div>


     <div className="footer__right">

     <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>

    </div>
    
  )
}

export default Footer