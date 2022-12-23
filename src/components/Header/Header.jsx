import { Navbar } from 'flowbite-react/lib/cjs/components/Navbar';
import { Avatar } from 'flowbite-react/lib/cjs/components/Avatar';
import React, { useState, useEffect } from 'react';
import logo from '../../assets/img/logo.svg';
import '../../assets/scss/header.scss';
import { Cart } from '../Cart';

function Header(props) {
  const { order, handleBasketShow = Function.prototype } = props;
  const { logoAlt } = 'React-shop Logo';
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      <Navbar className={scroll ? 'header--active ' : 'header'}>
        {/* Логотип Header */}
        <Navbar.Brand className="header-logo">
          <a href="index.html">
            <img className="header-logo__pic" src={logo} alt={logoAlt} />
          </a>
          <div className="text-xl font-semibold header__title">React Shop</div>
        </Navbar.Brand>
        <div className="header-control">
          {/* корзина  */}
          <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
          {/* Login */}
          <Avatar rounded={true} size="sm" />
          {/* Mob Menu */}
          <Navbar.Toggle />
        </div>
      </Navbar>
    </>
  );
}
export { Header };
