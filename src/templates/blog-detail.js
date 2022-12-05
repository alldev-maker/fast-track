import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { RichText } from "prismic-reactjs"

import Layout from "../components/layout"
import Seo from "../components/seo"
import htmlSerializer from "../utils/htmlSerializer"
import Sidebar from "../components/sidebar"

const Blog = ({ data }) => {
  const blogData = data.prismicBlog.data
  console.log(data)
  return (
    <Layout>
      <Seo title={blogData.title} />
      <section className="flex justify-center py-6 text-center bg-sky-700">
        <div className="container flex">
          <h1 className="self-center text-3xl font-semibold leading-tight text-white">Blog</h1>
        </div>
      </section>
      <section className="py-14 md:py-16">
        <div className="container">
          <div className="lg:flex">
            <article className="mb-14 lg:basis-8/12">
              <Link to="/blog" className="font-bold text-slate-500 hover:text-slate-400 inline-flex items-center mb-6"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path>
              </svg> Back to Blog
              </Link>
              <h1 className="mb-5 text-3xl font-bold md:text-4xl xl:text-5xl xl:leading-tight">{blogData.title}</h1>
              <GatsbyImage image={getImage(blogData.image)} className="object-cover w-full mt-10 h-auto" alt={blogData.title} />
              <div className="border-b border-slate-200 py-4 mb-10">
                <div className="inline-grid grid-cols-1 sm:grid-cols-3 text-sm sm:divide-x-2 sm:divide-slate-200 sm:divide-solid ">
                  <div className="sm:pr-4">Author: {blogData.author}</div>
                  <div className="sm:px-4">Updated: {blogData.update_date}</div>
                  <div className="flex flex-row items-center sm:pl-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-4 h-4 text-slate-400 mr-2 hidden xl:block" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg> {blogData.reading_time} minutes read
                  </div>
                </div>
              </div>
              <div className="prose lg:prose-lg xl:prose-xl prose-slate max-w-none prose-ul:mb-0">
                <RichText render={blogData.content.richText} htmlSerializer={htmlSerializer} />
              </div>
            </article>
            <Sidebar showRecent />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query BlogQuery($id: String) {
    prismicBlog(id: { eq: $id }) {
      data {
        title
        summary
        reading_time
        update_date
        content {
          richText
        }
        author
        category {
          id
        }
        image {
          gatsbyImageData
        }
      }
    }
  }
`
