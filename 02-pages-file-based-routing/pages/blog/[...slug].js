// say domain.com/blog/something/something/something-else
// here for anything that comes after the word `blog` will be supplied with the same component

import { useRouter } from "next/router";

const BlogPostPage = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
};

export default BlogPostPage;
