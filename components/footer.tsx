/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import logoPic from '../static/images/logo-white.svg'
import twitterPic from '../static/images/footer-twitter.svg'
import facebookPic from '../static/images/footer-facebook.svg'
import linkedinPic from '../static/images/footer-linkedin.svg'
import iabLogo from '../static/images/logo-iab.png'
import noraLogo from '../static/images/logo-nora.png'
import { columnAbout, columnExtra, columnLearnMore, columnSupport } from '../interfaces/enum'

export default function Footer() {

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mb-2">
            <a className="site-brand" href="#">
              <Image
                src={logoPic}
                alt="Commission Factory - Part of Awin"
                title="Commission Factory - Part of Awin"
              />
            </a>
            <p className="mt-2">
              401/32 Martin Place<br />
              Sydney NSW 2000<br />
              Australia
            </p>
            <p className="mt-2">
              <a href="tel:+61 2 9229 7000">+61 2 9229 7000</a>
            </p>
          </div>
          <div className="col-lg-7 mb-2">
            <div className="row">
              <div className="col-xs-6 col-sm-3">
                <h4>Learn More</h4>
                <ul>
                  {
                    columnLearnMore.map((e, i) => {
                      return <li key={`footer-learn-more-${i}`}><a href={e.url}>{e.title}</a></li>
                    })
                  }
                </ul>
              </div>
              <div className="col-xs-6 col-sm-3">
                <h4>About</h4>
                <ul>
                  {
                    columnAbout.map((e, i) => {
                      return <li key={`footer-about-${i}`}><a href={e.url}>{e.title}</a></li>
                    })
                  }
                </ul>
              </div>
              <div className="col-xs-6 col-sm-3">
                <h4>Support</h4>
                <ul>
                  {
                    columnSupport.map((e, i) => {
                      return <li key={`footer-support-${i}`}><a href={e.url}>{e.title}</a></li>
                    })
                  }
                </ul>
              </div>
              <div className="col-xs-6 col-sm-3">
                <h4>Extra</h4>
                <ul>
                  {
                    columnExtra.map((e, i) => {
                      return <li key={`footer-extra-${i}`}><a href={e.url}>{e.title}</a></li>
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 mb-2">
            <div className="social">
              <a href="#">
                <Image
                  src={twitterPic}
                  alt="Twitter"
                />
              </a>
              <a href="#">
                <Image
                  src={facebookPic}
                  alt="Facebook"
                />
              </a>
              <a href="#">
                <Image
                  src={linkedinPic}
                  alt="Linkedin"
                />
              </a>
            </div>
            <div className="logos">
              <span>
                <Image
                  src={iabLogo}
                  alt=""
                  height={20}
                  width={40}
                />
              </span>
              <span>
                <Image
                  src={noraLogo}
                  alt=""
                  height={20}
                  width={67}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <p>
                Copyright &copy; 2011 - 2022, Commission Factory Pty Ltd | ABN: 15 149 765 631. "Commission Factory" is a trademark of Commission Factory Pty Ltd.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}