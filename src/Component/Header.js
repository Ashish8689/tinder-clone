import React from 'react';
import './style.css';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';

function Header() {
    return (
        <div className="header-container">

            <IconButton>
                 <PersonIcon className="header-icon"/>
            </IconButton>

               <img src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" 
               className="tinder-icon"
               alt="tinder-icon"/>
        
            <IconButton>
                <ChatBubbleIcon className="header-icon"/>
            </IconButton>

           
        </div>
    )
}

export default Header
