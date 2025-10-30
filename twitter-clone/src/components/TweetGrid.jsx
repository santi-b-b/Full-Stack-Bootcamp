import TweetCard from "./TweetCard"
import Link from "next/link"

const TweetGrid = ({tweets}) => {


  return (
    <div className="flex justify-center">
      <ul className="grid grid-cols-1 md:grid-cols-1 justify-items-center w-full max-w-4xl">
        {tweets.map(tweet => 
            <li key={tweet.id} >
              <Link href={`/tweet/${tweet.id}`} className="block w-full hover:bg-gray-100">
                <TweetCard data={tweet} />
              </Link>
            </li> 
        )}
      </ul>
    </div>
  )
}

export default TweetGrid