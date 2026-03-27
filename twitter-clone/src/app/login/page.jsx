import Login from '@/components/Login';

export default function LoginPage() {
  let register = false;
  let login = false;

  return (
    <div className="flex">
      <div className="p-20">
        <img src={'/assets/X logo big.png'} className="max-w-xl" />
      </div>
      <div className="flex max-w-xl flex-col gap-10 pt-16">
        <p className="mb-8 text-7xl font-bold">What's happening now</p>
        <p className="text-4xl font-bold">Join today</p>
        <Login />
      </div>
    </div>
  );
}
