"use client";
import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [products, setProducts] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Celulares");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("10");
  const [imageUrl, setImageUrl] = useState("");

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    if(Array.isArray(data)) setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
         title,
         description,
         category,
         price: parseFloat(price),
         stockQuantity: parseInt(stock),
         imageUrl
      })
    });
    setTitle(""); setDescription(""); setPrice(""); setStock("10"); setImageUrl("");
    fetchProducts();
  };

  const handleDelete = async (id: string) => {
    if(!confirm("¿Seguro que quieres eliminar este producto?")) return;
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    fetchProducts();
  };

  return (
    <div className="container" style={{ padding: '80px 24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
         <div>
            <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Panel del <span className="text-accent">Administrador</span></h1>
            <p className="text-secondary">Gestiona el inventario de la tienda en tiempo real.</p>
         </div>
      </div>
      
      <div className="grid md:grid-cols-3" style={{ gap: '40px' }}>
         <div className="glass-panel animate-in delay-100" style={{ padding: '30px', height: 'fit-content' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', fontWeight: 800 }}>Agregar Producto</h3>
            <form onSubmit={handleAdd} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
               <input type="text" placeholder="Nombre / Título" value={title} onChange={e=>setTitle(e.target.value)} required style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--surface-border)', background: 'rgba(255,255,255,0.05)', color: '#fff', outline: 'none' }} />
               <select value={category} onChange={e=>setCategory(e.target.value)} style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--surface-border)', background: '#050511', color: '#fff', outline: 'none' }}>
                 <option>Celulares</option>
                 <option>Electrónica</option>
                 <option>Audífonos</option>
               </select>
               <textarea placeholder="Descripción del artículo..." value={description} onChange={e=>setDescription(e.target.value)} style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--surface-border)', background: 'rgba(255,255,255,0.05)', color: '#fff', minHeight: '100px', outline: 'none' }} />
               
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                 <input type="number" placeholder="Precio ($)" value={price} onChange={e=>setPrice(e.target.value)} required step="0.01" style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--surface-border)', background: 'rgba(255,255,255,0.05)', color: '#fff', outline: 'none' }} />
                 <input type="number" placeholder="Stock" value={stock} onChange={e=>setStock(e.target.value)} required style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--surface-border)', background: 'rgba(255,255,255,0.05)', color: '#fff', outline: 'none' }} />
               </div>
               
               <input type="text" placeholder="URL de Imagen (Opcional)" value={imageUrl} onChange={e=>setImageUrl(e.target.value)} style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--surface-border)', background: 'rgba(255,255,255,0.05)', color: '#fff', outline: 'none' }} />
               
               <button type="submit" className="btn-primary" style={{ marginTop: '10px' }}>Guardar en la Base de Datos</button>
            </form>
         </div>

         <div className="glass-panel animate-in delay-200" style={{ padding: '30px', gridColumn: 'span 2' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', fontWeight: 800 }}>Inventario Actual</h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                    <th style={{ padding: '15px 0', color: 'var(--text-secondary)' }}>Producto</th>
                    <th style={{ padding: '15px 0', color: 'var(--text-secondary)' }}>Categoría</th>
                    <th style={{ padding: '15px 0', color: 'var(--text-secondary)' }}>Precio</th>
                    <th style={{ padding: '15px 0', color: 'var(--text-secondary)' }}>Inventario</th>
                    <th style={{ padding: '15px 0', color: 'var(--text-secondary)', textAlign: 'right' }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(p => (
                    <tr key={p.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '15px 0', fontWeight: 600 }}>{p.title}</td>
                      <td style={{ padding: '15px 0' }}><span style={{ fontSize: '0.8rem', background: 'rgba(0, 240, 255, 0.1)', color: 'var(--accent-color)', padding: '6px 10px', borderRadius: '12px' }}>{p.category}</span></td>
                      <td style={{ padding: '15px 0', fontWeight: 800 }}>${p.price.toFixed(2)}</td>
                      <td style={{ padding: '15px 0' }}>{p.stockQuantity} uds.</td>
                      <td style={{ padding: '15px 0', textAlign: 'right' }}>
                        <button onClick={() => handleDelete(p.id)} style={{ background: 'rgba(255, 0, 0, 0.1)', border: 'none', color: '#ff4d4d', cursor: 'pointer', fontWeight: 600, padding: '8px 16px', borderRadius: '6px', transition: 'all 0.2s' }}>Eliminar</button>
                      </td>
                    </tr>
                  ))}
                  {products.length === 0 && (
                    <tr>
                      <td colSpan={5} style={{ padding: '40px 0', textAlign: 'center', color: 'var(--text-secondary)' }}>La base de datos está vacía. Añade nuevos productos.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
         </div>
      </div>
    </div>
  );
}
