import * as React from "react"
import { graphql } from "gatsby"
import LatestArticle from "../components/home/latest-articles";
import TaxCards from "../components/home/text-cards";

import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Homepage" />
      <section className="bg-blue-900 p-5 py-10 md:min-h-[200px] lg:min-h-[220px] flex justify-center text-center bg-no-repeat bg-center bg-hero-bg">
        <h1 className="self-center font-sans text-2xl font-semibold text-white md:text-3xl xl:text-4xl">
          Claiming back what's rightfully yours
        </h1>
      </section>
      <TaxCards cards={data.allPrismicTaxClaims.nodes} />
      <LatestArticle taxData={data.allPrismicTaxClaims.nodes} articles={data.allPrismicArticle.nodes.slice(0, 3)} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    allPrismicTaxClaims {
      nodes {
        uid
        prismicId
        data {
          title
        }
      }
    }
    allPrismicArticle(sort: {data: {update_date: DESC}}) {
      nodes {
        uid
        data {
          image {
            gatsbyImageData
          }
          title
          summary
          update_date
          claim_type {
            id
          }
        }
      }
    }
  }
`
