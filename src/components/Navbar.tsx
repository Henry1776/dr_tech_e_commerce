"use client";
import Link from 'next/link';
import { useCart } from '@/lib/CartContext';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { itemCount } = useCart();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <nav className="glass-panel" style={{ position: 'sticky', top: 0, zIndex: 50, borderRadius: 0, borderTop: 'none', borderLeft: 'none', borderRight: 'none', padding: '20px 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.8rem', fontWeight: 900, fontFamily: 'var(--font-heading)', letterSpacing: '1px' }}>
          <img src="/logo.svg" alt="Dr Tech Logo" width={48} height={48} style={{ objectFit: 'contain' }} />
          <span>DR <span className="text-accent">TECH</span></span>
        </Link>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link href="/nosotros" style={{ fontWeight: 600, fontSize: '1.1rem' }}>Nosotros</Link>
          <Link href="/products" style={{ fontWeight: 600, fontSize: '1.1rem' }}>Catálogo</Link>
          <Link href="/contacto" style={{ fontWeight: 600, fontSize: '1.1rem' }}>Contacto</Link>
          <Link href="/cart" style={{ fontWeight: 600, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
             Carrito 
             {mounted && itemCount > 0 && <span style={{ background: 'var(--accent-color)', color: '#000', padding: '2px 8px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 800 }}>{itemCount}</span>}
          </Link>
          <Link href="/checkout" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>Checkout Seguro</Link>
        </div>
      </div>
    </nav>
  );
}
