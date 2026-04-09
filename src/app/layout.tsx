import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Dr Tech - Premium Technology Store",
  description: "Compra celulares, componentes electrónicos y audífonos con envíos a Costa Rica e internacionalmente de forma totalmente segura.",
  keywords: ["tecnología", "celulares", "electrónica", "Costa Rica", "audífonos", "compras seguras", "antifraude"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Providers>
          <Navbar />
          <main style={{ flex: 1 }}>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
