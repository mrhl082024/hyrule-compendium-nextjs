import "../styles/globals.css";
import { ContextWindow } from "./ContextWindow.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ContextWindow>
          <Header />
          {children}
          <Footer />
        </ContextWindow>
      </body>
    </html>
  );
}
