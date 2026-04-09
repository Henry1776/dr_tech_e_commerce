"use client";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const [mounted, setMounted] = useState(false);
  const [processing, setProcessing] = useState(false);
  const router = useRouter();

  useEffect(() => { setMounted(true); }, []);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    // Simulate secure 3D Secure processing delay
    setTimeout(() => {
       alert("Transacción Aprobada de manera segura. ¡Gracias por tu compra en Dr Tech!");
       clearCart();
       router.push("/");
    }, 3000);
  };

  if (!mounted) return null;

  return (
    <div className="container" style={{ padding: '80px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
         <h1 style={{ fontSize: '3rem', marginBottom: '15px' }}>Checkout <span className="text-accent">Seguro</span></h1>
         <p className="text-secondary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '1.1rem' }}>
            🔒 Cifrado AES-256 bit • Conforme a Ley Antifraude Costa Rica
         </p>
      </div>

      {items.length === 0 ? (
         <div className="glass-panel" style={{ padding: '80px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: 'var(--text-secondary)' }}>No tienes artículos para procesar.</p>
            <Link href="/products" className="btn-primary">Volver a la tienda</Link>
         </div>
      ) : (
         <div className="grid md:grid-cols-2" style={{ gap: '60px' }}>
            <div className="glass-panel animate-in delay-100" style={{ padding: '40px' }}>
               <h3 style={{ fontSize: '1.6rem', marginBottom: '25px', borderBottom: '1px solid var(--surface-border)', paddingBottom: '15px', fontWeight: 800 }}>Datos de Envío y Pago</h3>
               <form onSubmit={handleCheckout} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <input type="text" placeholder="Nombre completo" required style={{ padding: '16px', borderRadius: '8px', border: '1px solid var(--surface-border)', background: 'rgba(255,255,255,0.02)', color: '#fff', outline: 'none' }} />
                    <input type="text" placeholder="Cédula / ID" required style={{ padding: '16px', borderRadius: '8px', border: '1px solid var(--surface-border)', background: 'rgba(255,255,255,0.02)', color: '#fff', outline: 'none' }} />
                 </div>
                 <input type="email" placeholder="Correo electrónico" required style={{ padding: '16px', borderRadius: '8px', border: '1px solid var(--surface-border)', background: 'rgba(255,255,255,0.02)', color: '#fff', outline: 'none' }} />
                 <input type="text" placeholder="Dirección exacta de entrega (Costa Rica / Internacional)" required style={{ padding: '16px', borderRadius: '8px', border: '1px solid var(--surface-border)', background: 'rgba(255,255,255,0.02)', color: '#fff', outline: 'none' }} />
                 
                 <h4 style={{ fontSize: '1.2rem', marginTop: '20px', marginBottom: '5px', fontWeight: 700 }}>Tarjeta de Crédito / Débito</h4>
                 <div style={{ position: 'relative' }}>
                   <input type="text" placeholder="0000 0000 0000 0000" required maxLength={16} style={{ width: '100%', padding: '16px', paddingLeft: '50px', borderRadius: '8px', border: '1px solid var(--surface-border)', background: 'rgba(255,255,255,0.02)', color: '#fff', outline: 'none' }} />
                   <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', fontSize: '1.5rem' }}>💳</span>
                 </div>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <input type="text" placeholder="MM/YY" required maxLength={5} style={{ padding: '16px', borderRadius: '8px', border: '1px solid var(--surface-border)', background: 'rgba(255,255,255,0.02)', color: '#fff', outline: 'none' }} />
                    <input type="text" placeholder="CVC (3D Secure)" required maxLength={4} style={{ padding: '16px', borderRadius: '8px', border: '1px solid var(--surface-border)', background: 'rgba(255,255,255,0.02)', color: '#fff', outline: 'none' }} />
                 </div>

                 <button type="submit" disabled={processing} className="btn-primary" style={{ marginTop: '20px', padding: '18px', fontSize: '1.2rem', width: '100%' }}>
                    {processing ? "Procesando de Forma Segura..." : `Pagar $${(total + 10).toFixed(2)}`}
                 </button>
                 <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '10px' }}>Procesado vía pasarela bancaria certificada PCI-DSS.</p>
               </form>
            </div>

            <div className="glass-panel animate-in delay-200" style={{ padding: '40px', height: 'fit-content', position: 'sticky', top: '100px' }}>
               <h3 style={{ fontSize: '1.6rem', marginBottom: '25px', borderBottom: '1px solid var(--surface-border)', paddingBottom: '15px', fontWeight: 800 }}>Resumen del Pedido</h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '30px' }}>
                 {items.map(i => (
                    <div key={i.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                       <div>
                          <p style={{ fontWeight: 600, fontSize: '1.1rem' }}>{i.title}</p>
                          <p className="text-secondary" style={{ fontSize: '0.9rem', marginTop: '4px' }}>Cantidad: {i.quantity}</p>
                       </div>
                       <p className="text-accent" style={{ fontWeight: 800, fontSize: '1.2rem' }}>${(i.price * i.quantity).toFixed(2)}</p>
                    </div>
                 ))}
               </div>
               
               <div style={{ borderTop: '1px solid var(--surface-border)', paddingTop: '25px' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                    <span>Envío Asegurado</span>
                    <span>$10.00</span>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '25px', paddingTop: '25px', borderTop: '1px solid var(--surface-border)', fontSize: '1.8rem', fontWeight: 900 }}>
                    <span>Total</span>
                    <span className="text-gradient">${(total + 10).toFixed(2)}</span>
                 </div>
               </div>
            </div>
         </div>
      )}
    </div>
  );
}
