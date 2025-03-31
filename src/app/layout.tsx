import "../styles/globals.css";
import { ContextWindow } from "./ContextWindow.jsx";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ContextWindow>
        <body>{children}</body>
      </ContextWindow>
    </html>
  );
}
