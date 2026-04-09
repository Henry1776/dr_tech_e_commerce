"use client";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
       setSent(false);
       // Clear form logic
       (e.target as HTMLFormElement).reset();
    }, 4000);
  };

  return (
    <div className="container" style={{ padding: '80px 24px', maxWidth: '800px' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
         <h1 className="animate-in delay-100" style={{ fontSize: '3.5rem', marginBottom: '20px' }}>A un <span className="text-accent">clic</span> de distancia</h1>
         <p className="text-secondary animate-in delay-200" style={{ fontSize: '1.2rem' }}>Ponte en contacto con nuestro equipo de soporte para dudas sobre tu orden o nuestra tecnología.</p>
      </div>

      <div className="glass-panel animate-in delay-300" style={{ padding: '50px' }}>
         {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
               <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✅</div>
               <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Mensaje Entregado</h2>
               <p className="text-secondary">Hemos recibido tu consulta y nuestro equipo se contactará pronto al correo proporcionado.</p>
            </div>
         ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                     <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Nombre Completo</label>
                     <input type="text" placeholder="Ej. Juan Pérez" required style={{ width: '100%', padding: '16px', borderRadius: '8px', border: '1px solid var(--surface-border)', background: 'rgba(255,255,255,0.02)', color: '#fff', outline: 'none' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                     <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Correo Electrónico</label>
                     <input type="email" placeholder="ejemplo@correo.com" required style={{ width: '100%', padding: '16px', borderRadius: '8px', border: '1px solid var(--surface-border)', background: 'rgba(255,255,255,0.02)', color: '#fff', outline: 'none' }} />
                  </div>
               </div>

               <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Categoría de la Consulta</label>
                  <select required style={{ padding: '16px', borderRadius: '8px', border: '1px solid var(--surface-border)', background: '#050511', color: '#fff', outline: 'none' }}>
                     <option value="">Selecciona un Motivo...</option>
                     <option value="Soporte Técnico">Soporte Técnico</option>
                     <option value="Precios y Catálogo">Precios y Catálogo</option>
                     <option value="Seguimiento de Orden">Seguimiento de Orden / Garantía</option>
                     <option value="Negocios B2B">Compras para Empresa (B2B)</option>
                  </select>
               </div>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Mensaje</label>
                  <textarea placeholder="¿En qué te podemos ayudar?" required style={{ width: '100%', padding: '16px', borderRadius: '8px', border: '1px solid var(--surface-border)', background: 'rgba(255,255,255,0.02)', color: '#fff', outline: 'none', minHeight: '150px' }} />
               </div>

               <button type="submit" className="btn-primary" style={{ padding: '18px', fontSize: '1.1rem', marginTop: '10px' }}>
                 Enviar Mensaje Seguro
               </button>
            </form>
         )}
      </div>

    </div>
  );
}
