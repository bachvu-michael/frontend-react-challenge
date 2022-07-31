import Link from "next/link";

type Props = {
  campaignName?: any,
  category?: any,
  targetMarket?: any,
  profileFacebook?: any,
  profileTwitter?: any,
  profileInstagram?: any,
  avatarUrl?: any,
}
const HeroDetailComponent = (data: Props) => {
  return <section className="hero directory light">
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="breadcrumb">
          <a href="/advertisers">Back to Advertiser Directory</a>
        </div>
        <div className="col-lg-8 mb-4">
          <div className="page-title">
            <div className="page-title-img">
              <img src={data?.avatarUrl} alt={data?.campaignName} />
            </div>
            <div className="page-title-content">
              <h1 style={{ fontSize: 33, fontWeight: 'normal', margin: '0 0 10px' }}>{data?.campaignName}</h1>
              <p className="small">
                {data?.category}
                &nbsp; | &nbsp;
                {data?.targetMarket}
              </p>
              <div className="social">
                <Link
                  href={`${data?.profileFacebook}`}
                  target={'_blank'}
                  passHref
                >
                  <a href="#" target="_blank">
                    <img src="/static/images/icon-facebook.svg" alt="Facebook" />
                  </a>
                </Link>
                <Link
                  href={`${data?.profileTwitter}`}
                  target={'_blank'}
                  passHref
                >
                  <a href="#" target="_blank">
                    <img src="/static/images/icon-twitter.svg" alt="Twitter" />
                  </a>
                </Link>
                <Link
                  href={`${data?.profileInstagram}`}
                  target={'_blank'}
                  passHref
                >
                  <a href="#" target="_blank">
                    <img src="/static/images/icon-instagram.svg" alt="Instagram" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 text-lg-right">
          <a className="button button--primary large mb-2" href="#">Join Affiliate Program</a>
          <a className="button button--primary lined large mb-2" href="#" target="_blank">example.com</a>
        </div>
      </div>
    </div>
  </section>
}

export default HeroDetailComponent;