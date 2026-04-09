import Link from 'next/link';
import prisma from '@/lib/db';

export const revalidate = 60;

export const metadata = {
  title: 'Catálogo de Productos | Dr Tech',
  description: 'Explora nuestra amplia selección de celulares, auriculares y componentes electrónicos.',
}

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="container" style={{ padding: '80px 24px' }}>
      <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', lineHeight: 1.1 }}>Catálogo <span className="text-accent">Dr Tech</span></h1>
      <p className="text-secondary" style={{ marginBottom: '40px', fontSize: '1.2rem', maxWidth: '600px' }}>Descubre la mejor tecnología con total seguridad y garantía antifraude en cada compra.</p>
      
      <div className="grid md:grid-cols-3 lg:grid-cols-4" style={{ gap: '30px' }}>
        {products.length > 0 ? (
          products.map(p => (
            <div key={p.id} className="glass-panel animate-in delay-100" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
               <div style={{ width: '100%', height: '220px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {p.imageUrl ? (
                    <img src={p.imageUrl} alt={p.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  ) : (
                    <span className="text-secondary" style={{ fontSize: '0.9rem' }}>Sin imagen</span>
                  )}
               </div>
               <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                 <p className="text-accent" style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>{p.category}</p>
                 <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', lineHeight: 1.3 }}>{p.title}</h3>
                 <p className="text-secondary" style={{ fontSize: '0.95rem', marginBottom: '20px', flex: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{p.description}</p>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                    <span className="text-gradient" style={{ fontSize: '1.6rem', fontWeight: 900 }}>${p.price.toFixed(2)}</span>
                    <Link href={`/products/${p.id}`} className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>Ver Detalle</Link>
                 </div>
               </div>
            </div>
          ))
        ) : (
          <div className="glass-panel" style={{ gridColumn: '1 / -1', padding: '60px 0', textAlign: 'center' }}>
            <p className="text-secondary" style={{ fontSize: '1.1rem' }}>No se encontraron productos. Agrega inventory en el panel de administrador.</p>
          </div>
        )}
      </div>
    </div>
  );
}
