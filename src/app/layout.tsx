import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/style/style-components/registry'
import GlobalStyle from './style/global'
import { Header,Main,Side,Footer } from './components/layout'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Header />
          <Side />
          <Main>
            {children}
          </Main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
