import Head from 'next/head'
import _ from 'lodash'
import { ReactElement, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Layout from '../components/layout'
// import styles from '../styles/Home.module.scss'
import { NextPageWithLayout } from './_app'
import useSwr from 'swr'
import type Advertiser from '../interfaces/advertiser'
import { OPTIONS_SORT } from '../interfaces/enum'
import { fetcher } from '../services/fetcher'
import HeroComponent from '../components/heroComponent'
import InfoFooterComponent from '../components/infoFooterComponent'

const Advertisers: NextPageWithLayout = () => {
  //call api get data
  const { data, error } = useSwr<Advertiser[]>('/api/advertisers', fetcher)
  const [inputSearch, setInputSearch] = useState('');
  const [selectSort, setSelectSort] = useState('');
  const [page, setPage] = useState(0);
  const [dataFilter, setDataFilter] = useState<Advertiser[] | any>([]);
  const paginationSize = 3;

  useEffect(() => {
    if (error) setDataFilter([])
    setDataFilter(data)
  }, [data])

  useEffect(() => {
    const dataSearch = data?.filter(adv => adv.campaignName.includes(inputSearch))
    setDataFilter(dataSearch)
    setPage(0)
  }, [inputSearch])

  useEffect(() => {
    const dataSort = _.clone(data);
    switch (selectSort) {
      case 'date-new':
        setDataFilter(data)
        break;
      case 'date-old':
        setDataFilter(data)
        break;
      case 'name-asc':
        {
          const dataSearch = dataSort?.sort((a, b) => {
            if (a.campaignName < b.campaignName) { return -1; }
            if (a.campaignName > b.campaignName) { return 1; }
            return 0;
          })

          setDataFilter(_.clone(dataSearch))
        }
        break;
      case 'name-desc':
        {
          const dataSearch = dataSort?.sort((a, b) => {
            if (a.campaignName > b.campaignName) { return -1; }
            if (a.campaignName < b.campaignName) { return 1; }
            return 0;
          })
          setDataFilter(_.clone(dataSearch))
        }
        break;
      case 'rate-high':
        {
          const dataSearch = dataSort?.sort((a, b) => {
            if (a.commissionRate < b.commissionRate) { return -1; }
            if (a.commissionRate > b.commissionRate) { return 1; }
            return 0;
          })
          setDataFilter(_.clone(dataSearch))
        }
        break;
      case 'rate-low':
        {
          const dataSearch = dataSort?.sort((a, b) => {
            if (a.commissionRate > b.commissionRate) { return -1; }
            if (a.commissionRate < b.commissionRate) { return 1; }
            return 0;
          })
          setDataFilter(_.clone(dataSearch))
        }
        break;
      default:
        setDataFilter(_.clone(data))
        break;
    }
    setPage(0)
  }, [selectSort])

  const handleSort = (event: any) => {
    setSelectSort(event.target.value)
  }

  //handle input search
  const handleSeach = (event: any) => {
    setInputSearch(event.target.value)
  }

  //handle click pagination
  const handlePagination = (page: any) => {
    setPage(page)
  }

  //handle clear filter
  const handleClearFilter = () => {
    setInputSearch('')
    setSelectSort('')
  }

  //total page
  const totalPage = (dataFilter && dataFilter.length) ? Math.floor(dataFilter.length / paginationSize) : 0;
  // dynamic page link
  var paginationElement = []
  for (let i = 0; i < totalPage; i++) {
    if (i == page) {
      paginationElement.push(<li className="active" key={`pagination-key-${i}`}>
        <a href="#!" onClick={() => handlePagination(i)}>{i + 1}</a>
      </li>)
    } else {
      paginationElement.push(<li className="" key={`pagination-key-${i}`}><a href="#!" onClick={() => handlePagination(i)}>{i + 1}</a></li>)
    }
  }
  return (
    <div >
      <Head>
        <meta charSet="utf-8" />
        <title>Advertiser Directory - Commission Factory</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Browse the Commission Factory directory of Advertisers currently running an affiliate program and join to start promoting." />
      </Head>
      <HeroComponent
        title={'Advertiser Directory'}
        description={<>Below is a comprehensive list of all Commission Factory Advertisers currently running an affiliate program. If you would like to promote these merchants you can sign up as an affiliate and get started right away.</>}
      />
      <section className="pt-0 push-top">
        <div id="container" className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <div className="filter bg--white u--radius u--border mb-4">
                <form id="form">
                  <div className="filter-search">
                    <input id="search" name="search" type="text" placeholder="Search keywords..." onChange={handleSeach} value={inputSearch} />
                    <input type="submit" className="icon-submit" value="" />
                  </div>
                  <div className="filter-content">
                    <p>Filter <a id="clear" className="small float-right" href="#!" onClick={handleClearFilter}>Clear</a></p>
                    <select id="category" name="category" className="styled" defaultValue="">
                      <option value="" selected>Category</option>
                    </select>
                    <select id="country" name="country" className="styled" defaultValue="">
                      <option value="" selected>Country</option>
                    </select>
                    <select id="sort" name="sort" className="styled" onChange={handleSort} value={selectSort}>
                      <option value="" selected>Sort</option>
                      {
                        OPTIONS_SORT.map((e: any, i: any) => {
                          return <option
                            key={`sort-element-${i}`}
                            value={`${e.value}`}>{e.label}</option>
                        })
                      }
                    </select>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-sm-12 col-lg-9">
              <div className="table mb-4">
                <div className="table-row title">
                  <h4 id="count">{dataFilter && dataFilter.length} Affiliate Programs</h4>
                </div>
                <div id="table">
                  {
                    dataFilter && dataFilter.length ? dataFilter.slice(page * paginationSize, (page * paginationSize) + paginationSize).map((e: Advertiser, i: Number) => {
                      return <div key={`list-advertiser-${i}`} className="table-row">
                        <div className="table-col logo">
                          <img src={e.avatarUrl.toString()} alt={e.campaignName.toString()} />
                        </div>
                        <div className="table-col">
                          <p className="bold"><a href={`/advertisers/${e.id}`}>{e.campaignName}</a></p>
                          <p>{e.summary}</p>
                        </div>
                        <div className="table-col w-40">
                          <p className="small">{e.category}</p>
                        </div>
                      </div>
                    })
                      : <div className="table-row">
                        <div className="table-col">
                          <p>There are no affiliate programs that match your search criteria.</p>
                        </div>
                      </div>
                  }
                </div>
              </div>
              <ul id="pagination" className="pagination">
                {
                  paginationElement
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
      <InfoFooterComponent
        title={'Join the #1 Performance Marketing Network in Asia Pacific.'}
      />
    </div>
  )
}

Advertisers.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Advertisers
