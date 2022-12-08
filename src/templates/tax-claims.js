import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Claim from "../components/claim"

const TaxClaims = ({ data }) => {
  const {
    title,
    description,
    box_heading,
    box_content,
    claim_list,
  } = data.prismicTaxClaims.data
  const articles = data.allPrismicArticle.nodes.filter(item => item.data.claim_type.id === data.prismicTaxClaims.prismicId)
  return (
    <Layout>
      <Seo title={title} />
      <Claim
        heading={box_heading}
        title={box_content}
        greenBtn={'Yes'}
        redBtn={'No'}
        items={claim_list}
      />

      <section className="flex py-10">
        <div className="container flex flex-col items-center justify-center max-w-screen-lg px-4 mx-auto">
          <h1 className="mb-3 text-3xl font-semibold leading-tight">
            {title}
          </h1>
          <div className="md:text-center max-w-screen-md mx-auto space-y-4">
            <p>
              {description}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-screen-lg px-4 mx-auto">
          <h3 className="mb-6 text-3xl font-semibold text-center md:text-3xl text-slate-700">
            Featured Articles
          </h3>
          <div className="grid gap-8">
            {
              articles.map((item, idx) =>
                <div
                  key={idx}
                  className="flex flex-col items-center border rounded-lg shadow-lg md:flex-row card border-slate-200"
                >
                  <GatsbyImage className="object-cover w-full h-48 shrink-0 rounded-t-lg md:h-full md:w-80 md:rounded-none md:rounded-l-lg" image={getImage(item.data.image)} alt={item.data.title} />

                  <div className="flex flex-col justify-between p-8 md:p-12">
                    <span className="block mb-2 text-sm text-slate-400">
                      Updated: {item.data.update_date}
                    </span>
                    <Link to={item.uid}>
                      <h5 className="text-2xl font-semibold leading-tight text-slate-900 hover:text-blue-800">
                        {item.data.title}
                      </h5>
                      <span className="block mb-4 text-sm text-slate-400">
                        Author: {item.data.author}
                      </span>
                      <p className="mb-6 text-base line-clamp-3 text-slate-700">
                        {item.data.summary}
                      </p>
                      <p className="font-semibold text-slate-900 hover:text-blue-800 hover:underline">
                        Read more...
                      </p>
                    </Link>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default TaxClaims

export const query = graphql`
  query TaxClaimsQuery($id: String) {
    prismicTaxClaims(id: { eq: $id }) {
      _previewable
      prismicId
      data {
        title
        description
        box_heading
        box_content
        claim_list {
          item
        }
      }
    }
    allPrismicArticle {
      nodes {
        uid
        data {
          image {
            gatsbyImageData
          }
          title
          summary
          author
          update_date
          claim_type {
            id
          }
        }
      }
    }
  }
`
