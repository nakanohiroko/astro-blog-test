import { createClient } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: "ystujel7ys",
  apiKey: "qhpGtBtAgUGDvu72L8Fr5eCGGTQ6Qhh5e0gQ"
});
const getBlogList = async (queries) => {
  return await client.getList({ endpoint: "blog", queries });
};
const getBlogDetail = async (contentId, queries) => {
  return await client.getListDetail({
    endpoint: "blog",
    contentId,
    queries
  });
};

export { getBlogList as a, getBlogDetail as g };
