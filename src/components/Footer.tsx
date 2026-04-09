export default function Footer() {
  return (
    <footer style={{ marginTop: 'auto', borderTop: '1px solid var(--surface-border)', padding: '60px 0 40px', background: 'rgba(5, 5, 17, 0.95)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px' }}>
        <div>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', fontFamily: 'var(--font-heading)', fontWeight: 900 }}>DR <span className="text-accent">TECH</span></h3>
          <p className="text-secondary" style={{ maxWidth: '350px', lineHeight: 1.6 }}>Tu destino de confianza para celulares, electrónica y más. Operando bajo estrictas normas de seguridad para Costa Rica y el mundo.</p>
        </div>
        <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"></path></svg>
            </a>
          </div>
          <p className="text-secondary">© {new Date().getFullYear()} Dr Tech. Todos los derechos reservados.</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'flex-end', marginTop: '15px' }}>
            <span className="text-accent" style={{ fontSize: '0.85rem', fontWeight: 600, padding: '4px 12px', background: 'rgba(0,240,255,0.1)', borderRadius: '20px' }}>✓ Pagos encriptados</span>
            <span className="text-accent" style={{ fontSize: '0.85rem', fontWeight: 600, padding: '4px 12px', background: 'rgba(0,240,255,0.1)', borderRadius: '20px' }}>✓ Protección 3D Secure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
