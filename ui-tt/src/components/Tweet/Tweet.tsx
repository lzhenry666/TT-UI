import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import { Link } from 'react-router-dom';
import './Tweet.css';

interface TweetProps {
  content: string;
  username: string;
  likes: number;
  replies: number;
  retweets: number;
  name: string;
  img: string;
}

export default function Tweet({ name,content, username, likes, replies, retweets,img }: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src={img} alt="Uchiha Madara" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>{name}</strong>
          <span>{username}</span>
        </div>

        <p>{content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            {replies}
          </button>

          <button type="button">
            <ArrowsClockwise />
            {retweets}
          </button>

          <button type="button">
            <Heart />
            {likes}
          </button>
        </div>
      </div>
    </Link>
  );
}
