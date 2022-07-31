
type Props = {
  title?: any,
  description?: any
}
const HeroComponent = ({ title, description }: Props) => {
  return <section className="hero directory color-block--gradient-3">
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-lg-8 mb-4">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="col-lg-4 text-lg-right">
          <a className="button button--light large mb-2" href="#">Join Affiliate Program</a>
          <a className="button button--light lined large mb-2" href="#">Become an advertiser</a>
        </div>
      </div>
    </div>
  </section>
}

export default HeroComponent;