import Image from 'next/image'
import { useEffect, useState } from 'react';
import logoPic from '../public/images/logo-white.svg'

export default function Navbar() {

  const [classHeader, setClassHeader] = useState('');
  
  //this function for convert scroll menu function
  useEffect(() => {
    setClassHeader('');
    function onScrollBig() {
      const scrollTop = window.scrollY;
      let prev = 0;
      let classParam = '';
      if (scrollTop >= 1) {
        classParam = 'fixed ';
      } else {
        classParam = '';
      }
      setClassHeader(`${classParam} ${scrollTop > prev ? 'hide' : ''}`);
      prev = scrollTop;
    }
    function onScrollSmall() {
      const scrollTop = window.scrollY;
      if (scrollTop >= 1) {
        setClassHeader('fixed');
      }
      else {
        setClassHeader('');
      }
    }
    if (window.innerWidth > 992) {
      window.removeEventListener('scroll', onScrollBig);
      window.addEventListener('scroll', onScrollBig, { passive: true });
      return () => window.removeEventListener('scroll', onScrollBig);
    } else {
      window.removeEventListener('scroll', onScrollSmall);
      window.addEventListener('scroll', onScrollSmall, { passive: true });
      return () => window.removeEventListener('scroll', onScrollSmall);
    }
  }, []);
  return (
    <>
      <header className={`transparent ${classHeader}`}>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#" />
            <Image
              src={logoPic}
              alt="Commission Factory - Part of Awin"
              title="Commission Factory - Part of Awin"
              style={{ verticalAlign: 'middle' }}
            />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample03" style={{ whiteSpace: 'nowrap' }}>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#" >Affiliates</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" >Advertisers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" >Agencies</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" >Careers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" >Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" >Contact Us</a>
                </li>
              </ul>

              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#" >Log In</a>
                </li>
                <li className="nav-item d-inline-block d-lg-none">
                  <a className="nav-link" href="#" >Sign Up</a>
                </li>
                <li className="nav-item d-none d-lg-inline-block">
                  <a className="nav-link button" href="#" >Sign Up</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <section className="hero directory color-block--gradient-3">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-8 mb-4">
              <h2>Advertiser Directory</h2>
              <p>Below is a comprehensive list of all Commission Factory Advertisers currently running an affiliate program. If you would like to promote these merchants you can sign up as an affiliate and get started right away.</p>
            </div>
            <div className="col-lg-4 text-lg-right">
              <a className="button button--light large mb-2" href="#">Join Affiliate Program</a>
              <a className="button button--light lined large mb-2" href="#">Become an advertiser</a>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}