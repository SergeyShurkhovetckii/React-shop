import { Navbar } from 'flowbite-react/lib/cjs/components/Navbar';
import { Avatar } from 'flowbite-react/lib/cjs/components/Avatar';
import { Tooltip } from 'flowbite-react/lib/cjs/components/Tooltip';
import React, { useState, useEffect } from 'react';
import logo from '../../assets/img/logo.svg';
import '../../assets/scss/header.scss';
import { Cart } from '../Cart';
import { Favorites } from '../Favorites';
// Routing configuration
// import { Routes, Route, Link } from 'react-router-dom';
// import { About } from '../../assets/pages/About';

function Header(props) {
  const { order, handleBasketShow = Function.prototype } = props;
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
            <img className="header-logo__pic" src={logo} alt="logo" />
          </a>
          <div className="text-xl font-semibold header__title">React Shop</div>
        </Navbar.Brand>
        {/* Menu */}
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>
            Главная
          </Navbar.Link>
          <Navbar.Link href="/shop">Каталог</Navbar.Link>
          <Navbar.Link href="/navbars">О проекте</Navbar.Link>
        </Navbar.Collapse>
        <div className="header-control">
          {/* Избранное */}
          <Tooltip trigger="hover" content="Избранное">
            <Favorites />
          </Tooltip>
          {/* корзина  */}
          <Tooltip trigger="hover" content="Корзина">
            <Cart className="icon" quantity={order.length} handleBasketShow={handleBasketShow} />
          </Tooltip>
          {/* Login */}
          <Tooltip trigger="hover" content="Вход">
            <Avatar className="login-btn icon" rounded={true} size="sm" />
          </Tooltip>
          {/* Mob Menu */}
          <Navbar.Toggle />
        </div>
      </Navbar>
    </>
  );
}
export { Header };
