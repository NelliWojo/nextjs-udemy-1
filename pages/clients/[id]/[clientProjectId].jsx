import { useRouter } from "next/router";
import React from "react";

const SelectedClientProjectPage = () => {
  const router = useRouter();

  console.log(router.query);

  return <div>SelectedClientProjectPage</div>;
};

export default SelectedClientProjectPage;
