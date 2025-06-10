import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Sonora',
  description: 'Um site com Next.js e três páginas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header style={{ padding: '1rem', backgroundColor: '#F4D1D1' }}>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/">Home</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/servicos">Serviços</Link>
          </nav>
        </header>

        <main style={{ padding: '2rem' }}>
          {children}
        </main>

        <footer style={{ padding: '1rem', backgroundColor: '#F4D1D1', textAlign: 'center' }}>
          © 2025 - Sonora
        </footer>
      </body>
    </html>
  )
}
