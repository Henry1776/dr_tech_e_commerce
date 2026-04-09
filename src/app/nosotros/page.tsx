import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Nosotros - Historia y Ubicación | Dr Tech',
  description: 'Conoce la historia detrás de Dr Tech, tu tienda de tecnología de confianza y encuentra nuestra ubicación exacta mediante Google Maps.',
};

export default function AboutPage() {
  return (
    <div className="container" style={{ padding: '80px 24px' }}>
      
      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
         <h1 className="animate-in delay-100" style={{ fontSize: '3.5rem', marginBottom: '20px' }}>Sobre <span className="text-accent">Dr Tech</span></h1>
         <p className="text-secondary animate-in delay-200" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>Más que una tienda de tecnología, somos apasionados por innovar y acercar al público costarricense los mejores componentes del mundo.</p>
      </div>

      <div className="grid md:grid-cols-2" style={{ gap: '60px', marginBottom: '100px' }}>
         
         {/* History Section */}
         <div className="glass-panel animate-in delay-300" style={{ padding: '40px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', borderBottom: '1px solid var(--surface-border)', paddingBottom: '15px' }}>Nuestra Historia</h2>
            <div className="text-secondary" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
               <p style={{ marginBottom: '15px' }}>Fundada a principios del año 2026, <strong>Dr Tech</strong> nació con una premisa simple: la tecnología más avanzada no debería ser difícil ni insegura de adquirir en Costa Rica.</p>
               <p style={{ marginBottom: '15px' }}>Inicialmente comenzamos ofreciendo accesorios y periféricos a nuestra pequeña red de contactos. La pasión por el servicio al cliente y nuestra rigurosa política de calidad nos permitió expandirnos rápidamente hacia artículos de mayor calibre, especializándonos en celulares, computación y audio de gama alta.</p>
               <p>A día de hoy, hemos impactado a miles de clientes, manteniendo nuestra inamovible filosofía de ofrecer la mejor experiencia, transacciones 100% blindadas y soporte en tiempo récord. Dr Tech sigue visualizando un futuro donde cualquier innovación global esté a un clic de distancia para nuestra región.</p>
            </div>
         </div>

         {/* Values Section */}
         <div className="glass-panel animate-in delay-300" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '5px', borderBottom: '1px solid var(--surface-border)', paddingBottom: '15px' }}>Nuestros Pilares</h2>
            
            <div style={{ display: 'flex', gap: '20px' }}>
               <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>🛡️</div>
               <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '5px' }}>Seguridad Integral</h4>
                  <p className="text-secondary">Cumplimos absolutamente todas las regulaciones de e-commerce e implementamos PCI-DSS y 3D-Secure para cero riesgo de fraude.</p>
               </div>
            </div>
            
            <div style={{ display: 'flex', gap: '20px' }}>
               <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>🚀</div>
               <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '5px' }}>Innovación Rápida</h4>
                  <p className="text-secondary">Mantenemos el catálogo con las últimas vanguardias tecnológicas mundiales de hardware.</p>
               </div>
            </div>
            
            <div style={{ display: 'flex', gap: '20px' }}>
               <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>❤️</div>
               <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '5px' }}>Pasión por el Cliente</h4>
                  <p className="text-secondary">Si tú no estás satisfecho con tu compra o servicio, nosotros tampoco lo estamos.</p>
               </div>
            </div>
         </div>
      </div>

      {/* Map Section */}
      <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px' }}>Oficinas <span className="text-accent">Centrales</span></h2>
      <div className="glass-panel animate-in delay-300" style={{ padding: '20px', borderRadius: '16px', overflow: 'hidden', height: '500px' }}>
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125745.7876878897!2d-84.161726!3d9.935612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e342c50d15c5%3A0xe6746a6a9f11b882!2sSan%20Jos%C3%A9%2C%20Costa%20Rica!5e0!3m2!1sen!2sus!4v1712431713028!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '8px' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
         </iframe>
      </div>

    </div>
  );
}
