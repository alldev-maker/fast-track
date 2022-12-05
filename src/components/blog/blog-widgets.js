import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const BlogWidgets = () => {
  const { allPrismicBlogCategory } = useStaticQuery(
    graphql`
      query {
        allPrismicBlogCategory {
          nodes {
            data {
              type
            }
            uid
          }
        }
      }
    `
  )
  const categories = allPrismicBlogCategory.nodes

  return <ul className="space-y-3 mb-14 list-none">
    {
      categories.map((item, idx) =>
        <li key={idx}>
          <Link to={`/blog/category/${item.uid}`} className="flex items-center p-3 border font-medium hover:text-blue-700 border-slate-200 rounded-md bg-slate-50 hover:bg-white ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg> {item.data.type}
          </Link>
        </li>
      )
    }
  </ul>
}

export default BlogWidgets