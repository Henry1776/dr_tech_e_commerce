"use client";
import { useState } from "react";
import { useCart } from "@/lib/CartContext";

export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      imageUrl: product.imageUrl,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button 
      onClick={handleAdd} 
      className="btn-primary" 
      style={{ width: '100%', padding: '16px', fontSize: '1.1rem' }}
    >
      {added ? '¡Agregado al Carrito! ✓' : 'Añadir al Carrito'}
    </button>
  );
}
