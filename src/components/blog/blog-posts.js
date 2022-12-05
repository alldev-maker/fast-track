import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const RecentPosts = () => {
  const { allPrismicBlog } = useStaticQuery(
    graphql`
      query {
        allPrismicBlog(sort: {data: {update_date: DESC}}) {
          nodes {
            data {
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
  const recent_posts = allPrismicBlog.nodes

  return <>
    {
      recent_posts.map((item, idx) =>
        <Link to={`/blog/${item.uid}`} className="flex items-center mb-5 border p-2 border-slate-200 rounded-md bg-slate-50 hover:bg-white group" key={idx}>
          <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mr-5">
            <GatsbyImage image={getImage(item.data.image)} className="block object-cover w-20 h-20 duration-200 rounded group-hover:opacity-60" alt={item.data.title} />
          </div>
          <div className="flex-grow text-left">
            <h4 className="font-medium text-slate-800 group-hover:text-blue-800">{item.data.title}</h4>
          </div>
        </Link>
      )
    }
  </>
}

export default RecentPosts