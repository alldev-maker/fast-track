import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout";
import Seo from "../components/seo";
import BlogList from "../components/blog/blog-list";
import Sidebar from "../components/sidebar";

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Blog and News Updates" />
      <section className="flex justify-center py-6 text-center bg-sky-700">
        <div className="container flex">
          <h1 className="self-center text-3xl font-semibold leading-tight text-white">Blog</h1>
        </div>
      </section>
      <section className="py-14 md:py-16">
        <div className="container">
          <div className="lg:flex">
            <BlogList blogs={data.allPrismicBlog.nodes} />
            <Sidebar />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query BlogsQuery {
    allPrismicBlog {
      nodes {
        data {
          title
          update_date
          summary
          image {
            gatsbyImageData
          }
        }
        uid
      }
    }
  }
`
