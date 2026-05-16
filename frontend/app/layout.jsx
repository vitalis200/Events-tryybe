import './globals.css'

export const metadata = {
  title: 'Events Tryybe - Frontend',
  description: 'A Next.js frontend for Events-tryybe'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
