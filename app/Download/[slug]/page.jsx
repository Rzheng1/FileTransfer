import React from "react";
import Page from ".";

export const metadata = {
  title: "File Transfer",
  description: "Web site created using create-react-app",
  //ogTitle:'...'
};

const DownloadPage = ({ params: { slug } }) => {
  return <Page slug={slug} />;
};
export default DownloadPage;
