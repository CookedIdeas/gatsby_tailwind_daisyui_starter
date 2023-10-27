import { Link } from 'gatsby';
import React from 'react';

const HeroContent = ({ isHomePage = false, title, text }) => {
  return (
    <div className="flex items-center order-2 lg:order-1">
      <div className="flex flex-col gap-8 ">
        <h1 className={`${isHomePage && 'text-7xl'}`}>{title}</h1>
        <p className="text-lg leading-6 md:leading-8 max-w-xl">{text}</p>
        {isHomePage && (
          <div className="flex flex-row gap-4">
            <Link to="services" className="btn btn-primary">
              Our services
            </Link>
            <Link to="products" className="btn btn-secondary">
              Our products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default HeroContent;
