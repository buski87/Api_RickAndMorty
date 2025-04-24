import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata = {
  title: "Rick & Morty App",
  description: "Home page with Characters list",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body className=" font-geist flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Header />

        <main className="flex-1 container mx-auto px-4 py-6">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
