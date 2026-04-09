import Link from "next/link";
import prisma from "@/lib/db";

export const revalidate = 60;

export default async function Home() {
  const featuredProducts = await prisma.product.findMany({
    take: 3,
    orderBy: { createdAt: 'desc' }
  });

  return (
    <>
      <section style={{ position: 'relative', overflow: 'hidden', padding: '140px 0 100px' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <h1 className="animate-in delay-100" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '24px', lineHeight: 1.1 }}>
            Bienvenido a <span className="text-gradient">Dr Tech</span><br/>
            El Futuro de la <span className="text-accent">Tecnología</span>
          </h1>
          <p className="animate-in delay-200 text-secondary" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', maxWidth: '650px', margin: '0 auto 40px' }}>
            Descubre los mejores celulares, audífonos y componentes electrónicos. Compras 100% seguras con protección antifraude nivel bancario para Costa Rica y el mundo.
          </p>
          <div className="animate-in delay-300" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/products" className="btn-primary">Ver Catálogo</Link>
          </div>
        </div>
        
        <div style={{ position: 'absolute', top: '10%', left: '15%', width: '400px', height: '400px', background: 'rgba(0, 240, 255, 0.1)', filter: 'blur(100px)', borderRadius: '50%', zIndex: 1 }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '15%', width: '500px', height: '500px', background: 'rgba(0, 94, 255, 0.1)', filter: 'blur(120px)', borderRadius: '50%', zIndex: 1 }} />
      </section>

      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Novedades <span className="text-accent">Recientes</span></h2>
            <Link href="/products" className="text-accent" style={{ fontWeight: 600, borderBottom: '1px solid var(--accent-color)', paddingBottom: '2px' }}>Ver todo el catálogo →</Link>
          </div>
          
          <div className="grid md:grid-cols-3">
            {featuredProducts.length > 0 ? (
              featuredProducts.map((p) => (
                <div key={p.id} className="glass-panel animate-in delay-200" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ width: '100%', height: '240px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                    {p.imageUrl ? (
                      <img src={p.imageUrl} alt={p.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    ) : (
                      <span className="text-secondary" style={{ fontSize: '0.9rem' }}>Vista previa no disponible</span>
                    )}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', lineHeight: 1.3 }}>{p.title}</h3>
                    <p className="text-secondary" style={{ fontSize: '0.9rem', marginBottom: '16px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{p.description || "N/A"}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: 800 }}>${p.price.toFixed(2)}</span>
                      <Link href={`/products/${p.id}`} className="btn-outline" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>Detalles</Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-secondary" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 0', background: 'rgba(255,255,255,0.01)', borderRadius: '12px' }}>No hay productos destacados aún. Usa el panel de administración (/admin) para agregarlos.</p>
            )}
          </div>
        </div>
      </section>
      
      <section style={{ padding: '80px 0', borderTop: '1px solid var(--surface-border)' }}>
         <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Compras con Confianza Total</h2>
            <div className="grid md:grid-cols-3" style={{ gap: '40px', marginTop: '50px' }}>
              <div className="glass-panel animate-in delay-100" style={{ padding: '30px', textAlign: 'left' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🔒</div>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '10px', fontWeight: 800 }}>Seguridad Antifraude</h4>
                <p className="text-secondary" style={{ fontSize: '1rem', lineHeight: 1.5 }}>Implementamos los protocolos 3D Secure más estrictos acordes a las normativas de Costa Rica para mantener su dinero seguro.</p>
              </div>
              <div className="glass-panel animate-in delay-200" style={{ padding: '30px', textAlign: 'left' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>💳</div>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '10px', fontWeight: 800 }}>Transacciones Encriptadas</h4>
                <p className="text-secondary" style={{ fontSize: '1rem', lineHeight: 1.5 }}>Tu información financiera nunca se guarda en nuestros servidores. Todo viaja mediante túneles AES-256 de forma privada.</p>
              </div>
              <div className="glass-panel animate-in delay-300" style={{ padding: '30px', textAlign: 'left' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📦</div>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '10px', fontWeight: 800 }}>Logística Confiable</h4>
                <p className="text-secondary" style={{ fontSize: '1rem', lineHeight: 1.5 }}>Aseguramos la integridad de los celulares recomendados, con sistema de tracking inteligente a lo largo del trayecto.</p>
              </div>
            </div>
         </div>
      </section>
    </>
  );
}
