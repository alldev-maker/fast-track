import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Claim from "../components/claim"
import ArticleSidebar from "../components/article/article-sidebar"
import ArticleBody from "../components/article/article-body"

const Article = ({ data, pageContext }) => {
  const { articleType } = pageContext
  return (
    <Layout>
      <Seo title={data.prismicArticle.data.title} />
      <Claim
        heading={articleType.data.box_heading}
        title={articleType.data.box_content}
        greenBtn={'Yes'}
        redBtn="No"
        items={articleType.data.claim_list}
      />
      <section className="py-6 md:py-10 lg:py-10">
        <div className="container mx-auto">
          <div className="lg:flex">
            <ArticleBody article={data.prismicArticle.data} articleType={articleType} />
            <ArticleSidebar article={data.prismicArticle.data.content.richText} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Article

export const query = graphql`
  query ArticleQuery($id: String) {
    prismicArticle(id: { eq: $id }) {
      data {
        title
        summary
        author
        update_date
        reading_time
        questions {
          question
        }
        image {
          gatsbyImageData
        }
        content {
          richText
        }
      }
    }
  }
`
