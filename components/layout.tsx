import Navbar from './navbar';
import Footer from './footer';
import { ReactElement, ReactNode } from 'react';

type Props = {
  children?: ReactNode
  title?: string
}

export default function Layout({ children, title = 'This is the default title' }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}