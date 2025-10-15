import React from "react";

const ProductDisplay = ({
  product,
  showDescription = true,
  showQuantity = false,
  quantity = 1,
  onAdd,
  onRemove,
  onClick,
  children,
  className = "",
}) => (
  <div
    className={`flex flex-col ${onClick ? "cursor-pointer hover:shadow-xl transition-shadow duration-300" : ""} ${className}`}
    onClick={onClick}
  >
    <img
      src={product.thumbnail || product.image}
      alt={product.title}
      className="object-contain w-full h-64 mb-4"
    />
    <div className="flex-1 flex flex-col justify-between">
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <span className="text-gray-900 font-bold mb-2">{product.price} €</span>
      {showDescription && (
        <p className="text-gray-500 text-sm line-clamp-3">{product.description}</p>
      )}
      {showQuantity && (
        <div className="flex items-center gap-2 mt-2">
          <button onClick={onRemove} className="px-2">-</button>
          <span>{quantity}</span>
          <button onClick={onAdd} className="px-2">+</button>
        </div>
      )}
      {children}
    </div>
  </div>
);

export default ProductDisplay;