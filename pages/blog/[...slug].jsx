import { useRouter } from "next/router";
import React from "react";

const BlogArticlesPage = () => {
  const router = useRouter();

  console.log(router.query);

  return <div>BlogArticlesPage</div>;
};

export default BlogArticlesPage;
