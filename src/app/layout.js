import './globals.css'
import { Inter, Roboto, Poppins } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Providers } from './GlobalRedux/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='containers'>
          <Providers>
            <Navbar/>
              {children}
            <Footer/>
          </Providers>
        </div>
      </body>
    </html>
  )
}
