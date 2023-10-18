import { useRouter } from "next/router";
import React from "react";

const SelectedPortfolioProject = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return <div>SelectedPortfolioProject</div>;
};

export default SelectedPortfolioProject;
