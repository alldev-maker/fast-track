import * as React from "react"
import BlogWidgets from "./blog/blog-widgets"
import RecentPosts from "./blog/blog-posts"

const Sidebar = ({ showRecent = false }) => {
  return <aside className="lg:basis-4/12 lg:ml-10 xl:ml-20">

    <h4 className="mb-4 text-2xl font-semibold text-slate-500">Categories</h4>
    <BlogWidgets />

    {showRecent && <>
      <h4 className="mb-8 font-semibold text-2xl text-slate-500">Recent posts</h4>
      <RecentPosts />
    </>}
  </aside>
}

export default Sidebar