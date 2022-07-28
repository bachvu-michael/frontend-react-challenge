import '../styles/bootstrap.min.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode, useState, useEffect } from 'react'
import { NextPage } from 'next'
import useWindowDimensions from '../services/useWindowDimensions'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // this function for get layout at the page level
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
