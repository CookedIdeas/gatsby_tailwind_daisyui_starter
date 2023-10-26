import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { navlinks } from './assets_navlinks';
import { BsSunFill, BsFillMoonFill } from 'react-icons/bs';

const themes = {
  corporate: 'corporate',
  dark: 'dark',
};

const getThemeFromLocalStorage = () => {
  return localStorage.getItem('gatsbySite_theme') || themes.corporate;
};

const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  const handleTheme = () => {
    const { corporate, dark } = themes;
    const newTheme = theme === dark ? corporate : dark;

    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('gatsbySite_theme', theme);
  }, [theme]);

  return (
    <header className="navbar bg-base-200 px-2 sm:px-5 md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost md:hidden">
            <GiHamburgerMenu className="h-6 w-6" />
          </button>
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
          {theme === 'dark' ? (
            <StaticImage
              src="../../0_assets/logo_dark.png"
              alt="logo"
              placeholder="blurred"
              layout="constrained"
              width={35}
            />
          ) : (
            <StaticImage
              src="../../0_assets/logo_light.png"
              alt="logo"
              placeholder="blurred"
              layout="constrained"
              width={35}
            />
          )}
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
        {/* THEME ICONS */}
        <label className="swap swap-flip ">
          <input type="checkbox" onChange={handleTheme} />
          <BsSunFill className="swap-on h-4 w-4 " />
          <BsFillMoonFill className="swap-off h-4 w-4" />
        </label>
      </div>
    </header>
  );
};
export default Navbar;
