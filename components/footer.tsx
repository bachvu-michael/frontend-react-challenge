/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import logoPic from '../public/images/logo-white.svg'
import twitterPic from '../public/images/footer-twitter.svg'
import facebookPic from '../public/images/footer-facebook.svg'
import linkedinPic from '../public/images/footer-linkedin.svg'
import iabLogo from '../public/images/logo-iab.png'
import noraLogo from '../public/images/logo-nora.png'




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
                  <li><a href="#">Affiliate Tour</a></li>
                  <li><a href="#">Advertiser Tour</a></li>
                  <li><a href="#">Agency Tour</a></li>
                  <li><a href="#">{`FAQ's`}</a></li>
                  <li><a href="#">Glossary</a></li>
                </ul>
              </div>
              <div className="col-xs-6 col-sm-3">
                <h4>About</h4>
                <ul>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Advertiser Directory</a></li>
                  <li><a href="#">What Is Affiliate Marketing?</a></li>
                </ul>
              </div>
              <div className="col-xs-6 col-sm-3">
                <h4>Support</h4>
                <ul>
                  <li><a href="#">Help</a></li>
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">API</a></li>
                </ul>
              </div>
              <div className="col-xs-6 col-sm-3">
                <h4>Extra</h4>
                <ul>
                  <li><a href="#">iPhone App</a></li>
                  <li><a href="#">Android App</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Blog</a></li>
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