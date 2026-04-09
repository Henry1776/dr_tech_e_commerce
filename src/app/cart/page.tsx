"use client";
import { useCart } from "@/lib/CartContext";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, total } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="container" style={{ padding: '80px 24px' }}>
       <h1 style={{ fontSize: '3.5rem', marginBottom: '40px' }}>Tu <span className="text-accent">Carrito</span></h1>
       
       {items.length === 0 ? (
         <div className="glass-panel animate-in delay-100" style={{ padding: '80px 40px', textAlign: 'center' }}>
            <p className="text-secondary" style={{ fontSize: '1.3rem', marginBottom: '30px' }}>Tu carrito está esperando por lo mejor en tecnología.</p>
            <Link href="/products" className="btn-primary">Explorar Catálogo</Link>
         </div>
       ) : (
         <div className="grid md:grid-cols-3" style={{ gap: '40px' }}>
            <div className="animate-in delay-100" style={{ gridColumn: 'span 2' }}>
               {items.map(item => (
                 <div key={item.id} className="glass-panel" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <div style={{ width: '80px', height: '80px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {item.imageUrl ? <img src={item.imageUrl} alt={item.title} style={{ maxWidth: '100%', maxHeight: '100%' }} /> : <span style={{ fontSize: '0.6rem' }}>Sin Img</span>}
                    </div>
                    <div style={{ flex: 1 }}>
                       <Link href={`/products/${item.id}`} style={{ fontSize: '1.2rem', fontWeight: 700, display: 'block', marginBottom: '5px' }}>{item.title}</Link>
                       <p className="text-accent" style={{ fontWeight: 800 }}>${item.price.toFixed(2)}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                       <div style={{ display: 'flex', border: '1px solid var(--surface-border)', borderRadius: '6px', overflow: 'hidden' }}>
                         <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ background: 'rgba(255,255,255,0.02)', color: '#fff', border: 'none', padding: '10px 14px', cursor: 'pointer' }}>-</button>
                         <span style={{ padding: '10px 14px', borderLeft: '1px solid var(--surface-border)', borderRight: '1px solid var(--surface-border)' }}>{item.quantity}</span>
                         <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ background: 'rgba(255,255,255,0.02)', color: '#fff', border: 'none', padding: '10px 14px', cursor: 'pointer' }}>+</button>
                       </div>
                       <button onClick={() => removeFromCart(item.id)} style={{ background: 'transparent', color: '#ff4d4d', border: 'none', cursor: 'pointer', fontSize: '1.2rem', padding: '10px' }}>✕</button>
                    </div>
                 </div>
               ))}
            </div>
            
            <div className="glass-panel animate-in delay-200" style={{ padding: '30px', height: 'fit-content', position: 'sticky', top: '100px' }}>
               <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', borderBottom: '1px solid var(--surface-border)', paddingBottom: '15px' }}>Resumen del Pedido</h3>
               <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: 'var(--text-secondary)' }}>
                 <span>Subtotal</span>
                 <span>${total.toFixed(2)}</span>
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', color: 'var(--text-secondary)' }}>
                 <span>Envío (Costa Rica)</span>
                 <span>Calculado en Checkout</span>
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', borderTop: '1px solid var(--surface-border)', paddingTop: '15px', fontSize: '1.4rem', fontWeight: 900 }}>
                 <span>Total</span>
                 <span className="text-gradient">${total.toFixed(2)}</span>
               </div>
               <Link href="/checkout" className="btn-primary" style={{ display: 'block', textAlign: 'center', width: '100%' }}>Proceder al Checkout Seguro</Link>
               
               <p className="text-secondary" style={{ fontSize: '0.85rem', textAlign: 'center', marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  🔒 Protegido con encriptación militar y antifraude.
               </p>
            </div>
         </div>
       )}
    </div>
  );
}
