import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ReactElement } from 'react'
import Layout from '../components/layout'
// import styles from '../styles/Home.module.scss'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <div >
      <Head>
        <meta charSet="utf-8" />
        <title>Advertiser Directory - Commission Factory</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Browse the Commission Factory directory of Advertisers currently running an affiliate program and join to start promoting." />
      </Head>
      <section className="pt-0 push-top">
        <div id="container" className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <div className="filter bg--white u--radius u--border mb-4">
                <form id="form">
                  <div className="filter-search">
                    <input id="search" name="search" type="text" placeholder="Search keywords..." />
                    <input type="submit" className="icon-submit" value="" />
                  </div>
                  <div className="filter-content">
                    <p>Filter <a id="clear" className="small float-right" href="#">Clear</a></p>
                    <select id="category" name="category" className="styled">
                      <option value="" selected>Category</option>
                    </select>
                    <select id="country" name="country" className="styled">
                      <option value="" selected>Country</option>
                    </select>
                    <select id="sort" name="sort" className="styled">
                      <option value="" selected>Sort</option>
                      <option value="date-new">Launch Date: New to Old</option>
                      <option value="date-old">Launch Date: Old to New</option>
                      <option value="name-asc">Campaign Name: A to Z</option>
                      <option value="name-desc">Campaign Name: Z to A</option>
                      <option value="rate-high">Commission: High to Low</option>
                      <option value="rate-low">Commission: Low to High</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-sm-12 col-lg-9">
              <div className="table mb-4">
                <div className="table-row title">
                  <h4 id="count">0 Affiliate Programs</h4>
                </div>
                <div id="table">
                  <div className="table-row">
                    <div className="table-col">
                      <p>There are no affiliate programs that match your search criteria.</p>
                    </div>
                  </div>

                  <div className="table-row">
                    <div className="table-col logo">
                      {/* <img src="img/avatar-default.png" alt="Campaign Name"> */}
                    </div>
                    <div className="table-col">
                      <p className="bold"><a href="entry.htm">Campaign Name</a></p>
                      <p>Summary</p>
                    </div>
                    <div className="table-col w-40">
                      <p className="small">Category</p>
                    </div>
                  </div>

                  <div className="table-row">
                    <div className="table-col logo">
                      {/* <img src="img/avatar-default.png" alt="Campaign Name"> */}
                    </div>
                    <div className="table-col">
                      <p className="bold"><a href="entry.htm">Campaign Name</a></p>
                      <p>Summary</p>
                    </div>
                    <div className="table-col w-40">
                      <p className="small">Category</p>
                    </div>
                  </div>

                  <div className="table-row">
                    <div className="table-col logo">
                      {/* <img src="img/avatar-default.png" alt="Campaign Name"> */}
                    </div>
                    <div className="table-col">
                      <p className="bold"><a href="entry.htm">Campaign Name</a></p>
                      <p>Summary</p>
                    </div>
                    <div className="table-col w-40">
                      <p className="small">Category</p>
                    </div>
                  </div>
                </div>
              </div>
              <ul id="pagination" className="pagination">
                <li className="active"><a href="#">1</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="color-block--gradient">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-7">
              <h3>Join the #1 Performance Marketing Network in Asia Pacific.</h3>
            </div>
            <div className="col-md-5 text-md-right">
              <a className="button button--light large" href="#" >Become an Affiliate</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home
