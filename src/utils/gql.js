export const edgesByName = (collection, getter) => {
  return collection.reduce(
    (memo, node) => ({
      ...memo,
      [node.data.title]: getter(node),
    }),
    {}
  );
}

export const getTaxType = (tax, node) => {
  return tax.filter(item => item.prismicId === node.data.claim_type.id)[0].uid
}

export const getAnchor = (str) => {
  return str.toLowerCase().replace('?', '').split(' ').join('-')
}