import Header from '../../components/Header/Header'
import Separator from '../../components/Separator/Separator'
import Tweet from '../../components/Tweet/Tweet'
import { FormEvent, KeyboardEvent, useState } from "react"
import './Timeline.css'
export default function Timeline(){
  const ttObj = {
    username: "",
    name: "",
    content: "",
    likes: 0,
    replies: 0,
    retweets: 0,
    img:'https://placekitten.com/200/200'
  }
      const [newTweet, setNewTweet] = useState( ttObj)
      const [tweetData, setTweetData] = useState([
        {
          username: "@HellenSimilipb",
          name: "Hellen Simili",
          content: "Tweet de exemplo 1",
          likes: 15,
          replies: 5,
          retweets: 3,
          img:'https://avatars.akamai.steamstatic.com/4cb489825d8833b850d10bdf462a495a73c24d90_full.jpg'
        },
        {
          username: "@CarolzinhaSg",
          name: "Caroline Silva",
          content: "Tweet de exemplo 2",
          likes: 20,
          replies: 10,
          retweets: 5,
          img:'https://placekitten.com/200/200'
        },
      ])

      function createNewTweet(event: FormEvent) {
        event.preventDefault()

        setTweetData([newTweet, ...tweetData])
        setNewTweet(ttObj)
      }

      function handleHotkeySubmit(event: KeyboardEvent) {
        if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
          setTweetData([newTweet, ...tweetData])
          setNewTweet(ttObj)
        }
      }

  return (
    <>
    <main className='time-line'>
    <Header title='Home'/>
    <form onSubmit={createNewTweet} className="new-tweet-form">
         <label htmlFor='tweet'>
         <img  src='https://placekitten.com/200/200' alt='user avatar' />
         <textarea
             id="tweet"
             rows={3}
             placeholder="What's happening?"
             value={newTweet.content}
             onKeyDown={handleHotkeySubmit}
             onChange={(event) => {
               setNewTweet({ ...newTweet, content: event.target.value,})
             }}
              ></textarea>

         </label>

           <button  type='submit' className='tweet-button'>Tweet</button>
       </form>

     <Separator/>
     {
tweetData.map((tweet, index) => (
 <Tweet
   key={index}
   content={tweet.content}
   username={tweet.username}
   likes={tweet.likes}
   replies={tweet.replies}
   retweets={tweet.retweets}
   name={tweet.name}
   img={tweet.img}
 />
))
}

     </main>
    </>


        )
}
