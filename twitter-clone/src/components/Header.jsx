
const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-start border-b border-b-neutral-100 bg-white/80 backdrop-blur-md border-x border-gray-100 text-md font-bold">
      <div className="flex flex-1 items-center justify-center hover:bg-neutral-200">
        <p className="border-b-4 border-b-sky-600 p-3">For you</p>
      </div>
      <div className="flex flex-1 h-full items-center justify-center text-neutral-500 hover:bg-neutral-200">
        <p className="p-3">Following</p>
      </div>

    </header>
  );
};

export default Header;