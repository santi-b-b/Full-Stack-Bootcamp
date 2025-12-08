const RightBar = ({}) => {
  return (
    <div className="flex w-92 flex-col gap-4 px-4 py-2">
      <input
        type="text"
        placeholder="🔍 Search"
        className="h-10 w-full rounded-full border border-neutral-200 p-4"
      />
      <img src={'/assets/Barra derecha.png'} className="w-full bg-black object-cover" />
    </div>
  );
};

export default RightBar;
