import { notFound } from 'next/navigation';
import prisma from '@/lib/db';
import AddToCartButton from '@/components/AddToCartButton';

export const revalidate = 60;

// Dynamic SEO metadata function
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const p = await params;
  const product = await prisma.product.findUnique({ where: { id: p.id } });
  if (!product) return { title: 'Producto No Encontrado' };
  
  return {
    title: `${product.title} | Dr Tech Costa Rica`,
    description: product.description,
    keywords: [product.category, 'comprar', 'Costa Rica', 'tecnología', product.title.split(' ')[0]],
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const p = await params;
  const product = await prisma.product.findUnique({
    where: { id: p.id }
  });

  if (!product) notFound();

  return (
    <div className="container" style={{ padding: '80px 24px' }}>
      <div className="glass-panel animate-in delay-100" style={{ padding: '50px', display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
         <div style={{ flex: '1 1 400px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px' }}>
           {product.imageUrl ? (
              <img src={product.imageUrl} alt={product.title} style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }} />
           ) : (
              <span className="text-secondary">Sin imagen disponible</span>
           )}
         </div>
         <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column' }}>
            <p className="text-accent" style={{ fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>{product.category}</p>
            <h1 style={{ fontSize: '3rem', marginBottom: '20px', lineHeight: 1.1 }}>{product.title}</h1>
            <p className="text-secondary" style={{ fontSize: '1.2rem', marginBottom: '30px', lineHeight: 1.6 }}>{product.description}</p>
            
            <div style={{ padding: '24px', background: 'rgba(0, 240, 255, 0.05)', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.1)', marginBottom: '30px' }}>
               <p style={{ fontSize: '0.9rem', marginBottom: '5px' }}>Precio Especial</p>
               <p className="text-gradient" style={{ fontSize: '3rem', fontWeight: 900 }}>${product.price.toFixed(2)}</p>
               <p className="text-secondary" style={{ fontSize: '0.9rem', marginTop: '5px' }}>Stock disponible: {product.stockQuantity > 0 ? <span className="text-accent" style={{ fontWeight: 800 }}>{product.stockQuantity} unidades</span> : <span style={{ color: 'red' }}>Agotado</span>}</p>
            </div>

            {product.stockQuantity > 0 ? (
               <AddToCartButton product={product} />
            ) : (
               <button className="btn-outline" disabled style={{ opacity: 0.5, cursor: 'not-allowed', width: '100%', padding: '16px' }}>Agotado Temporalmente</button>
            )}
            
            <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid var(--surface-border)' }}>
               <h4 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Garantía Dr Tech</h4>
               <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)' }}>
                 <li style={{ marginBottom: '10px' }}>✓ Compra 100% segura con encriptación militar.</li>
                 <li style={{ marginBottom: '10px' }}>✓ Protección Antifraude 3D Secure.</li>
                 <li>✓ Envíos express a todo el territorio nacional e internacional.</li>
               </ul>
            </div>
         </div>
      </div>
    </div>
  );
}
