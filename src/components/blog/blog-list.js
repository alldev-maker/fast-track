import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogList = ({ blogs }) => {
  return (
    <div className="grid gap-10 basis-8/12 mb-14 max-h-[94px]">
      {
        blogs.map((item, idx) =>
          <article key={idx} className="flex flex-col items-center border shadow-lg md:flex-row card border-slate-200">
            <GatsbyImage image={getImage(item.data.image)} className="object-cover w-full h-48 rounded-t-lg md:h-full md:w-80 md:rounded-none md:rounded-l-lg shrink-0" alt={item.data.title} />
            <div className="flex flex-col justify-between p-8">
              <span className="block mb-2 text-sm text-slate-400">Updated: {item.data.update_date}</span>
              <Link to={`/blog/${item.uid}`}>
                <h5 className="mb-4 text-2xl font-semibold leading-tight text-slate-900 hover:text-slate-500">{item.data.title}</h5>
              </Link>
              <p className="mb-6 text-base text-slate-700 line-clamp-4">{item.data.summary}</p>
              <p><a href="https://moneybackhelpdesk.co.uk/blog/housing-and-renting-amidst-cost-of-living" className="font-semibold text-sky-700 hover:text-sky-800">Read more...</a></p>
            </div>
          </article>
        )
      }
    </div>
  )
}

export default BlogList