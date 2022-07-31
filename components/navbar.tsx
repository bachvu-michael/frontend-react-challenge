import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PropsNav } from '../interfaces/type';
import logoPic from '../static/images/logo-white.svg'

export default function Navbar(props: PropsNav) {

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
  // list main menu, we can dynamic by API
  const listMenuPages = [{
    menuTitle: 'Affiliates',
    url: '/',
  }, {
    menuTitle: 'Advertisers',
    url: '/advertisers',
  }, {
    menuTitle: 'Agencies',
    url: '/',
  }, {
    menuTitle: 'Careers',
    url: '/',
  }, {
    menuTitle: 'Blog',
    url: '/',
  },
  {
    menuTitle: 'Contact Us',
    url: '/',
  }];
  return (
    <>
      <header className={`${!props.isDetailPage ? 'transparent' : ''} ${classHeader}`}>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/" >
              <Image
                src={logoPic}
                alt="Commission Factory - Part of Awin"
                title="Commission Factory - Part of Awin"
                style={{ verticalAlign: 'middle' }}
              />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample03" style={{ whiteSpace: 'nowrap' }}>
              <ul className="navbar-nav mr-auto">
                {
                  listMenuPages.map((e, i, arr) => {
                    return <li key={`main-menu-${i}`} className="nav-item">
                      <a className="nav-link" href={`${e.url}`} >{e.menuTitle}</a>
                    </li>
                  })
                }
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
    </>
  )
}