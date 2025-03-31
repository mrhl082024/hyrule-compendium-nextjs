import "../styles/globals.css";
import { ContextWindow } from "./ContextWindow.jsx";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContextWindow>
      <body>{children}</body>
    </ContextWindow>
  );
}
