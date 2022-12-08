import * as React from 'react'
import {
  PrismicPreviewProvider,
  componentResolverFromMap,
} from 'gatsby-plugin-prismic-previews'

import { linkResolver } from "./src/utils/linkResolver"
import Article from "./src/templates/article"
import TaxClaims from "./src/templates/tax-claims"
import Blog from "./src/templates/blog-detail"
import Category from "./src/templates/category"
import './src/styles/global.css'

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider
    repositoryConfigs={[
      {
        repositoryName: "fast-track",
        linkResolver,
        componentResolver: componentResolverFromMap({
          tax_claims: TaxClaims,
          article: Article,
          blog: Blog,
          category: Category
        }),
      },
    ]}
  >
    {element}
  </PrismicPreviewProvider>
)