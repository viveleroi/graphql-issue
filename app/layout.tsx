import { type NextPage } from 'next'
import { type PropsWithChildren } from 'react'
import './styles/global.css'

const RootLayout: NextPage = ({ children }: PropsWithChildren) => (
  <html lang='en'>
    {children}
  </html>
)

export default RootLayout
