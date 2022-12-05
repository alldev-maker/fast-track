import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogList from "../components/blog/blog-list"
import Sidebar from "../components/sidebar"

const Category = ({ data }) => {
  const blogs = data.allPrismicBlog.nodes.filter(item => item.data.category.id === data.prismicBlogCategory.prismicId)
  return (
    <Layout>
      <Seo title={`Blog and News Updates ${data.prismicBlogCategory.data.type}`} />
      <section className="flex justify-center py-6 text-center bg-sky-700">
        <div className="container flex">
          <h1 className="self-center text-3xl font-semibold leading-tight text-white">Blog - {data.prismicBlogCategory.data.type}</h1>
        </div>
      </section>
      <section className="py-14 md:py-16">
        <div className="container">
          <div className="lg:flex">
            <BlogList blogs={blogs} />
            <Sidebar showRecent />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Category

export const query = graphql`
  query CategoryQuery($id: String) {
    prismicBlogCategory(id: { eq: $id }) {
      data {
        type
      }
      prismicId
    }
    allPrismicBlog {
      nodes {
        data {
          title
          update_date
          summary
          image {
            gatsbyImageData
          }
          category {
            id
          }
        }
        uid
      }
    }
  }
`
