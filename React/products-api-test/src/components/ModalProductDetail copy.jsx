import React from "react";

const ModalProductDetail = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <img
          src={product.thumbnail || product.image}
          alt={product.title}
          className="w-full h-64 object-contain mb-4"
        />
        
        <p className="text-gray-700 mb-2">{product.description}</p>
        <div className="text-lg font-semibold mb-2">{product.price} €</div>
        {/* Puedes agregar más detalles aquí */}
      </div>
    </div>
  );
};

export default ModalProductDetail;