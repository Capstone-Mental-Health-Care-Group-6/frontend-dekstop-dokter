import React from "react";
import Navbar from "../../components/fragments/Navbar/Navbar";
import Layout from "../../layout";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Layout>
        <div>Section 1</div>
        <div>Section 2</div>
        <div>Section 3</div>
        <div>Section 4</div>
        <div>Footer</div>
      </Layout>
    </div>
  );
};

export default LandingPage;
