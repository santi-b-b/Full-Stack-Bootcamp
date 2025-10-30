const ProductCard = ({ data, onClick }) => {

  return (
    <div
          className="bg-white overflow-hidden flex flex-col cursor-pointer  hover:text-black"
          onClick={() => onClick(data)}
    >
      <div className=" p-1 mb-4">
        <div className="bg-gray-100 w-full mb-4 pb-1 hover:bg-gray-200">

          {/* IMAGE */}
          <img
            src={data.images[0]}
            alt={data.imagedescription}
            className="w-full aspect-[9/12] object-contain"
          />
      </div>

        {/* TITLE & PRICE */}
        <div className="grid grid-cols-[auto_auto] gap-1 mb-3">
          <p className="text-xs text-left uppercase">
            {data.title}
          </p>
          <p className="text-xs text-right uppercase">
            ${data.price}
          </p>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
