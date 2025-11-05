import TweetCard from "@/components/TweetCard";
import TweetHeader from "@/components/TweetHeader";

export default async function ProductoPage({ params }) {


  const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const data = await response.json();
  console.log(data);
  
  return (
    <div>
      <TweetHeader></TweetHeader>
      <div className=" justify-center items-center flex flex-col w-full">
        <TweetCard data={data} />
      </div>
    </div>
  );
}
