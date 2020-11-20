import { Avatar, Button } from '@material-ui/core';
import React from 'react'
import './TweetBox.css';

function TweetBox() {
    return (
        <div className="tweetBox">
            <from>
                <div className="tweetBox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/1326212698628087809/2pqiQCNt_400x400.jpg" />
                    <input placeholder="What's happening?"></input>
                </div>
                <input className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text"></input>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </from>
        </div>
    )
}

export default TweetBox;
