import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { navlinks } from './assets_navlinks';
import { BsSunFill, BsFillMoonFill } from 'react-icons/bs';
import LogoForNavbar from './LogoForNavbar';

const themes = {
  // themes from  https://daisyui.com/docs/themes/
  light: 'corporate',
  dark: 'dark',
};

const Navbar = () => {
  // === SWITCH THEME === //
  // use of localStorage to store user preference
  // prevent gatsby build error when using localStorage : WebpackError: ReferenceError: window is not defined
  // use of "typeof window !== 'undefined' && window.localStorage.whatever-is-next" instead of "window.localStorage.whatever-is-next"

  const getThemeFromLocalStorage = () => {
    return (
      (typeof window !== 'undefined' &&
        window.localStorage.getItem('gatsbySite_theme')) ||
      themes.light
    );
  };

  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  const handleTheme = () => {
    const { light, dark } = themes;
    const newTheme = theme === dark ? light : dark;

    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    typeof window !== 'undefined' &&
      window.localStorage.setItem('gatsbySite_theme', theme);
  }, [theme]);

  return (
    <header className="navbar bg-base-300 px-2 sm:px-5 md:px-10">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost" aria-label="back to home page">
          <LogoForNavbar />
        </Link>
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost md:hidden"
            aria-label="toggle nav links menu"
          >
            <GiHamburgerMenu className="h-6 w-6" />
          </button>
          <button
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52"
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
          </button>
        </div>
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
      <div className="navbar-end pr-6">
        {/* THEME ICONS */}
        <label className="swap swap-flip" aria-label="toggle theme">
          <input type="checkbox" onChange={handleTheme} />
          <BsSunFill className="swap-on h-4 w-4 " />
          <BsFillMoonFill className="swap-off h-4 w-4" />
        </label>
      </div>
    </header>
  );
};
export default Navbar;
