import Head from 'next/head'
import { ReactElement } from 'react'
import HeroComponent from '../components/heroComponent'
import Layout from '../components/layout'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <div>
      {/* set meta and title for page here */}
      <Head>
        <meta charSet="utf-8" />
        <title>Advertiser Directory - Commission Factory</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Browse the Commission Factory directory of Advertisers currently running an affiliate program and join to start promoting." />
      </Head>
      <HeroComponent
        title={'Welcome to Commission Factory'}
        description={<>Click to advertisers to see the <a className="link" href='/advertisers'>demo</a>.</>}
      />
    </div>
  )


}

// this function for get layout for page
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home
