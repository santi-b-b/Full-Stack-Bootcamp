const Header = ({ children }) => {
  return (
    <header className="text-md sticky top-0 z-50 flex h-12 items-center border-x border-b border-gray-100 border-b-neutral-100 bg-white/80 font-bold backdrop-blur-md">
      {children}
    </header>
  );
};

export default Header;
