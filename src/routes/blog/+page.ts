import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
const allPostFiles = import.meta.glob('/src/routes/blog/*.svx')
  const iterablePostFiles = Object.entries(allPostFiles)
  
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver() as any;
      const postPath = path.slice(11, -3)

      return {
        meta: metadata,
        path: postPath,
      }
    })
  )

  return { allPosts };
};