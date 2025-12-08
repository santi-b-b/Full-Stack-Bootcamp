import UserProfile from '@/components/UserProfile';

export default async function UserPage({ params }) {
  const { id } = await params; // 🔥 Correcto en Next 15
  return <UserProfile id={id} tab={'likes'} />;
}
