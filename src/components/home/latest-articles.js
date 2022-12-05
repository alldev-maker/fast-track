import React from 'react'
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { getTaxType } from "../../utils/gql";

const LatestArticle = ({ articles, taxData }) => {
  return (
    <section className="py-10 md:py-20 bg-slate-100">
      <div className="container mx-auto">
        <h3 className="mb-8 text-3xl font-semibold md:text-3xl text-slate-500">
          Latest Guides &amp; Articles
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-y-0 gap-x-8">
          {
            articles.map((item, idx) =>
              <div className="shadow-lg group card" key={idx}>
                <Link to={`${getTaxType(taxData, item)}/${item.uid}`}>
                  <GatsbyImage className="w-full duration-200 ease-in rounded-t-lg group-hover:opacity-80" image={getImage(item.data.image)} alt={item.data.title} />
                  <div className="p-8">
                    <div className="flex items-center justify-between">
                      <span className="block mb-2 text-sm text-slate-400">
                        Updated: {item.data.update_date}
                      </span>
                    </div>
                    <h5 className="mb-4 font-sans text-2xl font-semibold leading-tight text-slate-900 group-hover:text-blue-700">
                      {item.data.title}
                    </h5>
                    <p className="mb-0 font-sans text-base line-clamp-5">
                      {item.data.summary}
                    </p>
                  </div>
                </Link>
              </div>
            )
          }
        </div>
      </div>
    </section>
  );
};

export default LatestArticle;
