import { useRouter } from 'next/router'
import Head from 'next/head'
import useSwr from 'swr'
import ErrorPage from 'next/error'
import Link from 'next/link'
import LayoutDetail from '../../components/layoutDetail'
import { ReactElement, useEffect, useState } from 'react'
import { fetcher } from '../../services/fetcher'
import type Advertiser from '../../interfaces/advertiser'
import { NextPageWithLayout } from '../_app'
import InfoFooterComponent from '../../components/infoFooterComponent'
import HeroDetailComponent from '../../components/heroDetailComponent'
import ServiceAvailableComponent from '../../components/serviceAvailableComponent'

const AdvertiserDetail: NextPageWithLayout = (props) => {
  const router = useRouter()
  const [listAdvertiseRef, setListAdvertiseRef] = useState<Advertiser[]>();
  //get data Advertiser detail
  const { data, error } = useSwr<Advertiser>(
    router.query.slug ? `/api/advertisers/${router.query.slug}` : null,
    fetcher
  )

  useEffect(() => {
    //get data Advertisers referent
    fetcher(`/api/advertisers`).then((rs: Advertiser[]) => {
      setListAdvertiseRef(rs.filter((e) => data?.similarAdvertisers.includes(e.id)))
    })
  }, [data])

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{data?.campaignName} Affiliate Program - Commission Factory</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Browse the Commission Factory directory of Advertisers currently running an affiliate program and join to start promoting." />
      </Head>
      <HeroDetailComponent
        {...data}
      />
      <section className="pt-0 push-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-8">
              <div className="box stats mb-4">
                <div className="stats-content">
                  <div className="stats-content-row">
                    <div>
                      <h4>{data?.commissionRate}</h4>
                      <p>{data?.commissionType}</p>
                    </div>
                    <div>
                      <h4>{data?.cookieLength}</h4>
                      <p>tracking period</p>
                    </div>
                    <div>
                      <h4>{data?.commissionApproval}</h4>
                      <p>validation period</p>
                    </div>
                  </div>
                  <ServiceAvailableComponent
                    mobileWebsite={data?.mobileWebsite}
                    internationShipping={data?.internationShipping}
                    clicklessTracking={data?.clicklessTracking}
                  />
                </div>
                <div className="stats-thumb d-none d-lg-block"></div>
              </div>
              <div className="box mb-4">
                {data?.description}
              </div>
            </div>

            <div className="col-sm-12 col-lg-4">
              <div className="table table-small mb-4">
                {
                  listAdvertiseRef && listAdvertiseRef.length !== 0 && listAdvertiseRef.map((e, i) => {
                    return <div className="table-row" key={`list-ref-${i}`}>
                      <div className="table-col logo">
                        <img src={e.avatarUrl.toString()} alt={e.campaignName.toString()} />
                      </div>
                      <div className="table-col">
                        <p className="small">
                          <Link
                            href={`/advertisers/${e.id}`}
                            passHref
                          >
                            <a href="#" >{e.campaignName}</a>
                          </Link>
                        </p>
                        <p className="small grey">{e.category}</p>
                      </div>
                      <div className="table-col end">
                        <p>{e.commissionRate}</p><p className="small">{e.commissionType}</p>
                      </div>
                    </div>
                  })
                }
              </div>
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

AdvertiserDetail.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutDetail>
      {page}
    </LayoutDetail>
  )
}

export default AdvertiserDetail


type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const data = {};
  return {
    props: {
      post: {
        ...data,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = [{ slug: 'test' }]

  return {
    paths: posts.map((post: any) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: true,
  }

}
