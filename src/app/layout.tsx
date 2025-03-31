import "../styles/globals.css";
import { ContextWindow } from "./ContextWindow.jsx";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ContextWindow>
          <main> {children}</main>
        </ContextWindow>
      </body>
    </html>
  );
}
