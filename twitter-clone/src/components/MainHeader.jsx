import Header from './Header';

const MainHeather = () => {
  return (
    <Header>
      <div className="flex flex-1 items-center justify-center hover:bg-neutral-200">
        <p className="border-b-4 border-b-sky-600 p-3">For you</p>
      </div>
      <div className="flex h-full flex-1 items-center justify-center text-neutral-500 hover:border-neutral-200 hover:bg-neutral-200">
        <p className="p-3">Following</p>
      </div>
    </Header>
  );
};

export default MainHeather;
