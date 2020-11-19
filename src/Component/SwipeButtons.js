import React from 'react';
import './style.css';
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { IconButton } from '@material-ui/core';

function SwipeButtons() {
    return (
        <div className="swipebuttons">
            <IconButton className="iconbutton">
                <ReplayIcon className="swipebuttons-icons replay"/>
            </IconButton>

            <IconButton className="iconbutton">
                <CloseIcon className="swipebuttons-icons close"/>
            </IconButton>

            <IconButton className="iconbutton">
                <StarRateIcon className="swipebuttons-icons starrate"/>
            </IconButton>

            <IconButton className="iconbutton">
                <FavoriteIcon className="swipebuttons-icons favorite"/>
            </IconButton>

            <IconButton className="iconbutton">
                <FlashOnIcon className="swipebuttons-icons flash"/>
            </IconButton>
            
        </div>
    )
}

export default SwipeButtons
