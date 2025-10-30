import NewTweetForm from "@/components/NewTweetForm";
import TweetGrid from "@/components/TweetGrid";

export default async function Home() {
  const url = "https://dummyjson.com/posts";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const data = await response.json();
  const tweets = data.posts;

  return (
    <div className="min-h-screen font-sans">
      <NewTweetForm></NewTweetForm>
      <TweetGrid tweets={tweets}/>
    </div>
  );
}



