import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { IconContext } from 'react-icons';
import { GiHamburgerMenu } from 'react-icons/gi';
import { navlinks } from './assets_navlinks';

const Navbar = () => {
  return (
    <header className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <GiHamburgerMenu className="h-6 w-6" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <Link to={url} className="capitalize">
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost">
          <StaticImage
            src="../../0_assets/logo.png"
            alt="logo"
            placeholder="blurred"
            layout="constrained"
            width={35}
          />
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          {navlinks.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url} className="capitalize">
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </header>
  );
};
export default Navbar;
