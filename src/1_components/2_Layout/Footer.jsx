import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const Footer = () => {
  return (
    <div className="btm-nav bg-base-200 h-32 ">
      <div className="cursor-auto">
        <p className="text-center">
          Made with{' '}
          <Link
            to="https://www.gatsbyjs.com/"
            target="_blank"
            className="relative effect-underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 28"
              className="inline pr-1 pb-1 w-5 h-5"
              focusable="false"
            >
              <title>Gatsby</title>
              <path
                fill="#663399"
                d="M14,0C6.268,0,0,6.268,0,14s6.268,14,14,14s14-6.268,14-14S21.732,0,14,0z M6.2,21.8 C4.1,19.7,3,16.9,3,14.2L13.9,25C11.1,24.9,8.3,23.9,6.2,21.8z M16.4,24.7L3.3,11.6C4.4,6.7,8.8,3,14,3c3.7,0,6.9,1.8,8.9,4.5 l-1.5,1.3C19.7,6.5,17,5,14,5c-3.9,0-7.2,2.5-8.5,6L17,22.5c2.9-1,5.1-3.5,5.8-6.5H18v-2h7C25,19.2,21.3,23.6,16.4,24.7z"
              ></path>
              <g id="innards" fill="white">
                <path d="M6.2,21.8C4.1,19.7,3,16.9,3,14.2L13.9,25C11.1,24.9,8.3,23.9,6.2,21.8z"></path>
                <path d="M16.4,24.7L3.3,11.6C4.4,6.7,8.8,3,14,3c3.7,0,6.9,1.8,8.9,4.5l-1.5,1.3C19.7,6.5,17,5,14,5 c-3.9,0-7.2,2.5-8.5,6L17,22.5c2.9-1,5.1-3.5,5.8-6.5H18v-2h7C25,19.2,21.3,23.6,16.4,24.7z"></path>
              </g>
            </svg>
            Gatsby
          </Link>
          ,{' '}
          {
            <Link
              to="https://tailwindcss.com/"
              target="_blank"
              className="relative effect-underline"
            >
              <svg
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[#07B6D5] inline pr-1 pb-1 w-5 h-5"
              >
                <path
                  class="st0"
                  d="M489.5 226.499C328 231.632 280 346.999 269 409.499C283.333 386.332 328.5 335.5 395 335.5C472.5 335.5 531.5 422 567.5 449C611.237 481.803 699.123 525.115 814.5 490C906.5 462 949.167 364.332 958.5 317.999C914 378.499 846.5 414.838 763 371.999C705.5 342.499 662.5 221 489.5 226.499Z"
                />
                <path
                  class="st0"
                  d="M261 500.999C99.5 506.132 51.5 621.499 40.5 683.999C54.8333 660.832 100 610 166.5 610C244 610 303 696.5 339 723.5C382.737 756.303 470.623 799.615 586 764.5C678 736.5 720.667 638.832 730 592.499C685.5 652.999 618 689.338 534.5 646.499C477 616.999 434 495.5 261 500.999Z"
                />
              </svg>
              Tailwind
            </Link>
          }{' '}
          and{' '}
          <Link
            to="https://daisyui.com/"
            target="_blank"
            className="relative effect-underline"
          >
            <div className="inline pr-1 pb-1 w-5 h-5">
              <StaticImage
                src="https://raw.githubusercontent.com/saadeghi/daisyui/master/src/docs/static/images/daisyui-logo/favicon-192.png"
                placeholder="blurred"
                layout="constrained"
                className="h-full"
                width={20}
              />
            </div>
            DaisyUI
          </Link>
        </p>
        <span>
          by{' '}
          <Link
            to="https://github.com/CookedIdeas"
            target="_blank"
            className="relative effect-underline"
          >
            Gabriel Gourcerol/Cooked Ideas
          </Link>
        </span>
        <span>
          &#169; {new Date().getFullYear()} No copyright here actually ;)
        </span>
      </div>
    </div>
  );
};
export default Footer;
