import React from 'react';
import '../../globals.css'; // Certifique-se de que o CSS global do Tailwind está importado aqui

export const metadata = {
  title: 'Blumenau Colchões & Estofados',
  description: 'Saúde do sono e design sob medida bem no coração de Blumenau.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  );
}