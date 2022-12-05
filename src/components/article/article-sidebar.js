import React from 'react'
import { getAnchor } from "../../utils/gql";

const ArticleSidebar = ({ article }) => {
  const links = article.filter(item => item.type === 'heading2')

  return (
    <aside className="hidden lg:block lg:basis-4/12 lg:ml-10 xl:ml-20 text-base">
      <div className="md:sticky md:top-10">
        <div className="border-l-4 border-slate-100 border-left">
          <div className="p-8 py-4">
            <p className="text-2xl font-semibold mb-2">What's On This Page?</p>
            <p className="mb-4">Click the links below and head straight to a specific section of the article.</p>
            <ul className="m-0 font-medium font-sans space-y-4 leading-snug">
              {links?.map((link, index) => (
                <li key={index} className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-none w-5 mr-2 text-slate-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>{' '}
                  <a
                    href={`#${getAnchor(link.text)}`}
                    className="hover:text-blue-700"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ArticleSidebar;
