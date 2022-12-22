import { Navbar } from 'flowbite-react/lib/cjs/components/Navbar';
import React, { useState, useEffect } from 'react';
import logo from '../../assets/img/logo.svg';
import '../../assets/scss/header.scss';

function Header() {
  const { logoAlt } = 'React-shop Logo';
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <Navbar className={scroll ? 'header--active ' : 'header'}>
      {/* Логотип Header */}
      <Navbar.Brand className="header-logo">
        <a href="/home">
          <img className="header-logo__pic" src={logo} alt={logoAlt} />
        </a>
        <div className="text-xl font-semibold">React Shop</div>
      </Navbar.Brand>
    </Navbar>
  );
}
export { Header };
