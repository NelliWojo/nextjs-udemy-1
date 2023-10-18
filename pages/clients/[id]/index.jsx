import { useRouter } from "next/router";
import React from "react";

const ClientProjects = () => {
  const router = useRouter();

  console.log(router.query);

  const handleLoadProject = () => {
    // load data
    // router.replace() // leave the current page on click
    // router.push("/clients/1/projecta");
    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: {
        id: "1",
        clientProjectId: "projecta",
      },
    });
  };

  return (
    <div>
      <h1>ClientProjects</h1>
      <button onClick={handleLoadProject}>Load Project A</button>
    </div>
  );
};

export default ClientProjects;
