const Header = () => {
  return (
    <header className="text-md sticky top-0 z-50 flex items-center justify-end border-x border-b border-gray-100 border-b-neutral-100 bg-white/80 font-bold backdrop-blur-md">
      <div className="flex flex-1 items-center justify-center hover:bg-neutral-200">
        <p className="border-b-4 border-b-sky-600 p-3">For you</p>
      </div>
      <div className="flex h-full flex-1 items-center justify-center text-neutral-500 hover:border-neutral-200 hover:bg-neutral-200">
        <p className="p-3">Following</p>
      </div>
    </header>
  );
};

export default Header;
