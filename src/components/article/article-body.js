import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import { RichText } from "prismic-reactjs";
import htmlSerializer from "../../utils/htmlSerializer";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ArticleBody = ({ article, articleType }) => {
  const { allPrismicArticle } = useStaticQuery(
    graphql`
      query {
        allPrismicArticle {
          nodes {
            data {
              claim_type {
                id
              }
              title
              image {
                gatsbyImageData
              }
            }
            uid
          }
        }
      }
    `
  )
  const related_articles = allPrismicArticle.nodes.filter(item => item.data.claim_type.id === articleType.prismicId)

  return (
    <article className="mb-14 lg:basis-8/12">
      <h1 className="mb-5 text-3xl text-slate-900 font-bold md:text-4xl xl:text-5xl xl:leading-tight">
        {article.title}
      </h1>

      <div className="mb-4 md:mb-6">
        <div className="sm:flex items-center text-xs sm:text-sm sm:divide-x-2 sm:divide-slate-200 sm:divide-solid">
          <div className="sm:pr-4">Author: {article.author}</div>
          <div className="sm:px-4">Updated: {article.update_date}</div>
          <div className="flex flex-row items-center sm:pl-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="w-4 h-4 text-slate-400 mr-2 hidden xl:block"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>{' '}
            {article.reading_time} minutes read
          </div>
        </div>
      </div>

      <div className="prose lg:prose-lg prose-slate max-w-none prose-ul:mb-0">
        <RichText render={article.content.richText} htmlSerializer={htmlSerializer} />
      </div>
      <div className="addthis_inline_share_toolbox mt-10"></div>
      <section className="pt-10 mt-10 border-t border-slate-300">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-semibold md:text-3xl text-slate-500">
            Related articles
          </h3>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          {
            related_articles.map((item, idx) =>
              <Link
                // to={`/${articleType.uid}/${item.uid}`}
                to={`/article/${item.uid}`}
                className="group"
                key={idx}
              >
                <GatsbyImage image={getImage(item.data.image)}
                  className="w-full h-40 object-cover duration-200 ease-in rounded group-hover:opacity-80 mb-2"
                  src="https://moneybackhelpdesk.co.uk/images/articles/Marriage/_articleCard/Marriage-Tax-Benefits.jpg"
                  alt={item.data.title}
                />
                <h5 className="mb-4 text-base font-semibold leading-tight text-slate-900 group-hover:text-blue-800">
                  {item.data.title}
                </h5>
              </Link>

            )
          }

        </div>
      </section>
    </article>
  );
};

export default ArticleBody;
