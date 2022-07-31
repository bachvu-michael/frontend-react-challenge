import Footer from './footer';
import { ReactElement, ReactNode } from 'react';
import Navbar from './navbar';

type Props = {
  children?: ReactNode
  title?: string
}

export default function layoutDetail({ children, title = 'This is the default title' }: Props) {
  return (
    <>
      <Navbar isDetailPage/>
      <main>{children}</main>
      <Footer />
    </>
  )
}