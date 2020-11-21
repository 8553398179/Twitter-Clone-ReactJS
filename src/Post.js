import { Avatar } from '@material-ui/core';
import React from 'react'
import './Post.css';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://pbs.twimg.com/profile_images/1326212698628087809/2pqiQCNt_400x400.jpg" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>B3ns44d {" "}<span className="post__headerSpecial">
                            <VerifiedUserIcon className="post__badge" />@b3ns44d</span>
                        </h3>
                    </div>
                </div>
                <div className="post__headerDescription">
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <img src="https://i.pinimg.com/originals/92/fd/31/92fd31b9becf4ecccfcce765db9d6d02.gif" alt=""/>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    
    )
}

export default Post; 
