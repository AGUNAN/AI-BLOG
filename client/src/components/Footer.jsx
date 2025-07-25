import React from 'react';
import { assets, footer_data } from '../asset/assets.js';

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        <div>
          <img src={assets.logo} alt="logo" className="w-32 sm:w-44" />
          <p className="max-w-[410px] mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            dolore voluptas, id est consectetur perferendis voluptatem provident
            aperiam, dicta optio obcaecati vero voluptate iusto, vitae impedit?
            A, cum pariatur? Tempora.
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 mb-2 md:mb-5">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1">
                {section.links.map((items, i) => (
                  <li key={i}>
                    <a className="hover:underline transition" href="">
                      {items}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright 2025 @ QuickBlog Agunan -All rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
