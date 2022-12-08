import * as React from 'react'
import { withPrismicUnpublishedPreview } from 'gatsby-plugin-prismic-previews'
import Layout from "../components/layout"

const NotFoundPage = () => {
  return (
    <Layout>
      <div>
        <h1>Not found</h1>
      </div>
    </Layout>
  )
}

export default withPrismicUnpublishedPreview(NotFoundPage)