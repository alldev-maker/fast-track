exports.linkResolver = (doc) => {
  if (doc.type === 'tax_claims') {
    return `/${doc.uid}`
  }

  if (doc.type === 'article') {
    return `/article/${doc.uid}`
  }

  if (doc.type === 'blog') {
    return `/blog/${doc.uid}`
  }

  if (doc.type === 'blog_category') {
    return `/blog/category/${doc.uid}`
  }

  return '/'
}