
type Props = {
  title?: any,
}
const InfoFooterComponent = ({ title }: Props) => {
  return <section className="color-block--gradient">
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-md-7">
          <h3>{title}</h3>
        </div>
        <div className="col-md-5 text-md-right">
          <a className="button button--light large" href="#" >Become an Affiliate</a>
        </div>
      </div>
    </div>
  </section>
}

export default InfoFooterComponent;